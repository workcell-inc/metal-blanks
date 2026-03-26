import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Metal-Blanks.com — how we collect, use, and protect your information.",
  alternates: {
    canonical: "/privacy",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://metal-blanks.com" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://metal-blanks.com/privacy" },
  ],
};

export default function PrivacyPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-heading text-3xl font-bold uppercase tracking-wider md:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Last updated: March 25, 2026
      </p>

      <div className="mt-10 max-w-3xl space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            Information We Collect
          </h2>
          <p className="mt-3">
            When you use Metal-Blanks.com, we may collect the following
            information:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2">
            <li>
              <strong>Contact information</strong> you provide through our quote
              request form, including your name, email address, company name, and
              phone number.
            </li>
            <li>
              <strong>Project details</strong> submitted with quote requests,
              including material specifications, dimensions, and quantities.
            </li>
            <li>
              <strong>Usage data</strong> collected automatically, including
              pages visited, time on site, browser type, and referring URL.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            How We Use Your Information
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-2">
            <li>To process and respond to quote requests.</li>
            <li>To connect you with dealers in our network who can fulfill your order.</li>
            <li>To improve our website, content, and services.</li>
            <li>To send order-related communications.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            Information Sharing
          </h2>
          <p className="mt-3">
            We share your quote request details with dealers in our network for
            the purpose of fulfilling your order. We do not sell your personal
            information to third parties. We may share anonymized, aggregated
            data for analytics purposes.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            Cookies
          </h2>
          <p className="mt-3">
            We use cookies and similar technologies to analyze site traffic and
            improve your experience. You can control cookie settings through your
            browser preferences.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            Data Security
          </h2>
          <p className="mt-3">
            We use industry-standard security measures to protect your
            information, including HTTPS encryption for all data transmitted
            between your browser and our servers.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            Your Rights
          </h2>
          <p className="mt-3">
            You may request access to, correction of, or deletion of your
            personal information at any time by contacting us at{" "}
            <a
              href="mailto:privacy@metal-blanks.com"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              privacy@metal-blanks.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            Third-Party Services
          </h2>
          <p className="mt-3">
            We use third-party services for analytics (to understand how
            visitors use our site), email delivery (to send quote responses),
            and hosting infrastructure. These services may process data on our
            behalf in accordance with their own privacy policies. We do not
            share your information with advertisers or data brokers.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            Data Retention
          </h2>
          <p className="mt-3">
            We retain quote request data for up to 24 months to support
            follow-up orders and provide customer service. Analytics data is
            retained in anonymized form. You may request deletion of your data
            at any time by contacting us.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
            Changes to This Policy
          </h2>
          <p className="mt-3">
            We may update this privacy policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>
        </section>
      </div>
    </div>
    </>
  );
}
