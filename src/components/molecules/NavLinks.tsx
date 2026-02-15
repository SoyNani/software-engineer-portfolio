import { NavLink as NavLinkType } from "@/types/navigation.types";
import Link from "next/link";
import { NavLink } from "../atoms/NavLink";

import { LogIn, LogOut, FileText } from "lucide-react";
import { protectedContent } from "@/data/protected.content";

interface NavLinksProps {
    links: NavLinkType[];
    className?: string;
    onLoginClick: () => void;
    isLoggedIn: boolean;
    onLogout: () => void;
}

export function NavLinks({
    links,
    className = "",
    onLoginClick,
    isLoggedIn,
    onLogout
}: NavLinksProps) {
    return (
        <div className={`hidden md:flex items-center gap-8 ${className}`}>
            {links.map((link) => (
                <NavLink key={link.href} href={link.href}>
                    {link.label}
                </NavLink>
            ))}

            {isLoggedIn ? (
                <div className="flex items-center gap-4">
                    <a
                        href={protectedContent.cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-4 py-2 rounded-lg gradient-button flex items-center gap-2 font-medium"
                    >
                        <FileText size={16} />
                        Descargar CV
                    </a>
                    <button
                        onClick={onLogout}
                        className="text-sm px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors flex items-center gap-2"
                    >
                        <LogOut size={16} />
                        Cerrar Sesión
                    </button>
                </div>
            ) : (
                <button
                    onClick={onLoginClick}
                    className="text-sm px-4 py-2 rounded-lg gradient-button flex items-center gap-2"
                >
                    <LogIn size={16} />
                    Iniciar Sesión
                </button>
            )}
        </div>
    );
};
