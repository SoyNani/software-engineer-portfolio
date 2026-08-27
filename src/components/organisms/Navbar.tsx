"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/navigation.config";
import { Logo } from "@/components/atoms/Logo";
import { NavLinks } from "@/components/molecules/NavLinks";
import { MobileMenu } from "@/components/molecules/MobileMenu";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleMobileClose = useCallback(() => setMobileOpen(false), []);
    const handleMobileToggle = useCallback(() => setMobileOpen((prev) => !prev), []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-background/70 backdrop-blur-2xl border-b border-white/5"
                    : "bg-transparent"
            }`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-6 md:px-10 max-w-7xl">
                <Logo />

                <NavLinks links={navLinks} />

                <button
                    className="md:hidden text-foreground/80 hover:text-foreground transition-colors p-2"
                    onClick={handleMobileToggle}
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-menu"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <div id="mobile-menu">
                <MobileMenu
                    isOpen={mobileOpen}
                    onClose={handleMobileClose}
                    links={navLinks}
                />
            </div>
        </nav>
    );
};
