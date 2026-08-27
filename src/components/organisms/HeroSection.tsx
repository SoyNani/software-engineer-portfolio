"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { ScrollIndicator } from "../molecules/ScrollIndicator";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[radial-gradient(ellipse_at_center,rgba(79,72,228,0.12)_0%,transparent_70%)]" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="relative z-10 container mx-auto px-6 md:px-10 max-w-7xl">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[11px] md:text-xs font-medium tracking-[0.25em] uppercase text-white/40 mb-8"
                    >
                        Software Developer · Leadership Mindset
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[clamp(3rem,10vw,7.5rem)] font-semibold tracking-[-0.04em] leading-[0.95] mb-8"
                    >
                        Laura
                        <br />
                        <span className="gradient-text">López</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="text-base md:text-lg text-white/50 max-w-xl mx-auto mb-12 leading-relaxed font-light"
                    >
                        Desarrollo soluciones digitales con enfoque estratégico,
                        pensando siempre en el usuario final y en la lógica de negocio.
                        Construyo tecnología que conecta experiencia y valor real.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <div className="flex items-center gap-4">
                            <a
                                href="https://www.linkedin.com/in/laura-daniela-lópez-jiménez"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/40 hover:text-white transition-colors duration-300 p-2"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} strokeWidth={1.5} />
                            </a>
                            <a
                                href="https://github.com/SoyNani"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/40 hover:text-white transition-colors duration-300 p-2"
                                aria-label="GitHub"
                            >
                                <Github size={20} strokeWidth={1.5} />
                            </a>
                        </div>

                        <Link
                            href="#experience"
                            className="group inline-flex items-center gap-2.5 text-sm font-medium tracking-wide px-7 py-3.5 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300"
                        >
                            Ver experiencia
                            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            <ScrollIndicator />
        </section>
    );
}
