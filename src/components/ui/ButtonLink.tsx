// src/components/ui/ButtonLink.tsx
import React from "react";
import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

interface ButtonLinkProps extends LinkProps {
  /** Visual variant, same as Button. */
  variant?: "primary" | "secondary";
}

const variantClasses: Record<string, string> = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary: "bg-accent text-white hover:bg-accent/90",
};

/**
 * Looks like <Button>, but navigates with React Router (no page reload).
 */
export const ButtonLink: React.FC<ButtonLinkProps> = ({
  variant = "primary",
  className = "",
  children,
  ...rest
}) => {
  return (
    <Link
      className={`inline-block px-6 py-3 rounded-2xl font-medium transition hover:scale-[1.02] active:scale-[0.98] ${variantClasses[variant] ?? ""} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
};
