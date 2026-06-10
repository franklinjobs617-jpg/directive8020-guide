import Image from 'next/image';

interface PageHeroProps {
 src: string;
 alt: string;
}

export function PageHero({ src, alt }: PageHeroProps) {
 return (
 <div className="relative mb-8 aspect-[21/9] w-full overflow-hidden rounded-2xl bg-mist">
 <Image
 src={src}
 alt={alt}
 fill
 className="object-cover"
 priority
 sizes="(max-width: 768px) 100vw, 896px"
 quality={85}
 />
 </div>
 );
}
