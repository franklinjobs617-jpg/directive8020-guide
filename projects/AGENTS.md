# Directive 8020 Guide Hub - 椤圭洰涓婁笅鏂?

## Production Content Safety Rules

Before adding or modifying any frontend/page/content output, read this section and apply it strictly:

- Never include prompts, chat, or reasoning in output.
- Never insert AI-generated explanations into frontend content.
- Never write conversation content into HTML, JSX, MDX, JSON content fields, captions, alt text, metadata, schema, or visible page copy.
- Only output clean production code and user-facing production content.
- No debug comments.
- No placeholder lorem ipsum.
- No AI markers.
- All visible page text must be written for the end user, not for editors, agents, SEO workflow notes, or internal review.
- Before finishing content changes, scan modified frontend/content files for internal phrases, prompt remnants, chat wording, editor notes, debug wording, and AI markers.

## 椤圭洰姒傝

Directive 8020 鏀荤暐绔欙紝涓?Supermassive Games 鐨勩€婇粦鐩搁泦锛氭寚浠?020銆嬫彁渚涘叏闈㈡敾鐣ャ€?
鐩爣鏄湪娓告垙鍙戝敭鏃ワ紙2026-05-12锛夊墠鍚庨€氳繃 SEO 鑾峰彇鑻辨枃鎼滅储娴侀噺銆?

### 鐗堟湰鎶€鏈爤

- **Framework**: Next.js 16 (App Router, SSG)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 缁勪欢**: shadcn/ui (鍩轰簬 Radix UI)
- **Styling**: Tailwind CSS 4
- **SEO**: JSON-LD (Article, FAQPage, VideoGame Schema), Sitemap, robots.txt

## 鐩綍缁撴瀯

```
鈹溾攢鈹€ public/                 # 闈欐€佽祫婧?
鈹溾攢鈹€ scripts/                # 鏋勫缓涓庡惎鍔ㄨ剼鏈?
鈹溾攢鈹€ src/
鈹?  鈹溾攢鈹€ app/                # 椤甸潰璺敱涓庡竷灞€
鈹?  鈹?  鈹溾攢鈹€ layout.tsx          # 鍏ㄥ眬甯冨眬锛堟殫鑹叉亹鎬栦富棰橈級
鈹?  鈹?  鈹溾攢鈹€ page.tsx            # 棣栭〉鏀荤暐 Hub
鈹?  鈹?  鈹溾攢鈹€ globals.css         # 鍏ㄥ眬鏍峰紡 + 鑷畾涔夋殫鑹蹭富棰?
鈹?  鈹?  鈹溾攢鈹€ sitemap.ts          # SEO Sitemap 鐢熸垚
鈹?  鈹?  鈹溾攢鈹€ robots.ts           # robots.txt 閰嶇疆
鈹?  鈹?  鈹溾攢鈹€ guides/             # 鏀荤暐绱㈠紩椤?
鈹?  鈹?  鈹溾攢鈹€ directive-8020-overview/       # 娓告垙姒傝
鈹?  鈹?  鈹溾攢鈹€ directive-8020-system-requirements/  # 绯荤粺閰嶇疆瑕佹眰
鈹?  鈹?  鈹溾攢鈹€ directive-8020-release-time/   # 鍙戝敭鏃堕棿
鈹?  鈹?  鈹溾攢鈹€ directive-8020-characters/     # 瑙掕壊浠嬬粛
鈹?  鈹?  鈹溾攢鈹€ directive-8020-all-endings/    # 鍏ㄧ粨灞€鎸囧崡
鈹?  鈹?  鈹溾攢鈹€ directive-8020-how-to-save-everyone/  # 鍏ㄥ憳瀛樻椿
鈹?  鈹?  鈹溾攢鈹€ directive-8020-choices-consequences/  # 閫夋嫨涓庡悗鏋?
鈹?  鈹?  鈹溾攢鈹€ directive-8020-trophy-guide/   # 濂栨澂鎴愬氨
鈹?  鈹?  鈹溾攢鈹€ directive-8020-crashing-fix/   # 宕╂簝淇
鈹?  鈹?  鈹斺攢鈹€ directive-8020-walkthrough/    # 瀹屾暣鏀荤暐
鈹?  鈹溾攢鈹€ components/             # 鍏变韩缁勪欢
鈹?  鈹?  鈹溾攢鈹€ site-header.tsx     # 瀵艰埅鏍?
鈹?  鈹?  鈹溾攢鈹€ site-footer.tsx     # 椤佃剼
鈹?  鈹?  鈹溾攢鈹€ guide-card.tsx      # 鏀荤暐鍗＄墖
鈹?  鈹?  鈹溾攢鈹€ faq-section.tsx     # FAQ 鍖哄潡
鈹?  鈹?  鈹溾攢鈹€ breadcrumb.tsx      # 闈㈠寘灞戝鑸?
鈹?  鈹?  鈹溾攢鈹€ json-ld.tsx         # JSON-LD 缁撴瀯鍖栨暟鎹?
鈹?  鈹?  鈹斺攢鈹€ ui/                 # shadcn/ui 缁勪欢
鈹?  鈹溾攢鈹€ hooks/
鈹?  鈹斺攢鈹€ lib/
鈹溾攢鈹€ next.config.ts
鈹溾攢鈹€ package.json
鈹斺攢鈹€ tsconfig.json
```

## 鍖呯鐞嗚鑼?

**浠呭厑璁镐娇鐢?pnpm** 浣滀负鍖呯鐞嗗櫒锛?*涓ョ浣跨敤 npm 鎴?yarn**銆?

## 寮€鍙戣鑼?

### 缂栫爜瑙勮寖

- 榛樿鎸?TypeScript `strict` 蹇冩櫤鍐欎唬鐮侊紱浼樺厛澶嶇敤褰撳墠浣滅敤鍩熷凡澹版槑鐨勫彉閲忋€佸嚱鏁般€佺被鍨嬪拰瀵煎叆
- 绂佹闅愬紡 `any` 鍜?`as any`锛涘嚱鏁板弬鏁般€佽繑鍥炲€笺€佽В鏋勯」搴旀湁鏄庣‘绫诲瀷
- 绂佹浣跨敤 head 鏍囩锛孞SON-LD 鏀惧湪 body 鍐呴儴锛宮etadata 閫氳繃 Next.js Metadata API 閰嶇疆

### SEO 瑙勮寖

- 姣忎釜椤甸潰蹇呴』鏈夊敮涓€鐨?`<title>` 鍜?`<meta description>`
- 姣忎釜鏀荤暐椤靛簳閮ㄥ繀椤绘湁 FAQSection + FAQPage Schema
- URL 缁撴瀯鎵佸钩鍖栵細`/directive-8020-xxx/`
- 姣忎釜椤甸潰鍖呭惈 Breadcrumb + BreadcrumbList Schema
- Article Schema 鏍囨敞鍙戝竷鏃ユ湡鍜屾父鎴忎俊鎭?
- 鍏ㄥ眬 VideoGame Schema 鍦?layout.tsx 涓敞鍏?

### 鍐呭绛栫暐

- Day-0 椤甸潰锛堝凡涓婄嚎锛夛細overview, system-requirements, release-time, characters, guides index
- Day-1 妯℃澘锛?/12濉唴瀹癸級锛歛ll-endings, how-to-save-everyone, choices-consequences, trophy-guide, crashing-fix, walkthrough
- 姣忕瘒鏀荤暐鐙珛 URL锛屼笉鍚堝苟涓嶅悓鎼滅储鎰忓浘鐨勫唴瀹?
- 绉湪寮忓彂甯冿細鍏?300 璇嶄笂绾?鈫?鎵╁厖鍒?800 璇?+ FAQ 鈫?鍐嶅埌 1500 璇?+ 鎴浘

## 鏋勫缓涓庢祴璇曞懡浠?

- 绫诲瀷妫€鏌ワ細`pnpm ts-check`
- Lint锛歚pnpm lint:build`
- 寮€鍙戯細`pnpm dev`锛堢鍙?5000锛?
- 鏋勫缓锛歚pnpm build`
- 鐢熶骇鍚姩锛歚pnpm start`
