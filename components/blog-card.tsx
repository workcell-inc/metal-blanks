import Image from "next/image";
import Link from "next/link";

const blogImages: Record<string, string> = {
  "1084-steel-blanks-knife-makers-guide": "/images/knife-making.jpg",
  "6061-vs-7075-aluminum-blanks": "/images/aluminum-texture.jpg",
  "understanding-metal-blank-tolerances": "/images/fabrication-grinding.jpg",
};

interface BlogCardProps {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  readTime: string;
}

export function BlogCard({ title, slug, date, tags, readTime }: BlogCardProps) {
  const image = blogImages[slug] || "/images/dark-metal.jpg";

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block overflow-hidden rounded-lg border border-border bg-card transition hover:border-primary/50"
    >
      <div className="relative h-40">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>
      <div className="p-5">
        <h2 className="font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-foreground/80">
          {title}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {date} &middot; {readTime}
        </p>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
