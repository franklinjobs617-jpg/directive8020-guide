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
 <figure className="my-8 overflow-hidden rounded-lg border border-border bg-white">
 <div className="relative aspect-video bg-mist">
 <Image
 src={src}
 alt={alt}
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, 896px"
 quality={85}
 />
 </div>
 <figcaption className="border-t border-border bg-white px-4 py-3 text-xs leading-relaxed text-muted-foreground">
 {caption}
 </figcaption>
 </figure>
 );
}

export function VideoEmbed({ videoId, title, caption }: VideoEmbedProps) {
 return (
 <figure className="my-8 overflow-hidden rounded-lg border border-border bg-white">
 <div className="relative aspect-video bg-mist">
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
 <figcaption className="border-t border-border bg-white px-4 py-3 text-xs leading-relaxed text-muted-foreground">
 {caption}{' '}
 <Link
 href={`https://www.youtube.com/watch?v=${videoId}`}
 target="_blank"
 rel="noreferrer"
 className="font-medium text-foreground underline decoration-border hover:decoration-dribbble-pink"
 >
 Watch on YouTube
 </Link>
 </figcaption>
 )}
 </figure>
 );
}
