import { NavLink as NavLinkType } from "@/types/navigation.types";
import Link from "next/link";
import {NavLink} from "../atoms/NavLink";

interface NavLinksProps {
    links: NavLinkType[];
    className?: string;
}

export function NavLinks ({ links, className = "" }: NavLinksProps) {
    return (
        <div className={`hidden md:flex items-center gap-8 ${className}`}>
            {links.map((link) => (
                <NavLink key={link.href} href={link.href}>
                    {link.label}
                </NavLink>
            ))}
            <Link
                href="#contact"
                className="text-sm px-4 py-2 rounded-lg gradient-button"
            >
                Hablemos
            </Link>
        </div>
    );
};
