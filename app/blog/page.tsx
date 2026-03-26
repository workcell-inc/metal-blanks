import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog-card";

export const metadata: Metadata = {
  title: "Blog — Guides & Industry Knowledge",
  description:
    "Guides, comparisons, and industry knowledge for metal blank buyers. Steel, aluminum, copper, brass, stainless, and titanium.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — Guides & Industry Knowledge",
    description:
      "Guides, comparisons, and industry knowledge for metal blank buyers.",
    url: "https://metal-blanks.com/blog",
    type: "website",
    images: [{ url: "/images/steel-plate.jpg", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const breadcrumbLd = {
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
    ],
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
    />
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="font-heading text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
          Blog
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Guides, comparisons, and industry knowledge for metal blank buyers.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              slug={post.slug}
              date={post.date}
              tags={post.tags}
              readTime={post.readTime}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
