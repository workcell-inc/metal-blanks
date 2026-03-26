import Image from "next/image";
import Link from "next/link";

import { PriceStrip } from "@/components/price-strip";
import { MaterialCard } from "@/components/material-card";
import { BlogCard } from "@/components/blog-card";
import { RfqBanner } from "@/components/rfq-banner";
import { getAllPosts } from "@/lib/blog";

const materials = [
  {
    name: "Steel Blanks",
    slug: "steel",
    tagline: "Hot rolled, cold rolled, and tool steel",
    image: "/images/steel-texture.jpg",
  },
  {
    name: "Aluminum Blanks",
    slug: "aluminum",
    tagline: "Lightweight and corrosion-resistant",
    image: "/images/aluminum-texture.jpg",
  },
  {
    name: "Copper Blanks",
    slug: "copper",
    tagline: "High conductivity for electrical applications",
    image: "/images/copper-texture.jpg",
  },
  {
    name: "Brass Blanks",
    slug: "brass",
    tagline: "Machinable for decorative and industrial use",
    image: "/images/brass-texture.jpg",
  },
  {
    name: "Stainless Steel Blanks",
    slug: "stainless-steel",
    tagline: "Corrosion-resistant for demanding environments",
    image: "/images/stainless-texture.jpg",
  },
  {
    name: "Titanium Blanks",
    slug: "titanium",
    tagline: "High-strength for aerospace and medical",
    image: "/images/titanium-texture.jpg",
  },
];

const buyerSegments = [
  {
    title: "Industrial & OEM",
    description:
      "Precision blanks with MTR documentation. Cut-to-size, no minimums.",
    image: "/images/fabrication-welding.jpg",
  },
  {
    title: "Knife Makers & Bladesmiths",
    description:
      "High-carbon tool steel blanks. 1084, D2, O1, CPM-154 in stock.",
    image: "/images/knife-making.jpg",
  },
  {
    title: "Laser & Fabrication Shops",
    description:
      "Laser-quality HR and CR steel. Flat, consistent, no warping.",
    image: "/images/fabrication-sparks.jpg",
  },
];

const trustStats = [
  { number: "50,000+", label: "SKUs via Dealer Network" },
  { number: "Live", label: "LME Pricing Data" },
  { number: "MTRs", label: "Available on Request" },
  { number: "No Minimums", label: "Order Any Quantity" },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Metal-Blanks.com",
              url: "https://metal-blanks.com",
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Metal-Blanks.com",
              url: "https://metal-blanks.com",
              description:
                "The industry resource for precision-cut metal blanks — steel, aluminum, copper, brass, stainless steel, and titanium.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                url: "https://metal-blanks.com/quote",
              },
            },
          ]),
        }}
      />

      {/* Price Strip */}
      <PriceStrip />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <Image
          src="/images/hero-sparks.jpg"
          alt="Sparks flying during metal cutting"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading text-5xl font-bold uppercase tracking-tight text-foreground md:text-7xl">
            Metal Blanks. Cut to Size. Shipped Fast.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            The industry resource for steel, aluminum, copper, and specialty
            metal blanks — from precision machining stock to laser-cut shapes.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#materials"
              className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
            >
              Browse Materials
            </a>
            <Link
              href="/quote"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Material Grid */}
      <section id="materials" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 font-heading text-3xl font-bold uppercase tracking-tight text-foreground">
            Materials
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {materials.map((m, i) => (
              <MaterialCard
                key={m.slug}
                name={m.name}
                slug={m.slug}
                tagline={m.tagline}
                image={m.image}
                priority={i < 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Segments */}
      {buyerSegments.map((segment) => (
        <section
          key={segment.title}
          className="relative overflow-hidden border-y border-border"
        >
          <Image
            src={segment.image}
            alt={segment.title}
            fill
            className="object-cover opacity-10"
          />
          <div className="relative mx-auto max-w-7xl px-6 py-16">
            <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-foreground">
              {segment.title}
            </h3>
            <p className="mt-2 max-w-xl text-lg text-muted-foreground">
              {segment.description}
            </p>
          </div>
        </section>
      ))}

      {/* Trust Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-foreground">
            Why Metal-Blanks.com
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {trustStats.map((stat) => (
              <div key={stat.number} className="text-center">
                <div className="font-heading text-3xl font-bold text-foreground">
                  {stat.number}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-foreground">
            Latest from the Blog
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
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

      {/* RFQ Banner */}
      <RfqBanner />
    </>
  );
}
