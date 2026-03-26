import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Metal Blanks | Cut to Size Steel, Aluminum, Copper & More",
    template: "%s | Metal-Blanks.com",
  },
  description:
    "Steel, aluminum, copper, and specialty metal blanks cut to size. Live LME pricing, detailed specs, and instant quotes. No minimums.",
  metadataBase: new URL("https://metal-blanks.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Metal-Blanks.com",
    title: "Metal Blanks | Cut to Size Steel, Aluminum, Copper & More",
    description:
      "The industry resource for steel, aluminum, copper, and specialty metal blanks — from precision machining stock to laser-cut shapes.",
    url: "https://metal-blanks.com",
    images: [
      {
        url: "/images/steel-plate.jpg",
        width: 1200,
        height: 630,
        alt: "Metal-Blanks.com — precision-cut metal blanks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metal Blanks | Cut to Size Steel, Aluminum, Copper & More",
    description:
      "The industry resource for steel, aluminum, copper, and specialty metal blanks — from precision machining stock to laser-cut shapes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${barlowCondensed.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
