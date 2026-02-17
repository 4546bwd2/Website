import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";

interface CTAButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  to?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const variants = {
  primary:
    "bg-terracotta text-white hover:bg-terracotta-dark hover:shadow-lg hover:shadow-terracotta/25",
  secondary:
    "bg-sea text-white hover:bg-sea-light hover:shadow-lg hover:shadow-sea/25",
  outline:
    "border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white",
  ghost:
    "text-terracotta hover:bg-terracotta/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
};

export function CTAButton({
  variant = "primary",
  size = "md",
  href,
  to,
  external,
  children,
  className,
  icon,
}: CTAButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-2 font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={classes}>
      {icon}
      {children}
    </button>
  );
}
