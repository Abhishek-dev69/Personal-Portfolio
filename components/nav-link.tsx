"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
  onNavigate?: () => void;
};

export function NavLink({ href, label, onNavigate }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`rounded-full px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
        active
          ? "bg-white/10 text-white"
          : "text-slate-300 hover:bg-white/5 hover:text-white"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
