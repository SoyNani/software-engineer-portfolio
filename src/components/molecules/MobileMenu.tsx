import { motion, AnimatePresence } from "framer-motion";
import { NavLink as NavLinkType } from "@/types/navigation.types";
import Link from "next/link";
import { useEffect } from "react";
import { NavLink } from "../atoms/NavLink";


import { LogIn, LogOut, FileText } from "lucide-react";
import { protectedContent } from "@/data/protected.content";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: NavLinkType[];
    onLoginClick: () => void;
    isLoggedIn: boolean;
    onLogout: () => void;
}

export function MobileMenu({
    isOpen,
    onClose,
    links,
    onLoginClick,
    isLoggedIn,
    onLogout
}: MobileMenuProps) {
    // Handle Escape key to close menu
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
                    role="navigation"
                    aria-label="Mobile navigation menu"
                >
                    <div className="flex flex-col gap-4 px-6 py-6">
                        {links
                            .filter(link => !link.isProtected || isLoggedIn)
                            .map((link) => (
                                <NavLink key={link.href} href={link.href} onClick={onClose}>
                                    {link.label}
                                </NavLink>
                            ))}

                        {isLoggedIn ? (
                            <div className="flex flex-col gap-3 pt-2">
                                <a
                                    href={protectedContent.cvUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={onClose}
                                    className="text-sm px-4 py-3 rounded-lg gradient-button text-center flex items-center justify-center gap-2 font-bold"
                                >
                                    <FileText size={16} />
                                    Descargar CV
                                </a>
                                <button
                                    onClick={() => {
                                        onLogout();
                                        onClose();
                                    }}
                                    className="text-sm px-4 py-3 rounded-lg border border-border text-center flex items-center justify-center gap-2"
                                >
                                    <LogOut size={16} />
                                    Cerrar Sesión
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={onLoginClick}
                                className="text-sm px-4 py-3 rounded-lg text-center gradient-button flex items-center justify-center gap-2"
                            >
                                <LogIn size={16} />
                                Iniciar Sesión
                            </button>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
