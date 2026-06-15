"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
type NavLinkProps = {
  href: string;
  label: string;
  variant?: "desktop" | "mobile";
};

export function NavLink({
  href,
  label,
  variant = "desktop",
}: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;
  const baseClassName =
    "nav-link relative rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  const variantClassName =
    variant === "mobile"
      ? "flex min-h-12 items-center justify-between px-4 py-3"
      : "px-4 py-2.5";

  return (
    <Link
      href={href}
      className={`${baseClassName} ${variantClassName} ${
        active
          ? "nav-link-active"
          : "text-muted hover:bg-foreground/[0.06] hover:text-foreground"
      }`}
      aria-current={active ? "page" : undefined}
    >
      <span>{label}</span>
      {variant === "mobile" ? (
        <span
          aria-hidden="true"
          className={`h-2 w-2 rounded-full ${active ? "bg-current" : "bg-accent/45"}`}
        />
      ) : null}
    </Link>
  );
}
