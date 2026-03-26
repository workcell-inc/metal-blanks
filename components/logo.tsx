import { Layers } from "lucide-react";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 text-foreground ${className ?? ""}`}
    >
      <Layers className="h-6 w-6 text-primary" strokeWidth={2.5} />
      <span className="font-heading text-xl font-bold uppercase tracking-wider">
        Metal-Blanks
      </span>
    </Link>
  );
}
