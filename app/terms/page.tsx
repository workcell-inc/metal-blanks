import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Metal-Blanks.com — the terms and conditions governing your use of our website and services.",
  alternates: {
    canonical: "/terms",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://metal-blanks.com" },
    { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://metal-blanks.com/terms" },
  ],
};

export default function TermsPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-heading text-3xl font-bold uppercase tracking-wider md:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Last updated: March 25, 2026
      </p>

      <div className="mt-10 max-w-3xl space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            Acceptance of Terms
          </h2>
          <p className="mt-3">
            By accessing and using Metal-Blanks.com, you agree to be bound by
            these Terms of Service. If you do not agree to these terms, do not
            use this website.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            Services
          </h2>
          <p className="mt-3">
            Metal-Blanks.com provides metal blank pricing information, material
            specifications, and a quote request system that connects buyers with
            our dealer network. We act as an intermediary — orders are fulfilled
            by independent dealers, and Metal-Blanks.com is not the direct
            seller of physical goods.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            Pricing Information
          </h2>
          <p className="mt-3">
            Metal prices displayed on this site are based on LME (London Metal
            Exchange) spot rates and are provided for informational purposes
            only. Actual pricing for blanks will vary based on grade, form,
            dimensions, quantity, processing requirements, and current market
            conditions. Quoted prices from our dealer network supersede any
            pricing displayed on the site.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            Quote Requests
          </h2>
          <p className="mt-3">
            Submitting a quote request does not constitute a binding order.
            Quotes provided by our dealer network are subject to material
            availability, current pricing, and the dealer&apos;s own terms and
            conditions. Quote validity periods are set by each dealer.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            Accuracy of Information
          </h2>
          <p className="mt-3">
            We make reasonable efforts to ensure the accuracy of material
            specifications, properties, and technical content on this site.
            However, this information is provided for general reference and
            should not be used as a sole basis for engineering decisions. Always
            verify critical specifications with the material supplier and
            consult relevant ASTM, AMS, or other applicable standards.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            Intellectual Property
          </h2>
          <p className="mt-3">
            All content on Metal-Blanks.com — including text, graphics, data,
            and code — is the property of Metal-Blanks.com or its content
            suppliers and is protected by applicable intellectual property laws.
            You may not reproduce, distribute, or create derivative works from
            this content without written permission.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            Limitation of Liability
          </h2>
          <p className="mt-3">
            Metal-Blanks.com is not liable for any direct, indirect, incidental,
            or consequential damages arising from your use of this website or
            reliance on information provided herein. This includes, but is not
            limited to, damages from material selection decisions, pricing
            discrepancies, or dealer fulfillment issues.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            Changes to Terms
          </h2>
          <p className="mt-3">
            We reserve the right to modify these terms at any time. Continued
            use of the site after changes constitutes acceptance of the updated
            terms. Material changes will be noted with an updated revision date
            at the top of this page.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            Contact
          </h2>
          <p className="mt-3">
            Questions about these terms can be directed to{" "}
            <a
              href="mailto:legal@metal-blanks.com"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              legal@metal-blanks.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
    </>
  );
}
