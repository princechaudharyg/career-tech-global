import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-blue-600 text-blue-600 hover:bg-blue-50";

  if (href) {
    return (
      <Link
        href={href}
        className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition ${styles} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition ${styles} ${className}`}
    >
      {children}
    </button>
  );
}