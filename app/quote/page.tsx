import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Request a Quote — Custom Metal Blanks",
  description:
    "Get a custom quote for metal blanks cut to your specifications. Steel, aluminum, copper, brass, stainless steel, and titanium.",
  alternates: {
    canonical: "/quote",
  },
  openGraph: {
    title: "Request a Quote — Custom Metal Blanks",
    description:
      "Get a custom quote for metal blanks cut to your specifications.",
    url: "https://metal-blanks.com/quote",
    type: "website",
    images: [{ url: "/images/steel-plate.jpg", width: 1200, height: 630 }],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://metal-blanks.com" },
    { "@type": "ListItem", position: 2, name: "Request a Quote", item: "https://metal-blanks.com/quote" },
  ],
};

export default function QuotePage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="font-heading text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
          Request a Quote
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tell us what you need. We&apos;ll get back to you within 24 hours.
        </p>
        <div className="mt-10">
          <QuoteForm />
        </div>
      </div>
    </section>
    </>
  );
}
