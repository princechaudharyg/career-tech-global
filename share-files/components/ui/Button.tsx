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

  const classes =
    variant === "primary"
      ? "btn-primary"
      : "btn-secondary";

  if (href) {
    return (
      <Link
        href={href}
        className={`${classes} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${classes} ${className}`}
    >
      {children}
    </button>
  );
}