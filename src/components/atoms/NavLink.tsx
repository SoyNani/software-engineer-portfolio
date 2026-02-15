import Link from "next/link";

import { NavLinkProps } from "@/types/components.types";

export function NavLink ({
    href,
    children,
    onClick,
    className = "",
}: NavLinkProps) {
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
