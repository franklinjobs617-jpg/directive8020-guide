import Image from 'next/image';

interface PageHeroProps {
  src: string;
  alt: string;
}

export function PageHero({ src, alt }: PageHeroProps) {
  return (
    <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg mb-8">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, 896px"
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
    </div>
  );
}
