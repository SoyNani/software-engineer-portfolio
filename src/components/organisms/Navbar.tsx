"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/navigation.config";
import { Logo } from "@/components/atoms/Logo";
import { NavLinks } from "@/components/molecules/NavLinks";
import { MobileMenu } from "@/components/molecules/MobileMenu";

/**
 * Navbar organism component
 * Features: sticky positioning, scroll effects, responsive mobile menu
 * Accessibility: keyboard navigation, ARIA labels, focus management
 */
export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Memoize close handler to prevent unnecessary re-renders
    const handleMobileClose = useCallback(() => setMobileOpen(false), []);
    const handleMobileToggle = useCallback(() => setMobileOpen((prev) => !prev), []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
                : "bg-transparent"
                }`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="container mx-auto flex items-center justify-between h-16 px-6">
                <Logo />

                {/* Desktop Navigation */}
                <NavLinks links={navLinks} />

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-foreground hover:text-primary transition-colors"
                    onClick={handleMobileToggle}
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-menu"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
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
