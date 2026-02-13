"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { ScrollIndicator } from "@/components/molecules";
import Link from "next/link";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 grid-bg opacity-40" />

            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-[animate-float_6s_ease-in-out_infinite]" />
            <div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-[animate-float_6s_ease-in-out_infinite]"
                style={{ animationDelay: "3s" }}
            />

            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-center justify-center gap-2 mb-6"
                >
                    <span
                        className="inline-flex items-center gap-2 text-xs font-medium font-mono px-3 py-1.5 rounded-full border"
                        style={{ color: '#4f48e4', backgroundColor: '#4f48e410', borderColor: '#4f48e440' }}
                    >
                        <Sparkles size={12} />
                        Frontend Developer · Product Mindset
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
                >
                    Soy <span className="gradient-text">Nani</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
                >
                    Construyo interfaces intuitivas que conectan tecnología con negocio.
                    <br className="hidden sm:block" />
                    JavaScript · React · Next.js · Data Analytics
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#projects"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-7 py-3 rounded-xl hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
                    >
                        Ver proyectos
                        <ArrowDown size={16} />
                    </Link>
                    <Link
                        href="#architecture"
                        className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-7 py-3 rounded-xl hover:bg-secondary transition-all duration-200"
                    >
                        Explorar demo
                    </Link>
                </motion.div>

                {/* Scroll indicator */}
                <ScrollIndicator />
            </div>
        </section>
    );
};
