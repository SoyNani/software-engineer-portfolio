"use client";

import { motion } from "framer-motion";

interface TechStackProps {
    technologies: string[];
}

export function TechStack({ technologies }: TechStackProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 md:mt-20"
        >
            <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/30 mb-5">
                Stack Tecnológico
            </h3>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="text-[13px] font-medium py-2 px-4 rounded-full bg-white/[0.04] text-white/70 border border-white/6 hover:border-white/15 hover:text-white transition-colors"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
