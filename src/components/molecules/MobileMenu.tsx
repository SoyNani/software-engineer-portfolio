import { motion, AnimatePresence } from "framer-motion";
import { NavLink as NavLinkType } from "@/types/navigation.types";
import Link from "next/link";
import { useEffect } from "react";
import {NavLink} from "../atoms/NavLink";

/**
 * MobileMenu component - mobile navigation drawer
 * Includes accessibility features like Escape key handling and focus management
 */
interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: NavLinkType[];
}

export function MobileMenu ({ isOpen, onClose, links }: MobileMenuProps) {
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
                        {links.map((link) => (
                            <NavLink key={link.href} href={link.href} onClick={onClose}>
                                {link.label}
                            </NavLink>
                        ))}
                        <Link
                            href="#contact"
                            onClick={onClose}
                            className="text-sm px-4 py-2 rounded-lg text-center gradient-button"
                        >
                            Hablemos
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
