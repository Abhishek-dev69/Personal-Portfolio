"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

type NavLinkProps = {
  href: string;
  label: string;
  active?: boolean;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
};

export function NavLink({
  href,
  label,
  active: activeOverride,
  onNavigate,
  variant = "desktop",
}: NavLinkProps) {
  const pathname = usePathname();
  const hasHash = href.includes("#");
  const routeHref = hasHash ? href.split("#")[0] || "/" : href;
  const active = activeOverride ?? (!hasHash && pathname === routeHref);
  const baseClassName =
    "nav-link motion-button relative rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

  const variantClassName =
    variant === "mobile"
      ? "flex items-center justify-between px-4 py-3"
      : "px-4 py-2";

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const targetId = hasHash ? href.split("#")[1] : "";
    const isSamePageHash = Boolean(targetId && routeHref === pathname);

    if (isSamePageHash) {
      const target = document.getElementById(targetId);

      if (target) {
        event.preventDefault();
        onNavigate?.();
        window.history.pushState(null, "", href);
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    onNavigate?.();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${baseClassName} ${variantClassName} ${
        active
          ? "bg-accent text-slate-950 shadow-[0_12px_28px_rgba(66,219,191,0.18)]"
          : "text-slate-300 hover:bg-white/7 hover:text-white"
      }`}
      aria-current={active ? "page" : undefined}
    >
      <span>{label}</span>
      {variant === "mobile" ? (
        <span
          aria-hidden="true"
          className={`h-2 w-2 rounded-full ${active ? "bg-slate-950" : "bg-accent/40"}`}
        />
      ) : null}
    </Link>
  );
}
