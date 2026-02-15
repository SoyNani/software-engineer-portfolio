"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import Link from "next/link";
import { ScrollIndicator } from "../molecules/ScrollIndicator";
import { useAuth } from "@/context/AuthContext";

export function HeroSection() {
    const { isLoggedIn } = useAuth();
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
    const email = process.env.NEXT_PUBLIC_EMAIL || "";
    const message = encodeURIComponent("Hola Laura nos gusto tú perfil, quiero saber más de ti");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

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
                        Software Developer · Leadership Mindset
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
                >
                    Laura <span className="gradient-text">López</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance"
                >
                    Desarrollo soluciones digitales con enfoque estratégico,
                    pensando siempre en el usuario final y en la lógica de negocio.
                    <br className="hidden sm:block" />
                    Construyo tecnología que conecta experiencia y valor real.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center gap-8"
                >
                    {/* Social networks above button */}
                    <div className="flex items-center gap-6">
                        {isLoggedIn && (
                            <>
                                <a
                                    href={gmailUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 hover:bg-secondary/50 rounded-full"
                                    aria-label="Email"
                                >
                                    <Mail size={26} />
                                </a>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 hover:bg-secondary/50 rounded-full"
                                    aria-label="WhatsApp"
                                >
                                    <MessageCircle size={26} />
                                </a>
                            </>
                        )}
                        <a
                            href="https://www.linkedin.com/in/laura-daniela-lópez-jiménez"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 hover:bg-secondary/50 rounded-full"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={26} />
                        </a>
                        <a
                            href="https://github.com/SoyNani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 hover:bg-secondary/50 rounded-full"
                            aria-label="GitHub"
                        >
                            <Github size={26} />
                        </a>
                    </div>

                    <Link
                        href="#experience"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group"
                    >
                        Ver experiencia
                        <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
            <ScrollIndicator />
        </section>
    );
};
