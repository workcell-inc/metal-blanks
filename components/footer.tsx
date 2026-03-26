import Link from "next/link";

const materialsLinks = [
  { name: "Steel Blanks", href: "/steel" },
  { name: "Aluminum Blanks", href: "/aluminum" },
  { name: "Copper Blanks", href: "/copper" },
  { name: "Brass Blanks", href: "/brass" },
  { name: "Stainless Steel Blanks", href: "/stainless-steel" },
  { name: "Titanium Blanks", href: "/titanium" },
];

const resourcesLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Live Prices", href: "/prices" },
  { name: "Glossary", href: "/glossary" },
  { name: "About", href: "/about" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Quote", href: "/quote" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div>
      <p className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
        {title}
      </p>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href + link.name}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <FooterColumn title="Materials" links={materialsLinks} />
          <FooterColumn title="Resources" links={resourcesLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; 2026 Metal-Blanks.com | Live LME prices updated every 4
            hours
          </p>
        </div>
      </div>
    </footer>
  );
}
