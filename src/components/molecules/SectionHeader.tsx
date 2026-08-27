"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
    tag: string;
    title: string;
    description: string;
    highlight?: string;
}

export function SectionHeader({ tag, title, description, highlight }: SectionHeaderProps) {
    const renderTitle = () => {
        if (!highlight) return title;
        const parts = title.split(highlight);
        return (
            <>
                {parts[0]}
                <span className="gradient-text">{highlight}</span>
                {parts[1]}
            </>
        );
    };

    return (
        <div className="mb-14 md:mb-20">
            <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[11px] font-medium tracking-[0.25em] uppercase text-white/35 mb-5"
            >
                {tag}
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="text-3xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.03em] leading-[1.1] mb-6 max-w-3xl"
            >
                {renderTitle()}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-base md:text-lg text-white/45 max-w-2xl leading-relaxed font-light"
            >
                {description}
            </motion.p>
        </div>
    );
}
