"use client";

import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const materials = [
  { name: "Steel Blanks", href: "/steel" },
  { name: "Aluminum Blanks", href: "/aluminum" },
  { name: "Copper Blanks", href: "/copper" },
  { name: "Brass Blanks", href: "/brass" },
  { name: "Stainless Steel Blanks", href: "/stainless-steel" },
  { name: "Titanium Blanks", href: "/titanium" },
];

const navLinks = [
  { name: "Prices", href: "/prices" },
  { name: "Blog", href: "/blog" },
  { name: "Glossary", href: "/glossary" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-xl font-bold uppercase tracking-wider text-foreground"
        >
          METAL-BLANKS
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {/* Materials Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Materials
              <svg
                className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-md border border-border bg-card p-1 shadow-lg">
                {materials.map((material) => (
                  <Link
                    key={material.href}
                    href={material.href}
                    className="block rounded-sm px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {material.name}
                  </Link>
                ))}
                <div className="my-1 border-t border-border" />
                <Link
                  href="/#materials"
                  className="block rounded-sm px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  onClick={() => setDropdownOpen(false)}
                >
                  All Materials
                </Link>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
            >
              {link.name}
            </Link>
          ))}

          <Link href="/quote" className={cn(buttonVariants(), "ml-2")}>
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav Panel */}
      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Materials
            </p>
            {materials.map((material) => (
              <Link
                key={material.href}
                href={material.href}
                className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                onClick={() => setMobileOpen(false)}
              >
                {material.name}
              </Link>
            ))}
            <Link
              href="/#materials"
              className="block rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              All Materials
            </Link>

            <div className="my-2 border-t border-border" />

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2">
              <Link
                href="/quote"
                className={cn(buttonVariants(), "w-full")}
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
