"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation, siteConfig } from "@/data/site";
import { Container } from "@/components/container";
import { NavLink } from "@/components/nav-link";

type Theme = "dark" | "light";

const homeScrollTargets = [
  { href: "/", id: "home" },
  { href: "/about", id: "about" },
  { href: "/projects", id: "projects" },
  { href: "/experience", id: "experience" },
  { href: "/contact", id: "contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [activeHref, setActiveHref] = useState("/");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme") as Theme | null;
    const initialTheme = savedTheme === "light" ? "light" : "dark";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHref(pathname);
      return;
    }

    let animationFrame = 0;

    const scrollToHashTarget = () => {
      const targetId = window.location.hash.slice(1);

      if (!targetId) {
        return;
      }

      const target = document.getElementById(targetId);
      const matchingTarget = homeScrollTargets.find((item) => item.id === targetId);

      if (matchingTarget) {
        setActiveHref(matchingTarget.href);
      }

      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    };

    const updateActiveSection = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const checkpoint = Math.min(window.innerHeight * 0.38, 300);
        const nearBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

        let nextHref = "/";

        for (const target of homeScrollTargets) {
          const section = document.getElementById(target.id);

          if (section && section.getBoundingClientRect().top <= checkpoint) {
            nextHref = target.href;
          }
        }

        if (nearBottom) {
          nextHref = "/contact";
        }

        setActiveHref((current) => (current === nextHref ? current : nextHref));
      });
    };

    scrollToHashTarget();

    if (!window.location.hash) {
      updateActiveSection();
    }
    window.addEventListener("hashchange", scrollToHashTarget);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("hashchange", scrollToHashTarget);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  return (
    <header className="sticky top-3 z-50 px-3 sm:top-4">
      <Container>
        <div className="site-navbar relative">
          <div className="relative flex min-h-16 items-center justify-between gap-3 overflow-hidden rounded-full border border-white/10 bg-slate-950/72 px-3 py-2 shadow-[0_18px_70px_rgba(3,7,18,0.34)] backdrop-blur-2xl sm:px-4">
            <span
              aria-hidden="true"
              className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
            <Link
              href="/"
              className="group inline-flex min-w-0 items-center gap-3 rounded-full pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-label={`${siteConfig.name} home`}
              onClick={() => {
                setActiveHref("/");
                setOpen(false);
              }}
            >
              <span className="relative flex h-11 w-11 flex-none items-center justify-center rounded-full border border-accent/25 bg-accent/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_12px_34px_rgba(66,219,191,0.14)] transition group-hover:scale-105 group-hover:border-accent/50">
                <span className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.28),transparent_38%)]" />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="relative h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 19 12 5l7 14" />
                  <path d="M8.8 13h6.4" />
                </svg>
              </span>
              <span className="hidden min-w-0 flex-col sm:flex">
                <span className="truncate font-display text-sm font-semibold tracking-wide text-white">
                  {siteConfig.name}
                </span>
                <span className="truncate text-[11px] text-slate-400">
                  Mobile App + Web Developer
                </span>
              </span>
            </Link>

            <nav
              className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.045] p-1 lg:flex"
              aria-label="Primary"
            >
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  active={activeHref === item.href}
                  onNavigate={() => setActiveHref(item.href)}
                />
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={siteConfig.resumeHref}
                download
                className="motion-button hidden rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-accent/35 hover:bg-white/[0.085] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:inline-flex"
              >
                Resume
              </a>

              <button
                type="button"
                onClick={toggleTheme}
                className="motion-button inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.055] text-slate-200 transition hover:border-accent/30 hover:bg-white/[0.085] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
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
                className="motion-button inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.055] text-slate-200 transition hover:border-accent/30 hover:bg-white/[0.085] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 lg:hidden"
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
              className="mobile-nav-panel absolute left-0 right-0 top-[calc(100%+0.75rem)] grid gap-2 rounded-[1.5rem] border border-white/10 bg-slate-950/92 p-3 shadow-[0_24px_80px_rgba(3,7,18,0.42)] backdrop-blur-2xl lg:hidden"
              aria-label="Mobile"
            >
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  active={activeHref === item.href}
                  variant="mobile"
                  onNavigate={() => {
                    setActiveHref(item.href);
                    setOpen(false);
                  }}
                />
              ))}
              <a
                href={siteConfig.resumeHref}
                download
                className="motion-button mt-1 inline-flex items-center justify-center rounded-full bg-accent px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#7bf0da] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                onClick={() => setOpen(false)}
              >
                Download resume
              </a>
            </nav>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
