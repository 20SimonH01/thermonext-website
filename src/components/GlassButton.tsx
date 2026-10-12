import Link from "next/link";
import type { ReactNode } from "react";

type GlassButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  external?: boolean;
};

export default function GlassButton({
  href,
  children,
  variant = "solid",
  className = "",
  external = false,
}: GlassButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium tracking-wide";
  const style = variant === "solid" ? "glass-btn" : "glass-btn-ghost";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${style} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${style} ${className}`}>
      {children}
    </Link>
  );
}
