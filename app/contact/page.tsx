import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us: Get in Touch",
  description:
    "Get in touch with Metal-Blanks.com for questions about metal blanks, quotes, or orders. We typically respond within one business day.",
  alternates: {
    canonical: "/contact",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://metal-blanks.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://metal-blanks.com/contact" },
  ],
};

export default function ContactPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-heading text-3xl font-bold uppercase tracking-wider md:text-5xl">
        Contact Us
      </h1>

      <div className="mt-10 max-w-3xl space-y-6 leading-relaxed text-muted-foreground">
        <p>
          Have a question about a specific material, need help with an order, or
          want to discuss a custom requirement? We typically respond within one
          business day.
        </p>

        <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground">
          Request a Quote
        </h2>
        <p>
          The fastest way to get pricing is through our{" "}
          <Link
            href="/quote"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            quote request form
          </Link>
          . Include your material, grade, dimensions, quantity, and any tolerance
          or certification requirements.
        </p>

        <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground">
          General Inquiries
        </h2>
        <p>
          For general questions about materials, capabilities, or lead times,
          email us at{" "}
          <a
            href="mailto:info@metal-blanks.com"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            info@metal-blanks.com
          </a>
          .
        </p>

        <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground">
          Dealer & Supplier Partnerships
        </h2>
        <p>
          Interested in joining our dealer network or becoming a supplier? Reach
          out at{" "}
          <a
            href="mailto:partners@metal-blanks.com"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            partners@metal-blanks.com
          </a>
          .
        </p>

        <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground">
          What to Include in Your Message
        </h2>
        <p>
          To help us respond as quickly as possible, please include:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>Material type and grade (e.g., 6061-T6 aluminum, 304 stainless)</li>
          <li>Form factor (sheet, plate, bar, disc)</li>
          <li>Dimensions and quantity needed</li>
          <li>Any tolerance or certification requirements (MTR, Charpy, etc.)</li>
          <li>Your timeline and shipping location</li>
        </ul>
        <p>
          For standard materials and grades, we typically turn quotes around
          within one business day. Custom or large-volume requests may take
          slightly longer as we coordinate with multiple dealers to find the
          best pricing and lead time for your project.
        </p>
      </div>
    </div>
    </>
  );
}
