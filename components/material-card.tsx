import Image from "next/image";
import Link from "next/link";

interface MaterialCardProps {
  name: string;
  slug: string;
  tagline: string;
  image: string;
  priority?: boolean;
}

export function MaterialCard({ name, slug, tagline, image, priority = false }: MaterialCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="group relative block overflow-hidden rounded-lg border border-border bg-card transition hover:border-primary/50"
    >
      <div className="relative h-40">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-xl font-semibold text-foreground">
          {name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{tagline}</p>
      </div>
    </Link>
  );
}
