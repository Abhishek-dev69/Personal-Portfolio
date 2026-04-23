"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/data/site";
import { Container } from "@/components/container";
import { NavLink } from "@/components/nav-link";

type Theme = "dark" | "light";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme") as Theme | null;
    const initialTheme = savedTheme === "light" ? "light" : "dark";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-18 items-center justify-between gap-4 py-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            aria-label={`${siteConfig.name} home`}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-white transition group-hover:border-accent/40 group-hover:bg-white/10">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 19 12 5l7 14" />
                <path d="M8.8 13h6.4" />
              </svg>
            </span>
            <span className="hidden flex-col sm:flex">
              <span className="font-display text-sm font-semibold tracking-wide text-white">
                {siteConfig.name}
              </span>
              <span className="text-xs text-slate-400">{siteConfig.title}</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
            {navigation.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {theme === "dark" ? (
                  <>
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                  </>
                ) : (
                  <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5Z" />
                )}
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">Toggle navigation</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open ? (
          <nav
            id="mobile-navigation"
            className="grid gap-2 border-t border-white/8 pb-5 pt-4 md:hidden"
            aria-label="Mobile"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                onNavigate={() => setOpen(false)}
              />
            ))}
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
