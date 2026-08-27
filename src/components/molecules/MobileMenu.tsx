"use client";

import { motion, AnimatePresence } from "framer-motion";
import { NavLink as NavLinkType } from "@/types/navigation.types";
import { useEffect } from "react";
import { NavLink } from "../atoms/NavLink";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: NavLinkType[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
                    role="navigation"
                    aria-label="Mobile navigation menu"
                >
                    <div className="flex flex-col gap-1 px-6 py-8">
                        {links.map((link, i) => (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <NavLink href={link.href} onClick={onClose}>
                                    {link.label}
                                </NavLink>
                            </motion.div>
                        ))}
                        <a
                            href="#contact"
                            onClick={onClose}
                            className="mt-4 text-center text-sm font-medium px-5 py-3 rounded-full bg-white text-black"
                        >
                            Hablemos
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
