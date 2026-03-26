import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { RfqBanner } from "@/components/rfq-banner";

const blogImages: Record<string, string> = {
  "1084-steel-blanks-knife-makers-guide": "/images/knife-making.jpg",
  "6061-vs-7075-aluminum-blanks": "/images/aluminum-texture.jpg",
  "understanding-metal-blank-tolerances": "/images/fabrication-grinding.jpg",
};

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://metal-blanks.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: "/images/steel-plate.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const truncatedTitle =
    post.title.length > 40 ? post.title.slice(0, 40) + "\u2026" : post.title;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              dateModified: post.date,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://metal-blanks.com/blog/${post.slug}`,
              },
              author: {
                "@type": "Organization",
                name: "Metal-Blanks.com",
                url: "https://metal-blanks.com",
              },
              publisher: {
                "@type": "Organization",
                name: "Metal-Blanks.com",
                url: "https://metal-blanks.com",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://metal-blanks.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://metal-blanks.com/blog",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.title,
                  item: `https://metal-blanks.com/blog/${post.slug}`,
                },
              ],
            },
          ]),
        }}
      />

      {/* Hero image */}
      <div className="relative h-48 overflow-hidden md:h-72">
        <Image
          src={blogImages[post.slug] || "/images/dark-metal.jpg"}
          alt={post.title}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <article className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <Link href="/blog" className="hover:text-foreground">
              Blog
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-foreground">{truncatedTitle}</span>
          </nav>

          <h1 className="font-heading text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
            {post.tags.length > 0 && (
              <>
                <span>&middot;</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </>
            )}
          </div>

          <div
            className="mt-10 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-muted-foreground [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:text-muted-foreground [&_li]:mb-1 [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse [&_th]:bg-card [&_th]:border [&_th]:border-border [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-medium [&_th]:text-sm [&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-2 [&_td]:text-muted-foreground [&_td]:text-sm [&_strong]:text-foreground [&_strong]:font-semibold"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </article>

      <RfqBanner />
    </>
  );
}
