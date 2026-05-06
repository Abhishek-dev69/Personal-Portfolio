"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
};

export function NavLink({ href, label, onNavigate, variant = "desktop" }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;
  const baseClassName =
    "nav-link motion-button relative rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

  const variantClassName =
    variant === "mobile"
      ? "flex items-center justify-between px-4 py-3"
      : "px-4 py-2";

  return (
    <Link
      href={href}
      onClick={onNavigate}
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
