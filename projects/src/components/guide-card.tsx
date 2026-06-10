import Link from 'next/link';
import Image from 'next/image';

interface GuideCardProps {
 href: string;
 title: string;
 description: string;
 tag?: string;
 tagColor?: string;
 image?: string;
}

export function GuideCard({ href, title, description, tag, tagColor = 'bg-dribbble-pink text-white', image }: GuideCardProps) {
 return (
 <Link
 href={href}
 className="shot-card"
 >
 {image && (
 <div className="shot-thumb aspect-[4/3]">
 <Image
 src={image}
 alt={title}
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 />
 </div>
 )}
 <div className="shot-meta">
 <div className="min-w-0">
 <h3 className="text-sm font-semibold leading-tight text-foreground transition-colors group-hover:text-dribbble-pink">
 {title}
 </h3>
 <p className="mt-1 line-clamp-2 text-sm leading-5 text-muted-foreground">
 {description}
 </p>
 </div>
 {tag && (
 <span className={`shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase leading-none ${tagColor.includes('bg-dribbble-pink') ? tagColor : 'bg-dribbble-pink text-white'}`}>
 {tag}
 </span>
 )}
 </div>
 </Link>
 );
}
