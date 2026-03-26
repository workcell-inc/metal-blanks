import Image from "next/image";
import { materials, getMaterialBySlug } from "@/lib/materials";
import { getMaterialPagesByMaterial } from "@/lib/pseo-data";
import { RfqBanner } from "@/components/rfq-banner";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

const hubImages: Record<string, string> = {
  steel: "/images/steel-texture.jpg",
  aluminum: "/images/aluminum-texture.jpg",
  copper: "/images/copper-texture.jpg",
  brass: "/images/brass-texture.jpg",
  "stainless-steel": "/images/stainless-texture.jpg",
  titanium: "/images/titanium-texture.jpg",
};

export function generateStaticParams() {
  return materials.map((m) => ({ slug: m.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const material = getMaterialBySlug(slug);
  if (!material) return {};
  const description =
    material.intro.length > 155
      ? material.intro.slice(0, material.intro.lastIndexOf(" ", 155)) + "..."
      : material.intro;
  return {
    title: `${material.name} Blanks — Grades & Specs`,
    description,
    alternates: {
      canonical: `/${material.slug}`,
    },
    openGraph: {
      title: `${material.name} Blanks — Grades & Specs`,
      description,
      url: `https://metal-blanks.com/${material.slug}`,
      type: "website",

    },
  };
}

export default async function HubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const material = getMaterialBySlug(slug);
  if (!material) notFound();

  const pseoPages = getMaterialPagesByMaterial(material.slug);

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
        name: `${material.name} Blanks`,
        item: `https://metal-blanks.com/${material.slug}`,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: material.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbLd, faqLd]),
        }}
      />

      {/* Hero banner */}
      <div className="relative h-48 overflow-hidden md:h-64">
        <Image
          src={hubImages[material.slug] || "/images/dark-metal.jpg"}
          alt={`${material.name} blanks`}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{material.name} Blanks</span>
        </nav>

        {/* H1 */}
        <h1 className="font-heading text-4xl font-bold uppercase tracking-wider md:text-6xl">
          {material.name} Blanks
        </h1>

        {/* Intro */}
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {material.intro}
        </p>

        {/* Price note */}
        <div className="mt-6 inline-block rounded-lg border border-border bg-card p-4 font-mono text-sm">
          Live {material.priceLabel} pricing →{" "}
          <Link
            href="/prices"
            className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            /prices
          </Link>
        </div>

        {/* Product Forms Grid */}
        <section className="mt-16">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider">
            Available Forms
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {material.forms.map((form) => (
              <div
                key={form.slug}
                className="rounded-lg border border-border bg-card p-4 transition hover:border-primary/50"
              >
                <span className="font-medium">{form.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Grade Breakdown Table */}
        <section className="mt-16">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider">
            Grade Reference
          </h2>
          <div className="mt-6 overflow-x-auto rounded-lg border border-border bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="px-4 py-3 font-medium text-muted-foreground">
                    Grade
                  </th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">
                    Type
                  </th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">
                    Common Use
                  </th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">
                    Typical Form
                  </th>
                </tr>
              </thead>
              <tbody>
                {material.grades.map((g, i) => (
                  <tr
                    key={g.grade}
                    className={
                      i % 2 === 1
                        ? "bg-muted/30 border-b border-border"
                        : "border-b border-border"
                    }
                  >
                    <td className="px-4 py-3 font-mono">{g.grade}</td>
                    <td className="px-4 py-3">{g.type}</td>
                    <td className="px-4 py-3">{g.commonUse}</td>
                    <td className="px-4 py-3">{g.typicalForm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* pSEO Pages Links (if any exist) */}
        {pseoPages.length > 0 && (
          <section className="mt-16">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wider">
              Detailed Specs by Grade &amp; Form
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {pseoPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/materials/${page.slug}`}
                  className="rounded-lg border border-border bg-card p-4 text-sm font-medium transition hover:border-primary/50"
                >
                  {page.displayName}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider">
            Frequently Asked Questions
          </h2>
          <div className="mt-6">
            {material.faqs.map((faq, i) => (
              <details key={i} className="group">
                <summary className="cursor-pointer border-b border-border py-3 font-medium">
                  {faq.question}
                </summary>
                <p className="py-3 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* RFQ Banner */}
      <RfqBanner />
    </>
  );
}
