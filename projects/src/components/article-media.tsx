import Image from 'next/image';
import Link from 'next/link';

interface ArticleImageProps {
  src: string;
  alt: string;
  caption: string;
}

interface VideoEmbedProps {
  videoId: string;
  title: string;
  caption?: string;
}

export function ArticleImage({ src, alt, caption }: ArticleImageProps) {
  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-border/50 bg-card/30">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 896px"
          quality={85}
        />
      </div>
      <figcaption className="px-4 py-3 text-xs leading-relaxed text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

export function VideoEmbed({ videoId, title, caption }: VideoEmbedProps) {
  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-border/50 bg-card/30">
      <div className="relative aspect-video bg-black">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="px-4 py-3 text-xs leading-relaxed text-muted-foreground">
          {caption}{' '}
          <Link
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noreferrer"
            className="text-d8020 hover:underline"
          >
            Watch on YouTube
          </Link>
        </figcaption>
      )}
    </figure>
  );
}
