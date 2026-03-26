import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center py-24">
      <div className="mx-auto max-w-md text-center">
        <h1 className="font-heading text-6xl font-bold uppercase tracking-tight text-foreground">
          404
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Back to Home
          </Link>
          <Link
            href="/quote"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
