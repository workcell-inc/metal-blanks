import { glossaryTerms, getTermBySlug, getTermsBySlug } from "@/lib/glossary";
import { notFound } from "next/navigation";
import Link from "next/link";
import { RfqBanner } from "@/components/rfq-banner";
import type { Metadata } from "next";

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ slug: t.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) return {};
  const title = term.abbreviation
    ? `${term.term} (${term.abbreviation}) — Definition`
    : `${term.term} — Definition`;
  const description =
    term.description.length > 155
      ? term.description.slice(0, term.description.lastIndexOf(" ", 155)) + "..."
      : term.description;
  return {
    title,
    description,
    alternates: {
      canonical: `/glossary/${term.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://metal-blanks.com/glossary/${term.slug}`,
      type: "article",
      images: [{ url: "/images/steel-plate.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) notFound();

  const relatedTerms = getTermsBySlug(term.related_terms);

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
        name: "Glossary",
        item: "https://metal-blanks.com/glossary",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: term.term,
        item: `https://metal-blanks.com/glossary/${term.slug}`,
      },
    ],
  };

  const definedTermLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.description,
    url: `https://metal-blanks.com/glossary/${term.slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Metal Blanks Glossary",
      url: "https://metal-blanks.com/glossary",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: term.natural_question,
        acceptedAnswer: {
          "@type": "Answer",
          text: term.description,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbLd, definedTermLd, faqLd]),
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
            href="/glossary"
            className="hover:text-foreground transition-colors"
          >
            Glossary
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{term.term}</span>
        </nav>

        {/* H1 */}
        <h1 className="font-heading text-3xl font-bold uppercase tracking-wider md:text-5xl">
          {term.natural_question}
        </h1>

        {term.abbreviation && (
          <p className="mt-3 font-mono text-lg text-muted-foreground">
            Abbreviation: {term.abbreviation}
          </p>
        )}

        {/* Definition */}
        <section className="mt-8">
          <div className="max-w-3xl rounded-lg border border-border bg-card p-6 text-lg leading-relaxed text-muted-foreground">
            {term.description}
          </div>
        </section>

        {/* Related Terms */}
        {relatedTerms.length > 0 && (
          <section className="mt-12">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wider">
              Related Terms
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTerms.map((rt) => (
                <Link
                  key={rt.slug}
                  href={`/glossary/${rt.slug}`}
                  className="group rounded-lg border border-border bg-card p-4 transition hover:border-primary/50"
                >
                  <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-foreground/80">
                    {rt.term}
                    {rt.abbreviation && (
                      <span className="ml-2 font-mono text-sm text-muted-foreground">
                        ({rt.abbreviation})
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                    {rt.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to glossary + CTA */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            href="/glossary"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          >
            &larr; All Glossary Terms
          </Link>
          <Link
            href="/quote"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      <RfqBanner />
    </>
  );
}
