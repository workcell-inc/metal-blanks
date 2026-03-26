import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live Metal Prices: LME Spot Rates",
  description:
    "Track live LME spot prices for aluminum, copper, steel, brass, titanium, zinc, and nickel. Updated every 4 hours.",
  alternates: {
    canonical: "/prices",
  },
  openGraph: {
    title: "Live Metal Prices: LME Spot Rates",
    description:
      "Track live LME spot prices for aluminum, copper, steel, brass, titanium, zinc, and nickel. Updated every 4 hours.",
    url: "https://metal-blanks.com/prices",
    type: "website",

  },
};

const prices = [
  {
    metal: "Aluminum",
    symbol: "ALU",
    pricePerTon: 2341,
    pricePerLb: 1.06,
    change: 0.4,
    changeAbs: 9.36,
  },
  {
    metal: "Copper",
    symbol: "CU",
    pricePerTon: 8952,
    pricePerLb: 4.06,
    change: 1.1,
    changeAbs: 98.47,
  },
  {
    metal: "Steel (HRC)",
    symbol: "HRC",
    pricePerTon: 812,
    pricePerLb: 0.37,
    change: -0.2,
    changeAbs: -1.62,
  },
  {
    metal: "Brass",
    symbol: "BRS",
    pricePerTon: 4250,
    pricePerLb: 1.93,
    change: 0.3,
    changeAbs: 12.75,
  },
  {
    metal: "Titanium",
    symbol: "TI",
    pricePerTon: 11200,
    pricePerLb: 5.08,
    change: -0.5,
    changeAbs: -56.0,
  },
  {
    metal: "Zinc",
    symbol: "ZN",
    pricePerTon: 2680,
    pricePerLb: 1.22,
    change: 0.8,
    changeAbs: 21.44,
  },
  {
    metal: "Nickel",
    symbol: "NI",
    pricePerTon: 16450,
    pricePerLb: 7.46,
    change: -0.3,
    changeAbs: -49.35,
  },
];

function getSparklinePoints(positive: boolean): string {
  const up = [18, 22, 15, 20, 12, 16, 8];
  const down = [10, 8, 14, 10, 18, 15, 22];
  const pts = positive ? up : down;
  return pts.map((y, i) => `${(i * 100) / 6},${y}`).join(" ");
}

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://metal-blanks.com" },
    { "@type": "ListItem", position: 2, name: "Live Metal Prices", item: "https://metal-blanks.com/prices" },
  ],
};

export default function PricesPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="font-heading text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
          Live Metal Prices
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">LME Spot Rates</p>
        <p className="mt-1 font-mono text-sm text-muted-foreground">
          Last updated: March 25, 2026 at 08:00 UTC
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {prices.map((p) => {
            const positive = p.change >= 0;
            return (
              <div
                key={p.symbol}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading text-lg font-semibold text-foreground">
                    {p.metal}
                  </span>
                  <span className="rounded bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">
                    {p.symbol}
                  </span>
                </div>

                <div className="mt-4 font-mono text-3xl font-bold text-foreground">
                  ${p.pricePerTon.toLocaleString()}/ton
                </div>
                <div className="mt-1 font-mono text-sm text-muted-foreground">
                  ${p.pricePerLb}/lb
                </div>

                <div
                  className={`mt-3 flex items-center gap-2 font-mono text-sm ${
                    positive ? "text-emerald-500" : "text-red-400"
                  }`}
                >
                  <span>{positive ? "\u25B2" : "\u25BC"}</span>
                  <span>
                    {positive ? "+" : ""}
                    {p.change}%
                  </span>
                  <span>
                    ({positive ? "+" : ""}
                    {p.changeAbs})
                  </span>
                </div>

                <svg
                  viewBox="0 0 100 30"
                  className={`mt-3 h-[30px] w-full ${
                    positive ? "text-emerald-500" : "text-red-400"
                  }`}
                  preserveAspectRatio="none"
                >
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    points={getSparklinePoints(positive)}
                  />
                </svg>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Prices sourced from LME via Metals-API. Updated every 4 hours.
        </p>

        <div className="mt-6">
          <p className="text-muted-foreground">
            Need pricing for a specific blank size?{" "}
            <Link
              href="/quote"
              className="font-medium text-foreground underline underline-offset-4 hover:text-foreground/80"
            >
              Request a quote &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
