import { NavLink as NavLinkType } from "@/types/navigation.types";
import { NavLink } from "../atoms/NavLink";

interface NavLinksProps {
    links: NavLinkType[];
    className?: string;
}

export function NavLinks({ links, className = "" }: NavLinksProps) {
    return (
        <div className={`hidden md:flex items-center gap-1 ${className}`}>
            {links.map((link) => (
                <NavLink key={link.href} href={link.href}>
                    {link.label}
                </NavLink>
            ))}
            <a
                href="#contact"
                className="ml-4 text-sm font-medium px-5 py-2.5 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300"
            >
                Hablemos
            </a>
        </div>
    );
}
