import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, readFile, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const publicDir = path.join(root, 'public', 'games', 'voidling-bound');
const wikiImageDir = path.join(publicDir, 'wiki');
const outputFile = path.join(root, 'src', 'lib', 'voidling-bound-wiki-data.ts');
const wikiApi = 'https://voidlingbound.wiki.gg/api.php';
const steamApi = 'https://store.steampowered.com/api/appdetails?appids=2004680&l=english';
const userAgent = 'Enjoy4Game Voidling Bound data sync contact: stephen@enjoy4game.com';
const maxNewWikiImages = Number(process.env.VOIDLING_WIKI_IMAGE_LIMIT ?? 80);
let newWikiImageDownloads = 0;

const speciesOrder = [
  'Kwipeck',
  'Gilick',
  'Kerapin',
  'Gwigoon',
  'Anami',
  'Ur-Sek',
  'Morfang',
  'Nimiod',
  'Packuran',
];

const rarityNames = new Set(['Common', 'Rare', 'Superior', 'Exotic', 'Mutated']);
const abilitySlots = ['Primary', 'Secondary', 'Tertiary', 'Defense', 'Movement', 'Ultimate', 'Perk'];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function decodeHtml(value) {
  return value
    .replace(/&#160;|&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function stripHtml(value) {
  return decodeHtml(value)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripWiki(value) {
  return value
    .replace(/\{\{#ev:youtube[\s\S]*?\}\}/g, ' ')
    .replace(/\{\{Icon\|([^}]+)\}\}/g, '$1')
    .replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/\{\{Clear\}\}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function compact(value, max = 360) {
  const normalized = value.replace(/\s+/g, ' ').trim();
  if (normalized.length <= max) return normalized;
  return `${normalized.slice(0, max - 1).trim()}...`;
}

async function wikiQuery(params) {
  const url = `${wikiApi}?${new URLSearchParams({ format: 'json', ...params })}`;
  const response = await fetchWithRetry(url);
  if (!response.ok) throw new Error(`Wiki request failed ${response.status}: ${url}`);
  return response.json();
}

async function fetchWithRetry(url, attempts = 3) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, { headers: { 'user-agent': userAgent } });
      if (response.ok || attempt === attempts) return response;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 900 * attempt));
  }
  throw lastError;
}

async function download(url, target) {
  if (existsSync(target)) return;
  const response = await fetchWithRetry(url);
  if (!response.ok) throw new Error(`Download failed ${response.status}: ${url}`);
  await writeFile(target, Buffer.from(await response.arrayBuffer()));
}

function runFfmpeg(input, output, size = 640) {
  return new Promise((resolve, reject) => {
    const child = spawn('ffmpeg', [
      '-y',
      '-loglevel',
      'error',
      '-i',
      input,
      '-vf',
      `scale='min(${size},iw)':-2`,
      '-quality',
      '78',
      output,
    ]);
    child.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exited with ${code}: ${input}`));
    });
  });
}

function extractSpeciesSummaries(raw) {
  return speciesOrder.map((species) => {
    const pattern = new RegExp(`==\\[\\[${species.replace('-', '\\-')}\\]\\]==([\\s\\S]*?)(?=\\n==\\[\\[|$)`);
    const section = raw.match(pattern)?.[1] ?? '';
    const elements = [...section.matchAll(/\{\{Icon\|([^}]+)\}\}/g)].map((match) => match[1]);
    return {
      name: species,
      slug: slugify(species),
      elements: [...new Set(elements)],
      summary: compact(stripWiki(section), 520),
      wikiUrl: `https://voidlingbound.wiki.gg/wiki/${encodeURIComponent(species.replaceAll(' ', '_'))}`,
    };
  });
}

function parseHeadings(html) {
  return [...html.matchAll(/<h([23])[^>]*>[\s\S]*?<span[^>]+id="([^"]+)"[^>]*>([\s\S]*?)<\/span>[\s\S]*?<\/h\1>/g)]
    .map((match) => ({
      id: match[2],
      text: stripHtml(match[3]),
      index: match.index ?? 0,
    }))
    .filter((heading) => heading.text && heading.text !== 'Contents');
}

function extractField(text, label, stopLabels) {
  const next = stopLabels.map((stop) => `\\s+${stop}\\s+`).join('|');
  const pattern = new RegExp(`\\b${label}\\s+([\\s\\S]*?)(?:${next}|$)`);
  return compact(text.match(pattern)?.[1] ?? '', 260);
}

function parseAbility(value) {
  const words = value.split(' ');
  if (words.length <= 3) return { name: value, description: '' };
  const firstVerb = words.findIndex((word, index) => index > 0 && /^[A-Z]?[a-z]+(?:ing|ed|es|s)?$/.test(word) && ['Shoot', 'Spawn', 'Leap', 'Throw', 'Unleash', 'Release', 'Charge', 'Lunge', 'Slash', 'Dash', 'Create', 'Summon', 'Spray', 'Launch', 'Gain', 'Roll', 'Bash', 'Cast'].includes(word.replace(/[^A-Za-z]/g, '')));
  if (firstVerb > 0) {
    return {
      name: words.slice(0, firstVerb).join(' '),
      description: words.slice(firstVerb).join(' '),
    };
  }
  return {
    name: words.slice(0, Math.min(3, words.length)).join(' '),
    description: words.slice(Math.min(3, words.length)).join(' '),
  };
}

function parseVoidlingSection({ species, rarity, heading, sectionText }) {
  const element = extractField(sectionText, 'Element', ['Color', 'Eye', 'Pattern', 'Size', 'Type', ...abilitySlots]);
  const color = extractField(sectionText, 'Color', ['Eye', 'Pattern', 'Size', 'Type', ...abilitySlots]);
  const eye = extractField(sectionText, 'Eye', ['Pattern', 'Size', 'Type', ...abilitySlots]);
  const pattern = extractField(sectionText, 'Pattern', ['Size', 'Type', ...abilitySlots]);
  const size = extractField(sectionText, 'Size', ['Element', 'Color', 'Eye', 'Pattern', 'Type', ...abilitySlots]);
  const abilities = abilitySlots
    .map((slot) => {
      const value = extractField(sectionText, slot, abilitySlots.filter((item) => item !== slot).concat(['Modules']));
      if (!value || value === '--') return null;
      return { slot, ...parseAbility(value) };
    })
    .filter(Boolean);

  return {
    name: heading.text,
    slug: slugify(heading.text),
    species,
    rarity,
    element: element || 'Neutral',
    color,
    eye,
    pattern,
    size,
    abilities,
    summary: compact(`${heading.text} is a ${rarity.toLowerCase()} ${species} evolution with ${element || 'Neutral'} element data on the Voidling Bound Wiki. ${abilities.slice(0, 2).map((ability) => `${ability.slot}: ${ability.name}`).join('. ')}`, 360),
    imageFile: `${heading.text}.jpg`,
    wikiUrl: `https://voidlingbound.wiki.gg/wiki/List_of_${encodeURIComponent(species.replaceAll(' ', '_'))}_Evolutions#${heading.id}`,
  };
}

async function parseEvolutionPage(species) {
  const pageTitle = `List of ${species} Evolutions`;
  const parsed = await wikiQuery({ action: 'parse', page: pageTitle, prop: 'text|links|images' });
  const html = parsed.parse.text['*'];
  const headings = parseHeadings(html);
  let currentRarity = 'Common';
  const entries = [];

  for (let index = 0; index < headings.length; index += 1) {
    const heading = headings[index];
    if (rarityNames.has(heading.text)) {
      currentRarity = heading.text;
      continue;
    }
    const nextIndex = headings[index + 1]?.index ?? html.length;
    const sectionText = stripHtml(html.slice(heading.index, nextIndex));
    entries.push(parseVoidlingSection({
      species,
      rarity: currentRarity,
      heading,
      sectionText,
    }));
  }

  return entries;
}

async function fetchImageInfo(fileName) {
  const result = await wikiQuery({
    action: 'query',
    titles: `File:${fileName}`,
    prop: 'imageinfo',
    iiprop: 'url|size|mime|sha1',
  });
  const page = Object.values(result.query.pages)[0];
  return page?.imageinfo?.[0] ?? null;
}

async function downloadWikiImage(entry) {
  const webpName = `${entry.slug}.webp`;
  const finalPath = path.join(wikiImageDir, webpName);
  if (existsSync(finalPath)) return { image: `/games/voidling-bound/wiki/${webpName}`, source: null };
  if (newWikiImageDownloads >= maxNewWikiImages) {
    return { image: '/games/voidling-bound/card.webp', source: null };
  }

  const imageInfo = await fetchImageInfo(entry.imageFile);
  if (!imageInfo?.url) return { image: '/games/voidling-bound/card.webp', source: null };

  const extension = path.extname(new URL(imageInfo.url).pathname) || '.jpg';
  const tempPath = path.join(wikiImageDir, `${entry.slug}${extension}`);
  await download(imageInfo.url, tempPath);
  await runFfmpeg(tempPath, finalPath, 640);
  await unlink(tempPath).catch(() => {});
  newWikiImageDownloads += 1;
  return {
    image: `/games/voidling-bound/wiki/${webpName}`,
    source: {
      file: entry.imageFile,
      sourceUrl: imageInfo.descriptionurl ?? `https://voidlingbound.wiki.gg/wiki/File:${encodeURIComponent(entry.imageFile.replaceAll(' ', '_'))}`,
      originalUrl: imageInfo.url,
      width: imageInfo.width,
      height: imageInfo.height,
      mime: imageInfo.mime,
      sha1: imageInfo.sha1,
    },
  };
}

async function downloadSteamAssets() {
  let data;
  try {
    const response = await fetchWithRetry(steamApi);
    if (!response.ok) throw new Error(`Steam request failed ${response.status}`);
    const payload = await response.json();
    data = payload['2004680'].data;
  } catch (error) {
    console.warn(`Steam API unavailable, using local fallback: ${error.message}`);
    data = {
      name: 'Voidling Bound',
      header_image: null,
      capsule_image: null,
      screenshots: [],
      release_date: { date: 'Jun 9, 2026', coming_soon: false },
      developers: ['Hatchery Games'],
      publishers: ['Hatchery Games'],
      genres: [{ description: 'Action' }, { description: 'Adventure' }, { description: 'RPG' }],
      categories: [{ description: 'Single-player' }, { description: 'Full controller support' }, { description: 'Steam Achievements' }],
      recommendations: { total: 365 },
    };
  }
  const steamImages = [
    ['header.jpg', data.header_image],
    ['capsule.jpg', data.capsule_image],
    ['hero.jpg', data.screenshots?.[0]?.path_full],
    ['card.jpg', data.screenshots?.[1]?.path_full ?? data.header_image],
    ['screenshot-1.jpg', data.screenshots?.[2]?.path_full],
    ['screenshot-2.jpg', data.screenshots?.[3]?.path_full],
    ['screenshot-3.jpg', data.screenshots?.[4]?.path_full],
  ].filter(([, url]) => Boolean(url));

  for (const [name, url] of steamImages) {
    const jpgPath = path.join(publicDir, name);
    const webpPath = path.join(publicDir, name.replace(/\.jpg$/, '.webp'));
    await download(url, jpgPath);
    if (!existsSync(webpPath)) await runFfmpeg(jpgPath, webpPath, 1280);
    await unlink(jpgPath).catch(() => {});
  }

  return {
    name: data.name,
    releaseDate: data.release_date?.date ?? 'Jun 9, 2026',
    comingSoon: Boolean(data.release_date?.coming_soon),
    developers: data.developers ?? [],
    publishers: data.publishers ?? [],
    genres: data.genres?.map((genre) => genre.description) ?? [],
    categories: data.categories?.map((category) => category.description) ?? [],
    recommendations: data.recommendations?.total ?? 0,
    steamUrl: 'https://store.steampowered.com/app/2004680/Voidling_Bound/',
  };
}

async function main() {
  await mkdir(wikiImageDir, { recursive: true });
  const [siteInfo, speciesPage, steam] = await Promise.all([
    wikiQuery({ action: 'query', meta: 'siteinfo', siprop: 'general|rightsinfo' }),
    wikiQuery({ action: 'query', titles: 'Species', prop: 'revisions', rvprop: 'content|ids|timestamp', rvslots: 'main' }),
    downloadSteamAssets(),
  ]);

  const speciesWikiPage = Object.values(speciesPage.query.pages)[0];
  const speciesRevision = speciesWikiPage.revisions[0];
  const speciesRaw = speciesRevision.slots.main['*'];
  const species = extractSpeciesSummaries(speciesRaw);
  const voidlings = [];

  for (const speciesName of speciesOrder) {
    voidlings.push(...await parseEvolutionPage(speciesName));
  }

  const imageSources = [];
  for (const entry of voidlings) {
    const imageResult = await downloadWikiImage(entry);
    entry.image = imageResult.image;
    delete entry.imageFile;
    if (imageResult.source) {
      imageSources.push({ name: entry.name, ...imageResult.source });
    }
  }

  const generated = {
    generatedAt: new Date().toISOString(),
    steam,
    wiki: {
      name: siteInfo.query.general.sitename,
      license: siteInfo.query.rightsinfo.text,
      licenseUrl: siteInfo.query.rightsinfo.url,
      speciesRevisionId: speciesRevision.revid,
      speciesUpdatedAt: speciesRevision.timestamp,
      speciesUrl: 'https://voidlingbound.wiki.gg/wiki/Species',
    },
    species,
    voidlings,
    imageSources,
  };

  const source = `/* Auto-generated by scripts/sync-voidling-bound.mjs. Do not edit manually. */\n\nexport const voidlingBoundWikiData = ${JSON.stringify(generated, null, 2)} as const;\n`;
  const existing = existsSync(outputFile) ? await readFile(outputFile, 'utf8') : '';
  if (existing !== source) await writeFile(outputFile, source);
  console.log(`Generated ${voidlings.length} Voidling entries and ${imageSources.length} local wiki images.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
