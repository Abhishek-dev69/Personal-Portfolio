"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation, siteConfig } from "@/data/site";
import { Container } from "@/components/container";
import { NavLink } from "@/components/nav-link";

type Theme = "dark" | "light";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", closeMenu);
    return () => window.removeEventListener("keydown", closeMenu);
  }, []);

  const toggleTheme = () => {
    const currentTheme =
      document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    setTheme(nextTheme);

    try {
      window.localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      // The visual theme should still work if storage is unavailable.
    }
  };

  return (
    <header className="site-header sticky top-0 z-50 py-3 sm:py-4">
      <Container>
        <div className="site-navbar relative flex min-h-[4.25rem] items-center justify-between gap-3 rounded-[1.35rem] border px-3 py-2 sm:px-4">
          <Link
            href="/"
            className="brand-link group inline-flex min-w-0 items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`${siteConfig.name} home`}
          >
            <span className="brand-mark" aria-hidden="true">
              A
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block truncate font-display text-sm font-semibold tracking-tight">
                {siteConfig.name}
              </span>
              <span className="block truncate text-[11px] text-muted">
                Mobile + full-stack developer
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navigation.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={siteConfig.resumeHref} download className="nav-resume hidden sm:inline-flex">
              Resume
              <span aria-hidden="true">↓</span>
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="nav-icon-button"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={theme === "dark"}
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
              className="nav-icon-button lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close menu" : "Open menu"}
            >
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

          {open ? (
            <nav id="mobile-navigation" className="mobile-nav-panel" aria-label="Mobile">
              {navigation.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} variant="mobile" />
              ))}
              <a href={siteConfig.resumeHref} download className="button-primary mt-2 inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-semibold">
                Download resume
              </a>
            </nav>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
