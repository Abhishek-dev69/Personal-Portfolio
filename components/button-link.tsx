import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  download?: boolean;
  className?: string;
};

const styles = {
  primary:
    "bg-accent text-slate-950 shadow-[0_12px_30px_rgba(66,219,191,0.22)] hover:-translate-y-0.5 hover:bg-[#7bf0da]",
  secondary:
    "border border-white/12 bg-white/5 text-white hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/8",
  ghost:
    "text-slate-200 hover:-translate-y-0.5 hover:text-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className = "",
}: ButtonLinkProps) {
  const sharedClassName = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${styles[variant]} ${className}`;

  if (external || download) {
    return (
      <a
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={sharedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClassName}>
      {children}
    </Link>
  );
}
