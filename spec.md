# metal-blanks.com — Master Build Spec
> Feed this document to Claude Code as the full project brief.

---

## 1. Project Overview

**Domain**: metal-blanks.com  
**Purpose**: SEO-first content and commerce hub targeting the "metal blanks" keyword cluster. Lead-gen and dropship monetization via the Metals Depot dealer program. No inventory held.  
**Primary monetization**: Metals Depot dealer/dropship margin + RFQ lead generation  
**Secondary monetization**: Live pricing widget (return traffic), long-term supplier directory sponsorships  
**Stage**: V1 — get indexed and ranking. No auth, no accounts, no checkout. Pure content + lead capture.

---

## 2. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSG for pSEO pages, ISR for pricing data |
| Styling | Tailwind CSS | Fast, consistent |
| CMS / Content | MDX files in `/content` | No external CMS dependency for v1 |
| Database | Postgres via Prisma | RFQ lead capture, pricing cache |
| Pricing API | Metals-API (free tier) | LME live prices, cached every 4 hours |
| Deployment | Vercel | Zero config, ISR works out of the box |
| Analytics | Plausible or Vercel Analytics | Lightweight, no cookie banner needed |

---

## 3. Design Direction

**Aesthetic**: Industrial precision. Dark backgrounds with steel-gray and amber accents. Think machined metal surfaces, not e-commerce soft gradients. The site should feel like it was built for a purchasing manager, not a consumer.

**Typography**:
- Display: `Bebas Neue` or `Barlow Condensed` — industrial, strong
- Body: `IBM Plex Sans` — technical, readable
- Mono: `IBM Plex Mono` — for dimensions, specs, prices

**Vibe reference**: Cross between a metal service center catalog and a Bloomberg terminal. Dense with useful information, zero fluff.

---

## 4. Site Architecture

The domain is an exact match for "metal blanks." The homepage IS the metal blanks hub. No `/metal-blanks` slug — that would cannibalize the root's keyword authority.

```
/                          → Homepage AND Metal Blanks hub (H1: "Metal Blanks")
/steel-blanks              → Hub: Steel Blanks
/aluminum-blanks           → Hub: Aluminum Blanks
/copper-blanks             → Hub: Copper Blanks
/brass-blanks              → Hub: Brass Blanks
/titanium-blanks           → Hub: Titanium Blanks
/stainless-steel-blanks    → Hub: Stainless Steel Blanks

/blog                      → Blog index
/blog/[slug]               → Individual articles (3x/week)

/materials/[material]/[form]/[grade]
  → pSEO programmatic pages
  → e.g. /materials/aluminum/sheet/6061-t6
  → e.g. /materials/steel/plate/a36

/prices                    → Live metal price tracker (standalone utility page)

/quote                     → RFQ / lead capture form

/about
/contact
```

---

## 5. Homepage (Metal Blanks Hub)

The homepage is the primary ranking page for "metal blanks" and "metal blank." Every section serves double duty: user experience and keyword authority. H1 is "Metal Blanks" — no exceptions.

### Hero Section
- H1: **"Metal Blanks. Cut to Size. Shipped Fast."**
- Subhead: "The industry resource for steel, aluminum, copper, and specialty metal blanks — from precision machining stock to laser-cut shapes."
- Two CTAs: `Browse Materials` (anchor to material grid) + `Get a Quote` (links to /quote)
- Background: subtle animated noise texture over dark background. No stock photography.
- Optional: small live price ticker strip across the very top of the page (see Section 8)

### Live Price Bar (Sticky Top Strip)
- One-line strip: `Steel HRC: $XXX/ton ▲ 0.4%` | `Aluminum: $X,XXX/ton ▼ 0.2%` | `Copper: $X,XXX/ton ▲ 1.1%`
- Pulls from Metals-API, cached every 4 hours via ISR
- Monospace font, amber for up, muted red for down

### Material Grid (6 cards)
Cards for: Steel | Aluminum | Copper | Brass | Titanium | Stainless Steel  
Each card: icon (custom SVG, not emoji), material name, tagline, link to hub page  
Layout: 3-col desktop, 2-col tablet, 1-col mobile

### Buyer Segment Strips
Three horizontal strips targeting segments:
1. **Industrial & OEM** — "Precision blanks with MTR documentation. Cut-to-size, no minimums."
2. **Knife Makers & Bladesmiths** — "High-carbon tool steel blanks. 1084, D2, O1, CPM-154 in stock."
3. **Laser & Fabrication Shops** — "Laser-quality HR and CR steel. Flat, consistent, no warping."

Each strip links to the relevant hub or blog content cluster.

### Why Metal-Blanks.com (Trust Section)
- 4 stat/feature blocks: `50,000+ SKUs via dealer network`, `Live LME Pricing`, `MTRs Available`, `No Minimum Orders`
- Keep copy tight. No wall of text.

### Latest Blog Posts
- 3 most recent articles, card layout, auto-populated

### RFQ CTA Banner
- Full-width dark band: "Need a custom quote? Tell us what you need."
- Button: `Request a Quote →`

---

## 6. Hub Pages (One Per Material)

Each hub page follows the same template. Example: `/steel-blanks`

### Structure
```
1. H1: "Steel Blanks"
2. Intro paragraph (150 words, keyword-rich, informational)
3. Live price widget (HRC steel spot, pulled from API)
4. Product Form Grid (links to pSEO pages):
   - Steel Sheet Blanks
   - Steel Plate Blanks
   - Steel Bar Stock
   - Steel Disc Blanks
   - Steel Knife Blade Blanks
   - Laser Cut Steel Blanks
5. Grade Breakdown Table:
   | Grade | Type | Common Use | Typical Form |
   - A36, 1018, 1084, 4140, D2, etc.
6. Buyer Guide section (FAQ format, 4-6 questions)
   - "What is a steel blank?"
   - "What grade should I use for knife making?"
   - "Do your blanks come with MTRs?"
   - "What's the difference between HR and CR steel?"
7. Related blog articles (filtered by tag)
8. RFQ CTA
```

### Hub Pages to Build (V1)
- `/steel-blanks`
- `/aluminum-blanks`
- `/copper-blanks`
- `/brass-blanks`
- `/stainless-steel-blanks`
- `/titanium-blanks`

---

## 7. Programmatic SEO Pages

### Route
`/materials/[material]/[form]/[grade]`

### Template Structure
```
1. H1: "[Grade] [Material] [Form] Blanks" 
   e.g. "6061-T6 Aluminum Sheet Blanks"
2. Breadcrumb: Home > Aluminum Blanks > Sheet > 6061-T6
3. Spec table:
   | Property | Value |
   | Alloy | 6061-T6 |
   | Form | Sheet / Flat Blank |
   | Temper | T6 |
   | Typical Thickness | 0.063" – 1.0" |
   | Tensile Strength | 45,000 psi |
   | Common Uses | CNC machining, aerospace, tooling |
4. Live spot price for base metal (aluminum)
5. Description (200-300 words, generated from data)
6. Available dimensions (static seed data for v1)
7. RFQ CTA: "Need this material cut to size?"
8. Related grades / forms (internal links)
9. Related blog articles
```

### Seed Data Structure (JSON)
```json
{
  "material": "aluminum",
  "grade": "6061-T6",
  "form": "sheet",
  "slug": "aluminum/sheet/6061-t6",
  "properties": {
    "tensile_strength": "45,000 psi",
    "yield_strength": "40,000 psi",
    "temper": "T6",
    "density": "0.098 lb/in³"
  },
  "common_uses": ["CNC machining", "aerospace", "tooling", "laser cutting"],
  "common_thicknesses": ["0.063\"", "0.125\"", "0.250\"", "0.500\"", "1.0\""],
  "related_grades": ["5052-H32", "7075-T6", "3003-H14"],
  "price_metal_api_symbol": "LME-ALU"
}
```

### V1 Seed Pages (Priority Order)
Build these first — highest search intent:
1. `aluminum/sheet/6061-t6`
2. `aluminum/sheet/5052-h32`
3. `steel/plate/a36`
4. `steel/bar/1084` (knife making)
5. `steel/bar/d2-tool-steel`
6. `steel/bar/1018`
7. `stainless/sheet/304`
8. `copper/sheet/c110`
9. `brass/sheet/c260`
10. `aluminum/disc/6061-t6`

Expand to full matrix after initial indexing.

---

## 8. Live Pricing Page (`/prices`)

Standalone utility page. This is the bookmark/return-traffic hook.

### Layout
- Page title: "Live Metal Prices — LME Spot Rates"
- Last updated timestamp
- Price cards grid (one per metal):
  - Metal name + symbol
  - Current price ($/ton and $/lb)
  - 24h change (% and absolute)
  - Sparkline (7-day, simple SVG line chart)
- Metals covered: Aluminum, Copper, Steel (HRC), Brass (proxy), Titanium, Zinc, Nickel
- Note: "Prices sourced from LME via Metals-API. Updated every 4 hours."
- CTA below: "Need pricing for a specific blank size? Get a quote."

### Data Fetching
- Next.js ISR with `revalidate: 14400` (4 hours)
- Metals-API free tier endpoint: `https://metals-api.com/api/latest`
- Cache to Postgres to avoid hitting API limits
- Fallback to cached value if API fails (never show error to user)

---

## 9. RFQ / Quote Page (`/quote`)

Simple lead capture. No auth needed.

### Form Fields
```
- Name (required)
- Company (optional)
- Email (required)
- Phone (optional)
- Material (select: Steel, Aluminum, Copper, Brass, Stainless, Titanium, Other)
- Form (select: Sheet, Plate, Bar, Disc, Custom Shape, Other)
- Grade / Alloy (text, optional)
- Quantity (text)
- Dimensions / Notes (textarea)
- How did you hear about us? (optional select)
```

### Submission
- Save to Postgres `leads` table
- Send notification email (Resend or Nodemailer)
- Show confirmation page with next steps
- No redirect to Metals Depot yet — keep leads internal for v1

### Leads Table Schema
```sql
leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  company     text,
  email       text not null,
  phone       text,
  material    text,
  form        text,
  grade       text,
  quantity    text,
  notes       text,
  source      text,
  created_at  timestamptz default now()
)
```

---

## 10. Blog

### Route: `/blog/[slug]`

### MDX Frontmatter Schema
```yaml
---
title: "1084 Steel Blanks: The Complete Knife Maker's Guide"
slug: "1084-steel-blanks-knife-makers-guide"
date: "2026-03-25"
tags: ["knife-making", "steel", "1084"]
material: "steel"
segment: "knife-makers"
description: "Everything you need to know about 1084 high-carbon steel blanks..."
---
```

### Blog Index Page
- Filter by material tag
- Filter by buyer segment
- Card grid: title, date, tag, read time
- Simple pagination

### Article Layout
- Clean reading layout, max-width 720px
- Inline CTAs after every 3-4 paragraphs: "Need 1084 steel blanks? Request a quote."
- Related articles sidebar (desktop)
- Material price widget inline where relevant

---

## 11. SEO Infrastructure

### Metadata (every page)
- Dynamic `<title>` and `<meta description>` from page data
- Open Graph tags
- Canonical URLs
- Structured data (JSON-LD):
  - `WebSite` on homepage
  - `BreadcrumbList` on all inner pages
  - `Product` schema on pSEO material pages
  - `Article` schema on blog posts

### Sitemap
- Auto-generated via `next-sitemap`
- All hub pages, pSEO pages, and blog posts included
- Submit to Google Search Console on launch

### Robots.txt
```
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://metal-blanks.com/sitemap.xml
```

### Internal Linking Rules
- Every pSEO page links back to its parent hub
- Every hub page links to all its child pSEO pages
- Blog posts link to at least 2 relevant pSEO or hub pages
- Homepage links to all 6 material hubs
- `/prices` page linked from all hub pages and homepage nav

---

## 12. Navigation

### Header
```
Logo (left) | Materials ▾  Prices  Blog  Get a Quote (CTA button, right)
```

**Materials dropdown**:
- Steel Blanks
- Aluminum Blanks
- Copper Blanks
- Brass Blanks
- Stainless Steel Blanks
- Titanium Blanks
- [divider]
- All Materials →

### Footer
```
Column 1: Materials (hub page links)
Column 2: Resources (Blog, Live Prices, About)
Column 3: Company (About, Contact, Quote)
Column 4: Legal (Privacy, Terms)

Bottom bar: © 2026 Metal-Blanks.com | Live LME prices updated every 4 hours
```

---

## 13. File & Folder Structure

```
/
├── app/
│   ├── page.tsx                    (homepage AND metal blanks hub)
│   ├── layout.tsx                  (root layout, price strip)
│   ├── [material]-blanks/
│   │   └── page.tsx                (hub pages, dynamic route)
│   ├── materials/
│   │   └── [material]/[form]/[grade]/
│   │       └── page.tsx            (pSEO pages)
│   ├── prices/
│   │   └── page.tsx
│   ├── quote/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── api/
│       ├── prices/route.ts         (cached price fetch)
│       └── leads/route.ts          (RFQ form submission)
├── content/
│   ├── blog/                       (MDX articles)
│   └── materials/                  (JSON seed data)
├── components/
│   ├── PriceStrip.tsx
│   ├── PriceCard.tsx
│   ├── MaterialCard.tsx
│   ├── HubPageTemplate.tsx
│   ├── PSEOPageTemplate.tsx
│   ├── QuoteForm.tsx
│   ├── RFQBanner.tsx
│   └── BlogCard.tsx
├── lib/
│   ├── metals-api.ts               (price fetching + caching)
│   ├── content.ts                  (MDX helpers)
│   └── db.ts                       (Prisma client)
├── prisma/
│   └── schema.prisma
└── public/
    └── (static assets, SVG icons)
```

---

## 14. V1 Launch Checklist

- [ ] All 6 material hub pages live with full content
- [ ] `/metal-blanks` parent hub live
- [ ] Minimum 10 pSEO seed pages generated
- [ ] `/prices` page live with Metals-API integration
- [ ] `/quote` form live, leads saving to DB, email notification firing
- [ ] Homepage complete with all sections
- [ ] Blog set up, minimum 3 articles published
- [ ] Sitemap generated and submitted to Google Search Console
- [ ] Metals Depot dealer program application submitted
- [ ] Plausible analytics installed
- [ ] Vercel deployment live on metal-blanks.com

---

## 15. Out of Scope for V1

- User accounts / authentication
- Shopping cart or direct checkout
- Inventory management
- Supplier portal
- Email newsletter
- Paid ad tracking pixels (add after v1)
- Mobile app

---

## Notes for Claude Code

- Use `generateStaticParams` for all pSEO routes — these must be statically generated at build time
- Price data should never block page render — always show cached fallback
- The RFQ form is the single most important conversion element — make it prominent on every page
- All hub and pSEO pages should target a primary keyword in: H1, first 100 words, URL slug, meta title
- Keep dependencies minimal — no heavy UI libraries needed
- The site should score 90+ on Lighthouse performance out of the box