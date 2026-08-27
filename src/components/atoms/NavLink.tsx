import Link from "next/link";
import { NavLinkProps } from "@/types/components.types";

export function NavLink({
    href,
    children,
    onClick,
    className = "",
}: NavLinkProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`text-[13px] text-white/45 hover:text-white transition-colors duration-300 px-3 py-2 tracking-wide ${className}`}
        >
            {children}
        </Link>
    );
}
