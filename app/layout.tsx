import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.about,
  applicationName: `${siteConfig.name} Portfolio`,
  keywords: [
    "portfolio",
    "full stack developer",
    "next.js portfolio",
    "typescript portfolio",
    "web developer",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.about,
    url: siteConfig.domain,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.about,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  description: siteConfig.about,
  email: siteConfig.email,
  sameAs: [siteConfig.github, siteConfig.linkedin],
  url: siteConfig.domain,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-950"
        >
          Skip to content
        </a>
        <div className="relative min-h-screen bg-background text-foreground">
          <div className="pointer-events-none absolute inset-0 bg-mesh-glow" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px] opacity-[0.06]" />
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </div>
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
