import type { Metadata } from "next";
import Link from "next/link";
import { RfqBanner } from "@/components/rfq-banner";

export const metadata: Metadata = {
  title: "About Us: Precision Metal Blanks",
  description:
    "Metal-Blanks.com is the industry resource for precision-cut metal blanks. Live pricing, detailed specs, and instant quotes.",
  alternates: {
    canonical: "/about",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://metal-blanks.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://metal-blanks.com/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold uppercase tracking-wider md:text-5xl">
          About Metal-Blanks.com
        </h1>

        <div className="mt-10 max-w-3xl space-y-6 leading-relaxed text-muted-foreground">
          <p>
            Metal-Blanks.com is the industry resource for precision-cut metal
            blanks. We connect buyers with a dealer network that stocks over
            50,000 SKUs across steel, aluminum, copper, brass, stainless steel,
            and titanium, available in sheet, plate, bar, disc, and laser-cut
            forms.
          </p>
          <p>
            Whether you need a single 1084 steel blank for a knife project or a
            production run of 6061-T6 aluminum sheets for CNC machining, we
            provide the pricing data, material specs, and sourcing tools to get
            the right material for the job.
          </p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground">
            What We Do
          </h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Live LME pricing</strong> updated every 4 hours so you
              know what metals cost right now.
            </li>
            <li>
              <strong>Detailed material specs</strong> for every grade we carry
              , including mechanical properties, common uses, and available dimensions.
            </li>
            <li>
              <strong>Instant RFQ:</strong> submit your dimensions and
              quantities and receive quotes from our dealer network.
            </li>
            <li>
              <strong>No minimums.</strong> Order one blank or a thousand.
            </li>
          </ul>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground">
            Who We Serve
          </h2>
          <p>
            Our buyers include machine shops, fabrication operations, knife
            makers, hobbyists, R&D labs, and OEMs across North America. If your
            work starts with a flat piece of metal, we can help you source it.
          </p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground">
            Material Test Reports
          </h2>
          <p>
            MTRs (mill test reports) are available on request for any order. We
            work with suppliers who maintain full traceability from mill heat to
            finished blank.
          </p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground">
            Materials We Carry
          </h2>
          <p>
            Our catalog covers six material families, each with multiple grades
            optimized for different applications:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Steel:</strong> A36 structural plate, 1018 cold rolled
              bar, 1084 and 1095 high-carbon knife steel, 4140 alloy, D2 and O1
              tool steel.
            </li>
            <li>
              <strong>Aluminum:</strong> 6061-T6 sheet, plate, and bar; 7075-T6
              aerospace grade; 5052-H32 marine grade; 2024-T3 aircraft skin;
              3003-H14 forming grade.
            </li>
            <li>
              <strong>Stainless Steel:</strong> 304 and 316 austenitic sheet,
              303 free-machining bar, 410 martensitic plate, 17-4 PH
              precipitation-hardened bar.
            </li>
            <li>
              <strong>Copper:</strong> C110 ETP, C101 OFHC, and C122 DHP sheet
              for electrical, thermal, and plumbing applications.
            </li>
            <li>
              <strong>Brass:</strong> C260 cartridge brass sheet, C360
              free-machining bar, C464 naval brass for marine service.
            </li>
            <li>
              <strong>Titanium:</strong> Grade 2 commercially pure sheet, Grade
              5 Ti-6Al-4V plate and bar for aerospace and medical applications.
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/quote"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Request a Quote
          </Link>
          <Link
            href="/prices"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          >
            View Live Prices
          </Link>
        </div>
      </div>

      <RfqBanner />
    </>
  );
}
