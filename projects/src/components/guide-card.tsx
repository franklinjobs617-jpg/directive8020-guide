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

export function GuideCard({ href, title, description, tag, tagColor = 'text-d8020 bg-d8020/15 border-d8020/30', image }: GuideCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-border/60 bg-card/50 overflow-hidden hover:border-d8020/40 hover:bg-card/80 transition-all duration-300"
    >
      {image && (
        <div className="relative aspect-[2/1] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        </div>
      )}
      <div className="p-5">
        {tag && (
          <span className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border mb-3 ${tagColor}`}>
            {tag}
          </span>
        )}
        <h3 className="text-base font-semibold text-foreground group-hover:text-d8020 transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
