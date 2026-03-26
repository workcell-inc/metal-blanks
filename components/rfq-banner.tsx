import Link from "next/link";

export function RfqBanner() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground sm:text-3xl">
          Need a custom quote? Tell us what you need.
        </h2>
        <div className="mt-6">
          <Link
            href="/quote"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Request a Quote &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
