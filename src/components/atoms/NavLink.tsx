import Link from "next/link";

/**
 * NavLink component - navigation link with hover and focus states
 * @param href - Link destination
 * @param children - Link content
 * @param onClick - Optional click handler
 * @param className - Additional CSS classes
 */
import { NavLinkProps } from "@/types/components.types";

export const NavLink = ({
    href,
    children,
    onClick,
    className = "",
}: NavLinkProps) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:text-foreground ${className}`}
        >
            {children}
        </Link>
    );
};
