import { materialPages, getMaterialPage, getRelatedPageSlug } from "@/lib/pseo-data";
import { getMaterialBySlug } from "@/lib/materials";
import { RfqBanner } from "@/components/rfq-banner";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return materialPages.map((p) => {
    const [material, form, grade] = p.slug.split("/");
    return { material, form, grade };
  });
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ material: string; form: string; grade: string }>;
}): Promise<Metadata> {
  const { material, form, grade } = await params;
  const page = getMaterialPage(material, form, grade);
  if (!page) return {};
  const description =
    page.description.length > 155
      ? page.description.slice(0, page.description.lastIndexOf(" ", 155)) + "..."
      : page.description;
  return {
    title: page.displayName,
    description,
    alternates: {
      canonical: `/materials/${page.slug}`,
    },
    openGraph: {
      title: page.displayName,
      description,
      url: `https://metal-blanks.com/materials/${page.slug}`,
      type: "website",
      images: [{ url: "/images/steel-plate.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function PSEOPage({
  params,
}: {
  params: Promise<{ material: string; form: string; grade: string }>;
}) {
  const { material, form, grade } = await params;
  const page = getMaterialPage(material, form, grade);
  if (!page) notFound();

  const hub = getMaterialBySlug(page.material);
  const hubName = hub ? `${hub.name} Blanks` : page.material;

  const formLabel =
    page.form.charAt(0).toUpperCase() + page.form.slice(1).replace(/-/g, " ");

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
        name: hubName,
        item: `https://metal-blanks.com/${page.material}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: formLabel,
        item: `https://metal-blanks.com/materials/${page.material}/${page.form}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: page.grade,
        item: `https://metal-blanks.com/materials/${page.slug}`,
      },
    ],
  };

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: page.displayName,
    description: page.description.slice(0, 300),
    category: `Metal Blanks > ${hubName} > ${formLabel}`,
    material: `${page.grade} ${page.material}`,
    brand: {
      "@type": "Brand",
      name: "Metal-Blanks.com",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      url: `https://metal-blanks.com/materials/${page.slug}`,
      seller: {
        "@type": "Organization",
        name: "Metal-Blanks.com",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbLd, productLd]),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/${page.material}`}
            className="hover:text-foreground transition-colors"
          >
            {hubName}
          </Link>
          <span className="mx-2">/</span>
          <span>{formLabel}</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">{page.grade}</span>
        </nav>

        {/* H1 */}
        <h1 className="font-heading text-3xl font-bold uppercase tracking-wider md:text-5xl">
          {page.displayName}
        </h1>

        {/* Spec Table */}
        <section className="mt-10">
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="px-4 py-3 font-medium text-muted-foreground">
                    Property
                  </th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(page.properties).map(([key, value], i) => (
                  <tr
                    key={key}
                    className={
                      i % 2 === 1
                        ? "bg-muted/30 border-b border-border"
                        : "border-b border-border"
                    }
                  >
                    <td className="px-4 py-3">{key}</td>
                    <td className="px-4 py-3 font-mono">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Description */}
        <section className="mt-10">
          <div className="max-w-3xl leading-relaxed text-muted-foreground whitespace-pre-line">
            {page.description}
          </div>
        </section>

        {/* Common Uses */}
        <section className="mt-10">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider">
            Common Applications
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
            {page.commonUses.map((use) => (
              <li key={use}>{use}</li>
            ))}
          </ul>
        </section>

        {/* Available Dimensions */}
        <section className="mt-10">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider">
            Standard Dimensions
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 font-mono text-muted-foreground">
            {page.commonThicknesses.map((dim) => (
              <li key={dim}>{dim}</li>
            ))}
          </ul>
        </section>

        {/* Related Grades */}
        <section className="mt-10">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider">
            Related Grades
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {page.relatedGrades.map((rg) => {
              const relatedSlug = getRelatedPageSlug(rg, page.material);
              if (relatedSlug) {
                return (
                  <Link
                    key={rg}
                    href={`/materials/${relatedSlug}`}
                    className="inline-block rounded-md bg-muted px-3 py-1 font-mono text-sm transition hover:bg-primary/20 hover:text-foreground"
                  >
                    {rg}
                  </Link>
                );
              }
              return (
                <span
                  key={rg}
                  className="inline-block rounded-md bg-muted px-3 py-1 font-mono text-sm"
                >
                  {rg}
                </span>
              );
            })}
          </div>
        </section>

        {/* RFQ CTA */}
        <section className="mt-16 rounded-lg border border-border bg-card p-8 text-center">
          <p className="text-lg font-medium">
            Need {page.displayName} cut to size?
          </p>
          <Link
            href="/quote"
            className="mt-4 inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Request a Quote
          </Link>
        </section>
      </div>

      {/* RFQ Banner */}
      <RfqBanner />
    </>
  );
}
