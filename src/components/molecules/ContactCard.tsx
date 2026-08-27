"use client";

import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const ContactCard = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
    const email = process.env.NEXT_PUBLIC_EMAIL || "soyynanii@gmail.com";
    const message = encodeURIComponent("Hola Laura, me gustó tu perfil. Quiero saber más de ti.");
    const whatsappUrl = phoneNumber ? `https://wa.me/${phoneNumber}?text=${message}` : "#";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full mx-auto text-center py-16 md:py-24"
        >
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-white/30 mb-6">
                Contacto
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.05] mb-6">
                Construyamos algo
                <br />
                <span className="gradient-text">juntos</span>
            </h2>
            <p className="text-white/45 text-base md:text-lg max-w-lg mx-auto mb-12 font-light leading-relaxed">
                ¿Tienes un proyecto en mente? Me encantaría saber más sobre
                tu idea y cómo puedo ayudar a llevarla al siguiente nivel.
            </p>

            <div className="flex items-center justify-center flex-wrap gap-3 md:gap-4">
                <a
                    href={gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-sm text-white/70 hover:text-white hover:border-white/25 transition-all duration-300"
                >
                    <Mail size={16} strokeWidth={1.5} />
                    Email
                </a>
                {phoneNumber && (
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-sm text-white/70 hover:text-white hover:border-white/25 transition-all duration-300"
                    >
                        <MessageCircle size={16} strokeWidth={1.5} />
                        WhatsApp
                    </a>
                )}
                <a
                    href="https://www.linkedin.com/in/laura-daniela-lópez-jiménez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-sm text-white/70 hover:text-white hover:border-white/25 transition-all duration-300"
                >
                    <Linkedin size={16} strokeWidth={1.5} />
                    LinkedIn
                </a>
                <a
                    href="https://github.com/SoyNani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-sm text-white/70 hover:text-white hover:border-white/25 transition-all duration-300"
                >
                    <Github size={16} strokeWidth={1.5} />
                    GitHub
                </a>
            </div>
        </motion.div>
    );
};
