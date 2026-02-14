"use client";

import { motion } from "framer-motion";
import {Badge} from "../atoms/Badge";

interface SectionHeaderProps {
    tag: string;
    title: string;
    description: string;
    highlight?: string;
}

export function SectionHeader ({ tag, title, description, highlight }: SectionHeaderProps) {
    // Function to render title with highlight
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
        <div className="mb-16">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6"
            >
                <Badge variant="mono" className="text-[10px] tracking-widest uppercase">
                    {tag}
                </Badge>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl md:text-4xl font-bold mb-8 max-w-3xl leading-tight"
            >
                {renderTitle()}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-foreground/80 max-w-3xl leading-relaxed text-balance"
            >
                {description}
            </motion.p>
        </div>
    );
};
