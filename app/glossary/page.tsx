import type { Metadata } from "next";
import Link from "next/link";
import { getGroupedTerms, glossaryTerms } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Metal Blanks Glossary: 77 Terms Defined",
  description:
    "Definitions for metal blank terms, steel grades, cutting processes, and industry standards. From A36 to waterjet cutting.",
  alternates: {
    canonical: "/glossary",
  },
  openGraph: {
    title: "Metal Blanks Glossary: 77 Terms Defined",
    description:
      "Definitions for metal blank terms, steel grades, cutting processes, and industry standards.",
    url: "https://metal-blanks.com/glossary",
    type: "website",

  },
};

export default function GlossaryPage() {
  const groups = getGroupedTerms();
  const letters = Object.keys(groups).sort((a, b) => {
    if (a === "#") return -1;
    if (b === "#") return 1;
    return a.localeCompare(b);
  });

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
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: glossaryTerms.map((t) => ({
      "@type": "Question",
      name: t.natural_question,
      acceptedAnswer: {
        "@type": "Answer",
        text: t.description,
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

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Glossary</span>
        </nav>

        <h1 className="font-heading text-3xl font-bold uppercase tracking-wider md:text-5xl">
          Metal Blanks Glossary
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {glossaryTerms.length} terms covering metal grades, blank types,
          cutting processes, material properties, and industry standards.
        </p>

        {/* Letter jump nav */}
        <nav className="mt-8 flex flex-wrap gap-2">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-border font-mono text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {letter}
            </a>
          ))}
        </nav>

        {/* Term groups */}
        <div className="mt-12 space-y-12">
          {letters.map((letter) => (
            <section key={letter} id={`letter-${letter}`}>
              <h2 className="sticky top-16 z-10 border-b border-border bg-background pb-2 font-heading text-2xl font-bold uppercase tracking-wider text-foreground">
                {letter}
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {groups[letter].map((term) => (
                  <Link
                    key={term.slug}
                    href={`/glossary/${term.slug}`}
                    className="group rounded-lg border border-border bg-card p-4 transition hover:border-primary/50"
                  >
                    <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-foreground/80">
                      {term.term}
                      {term.abbreviation && (
                        <span className="ml-2 font-mono text-sm text-muted-foreground">
                          ({term.abbreviation})
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {term.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
