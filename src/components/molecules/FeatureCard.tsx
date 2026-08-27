"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { FeatureCardType } from "@/types/about.types";

interface FeatureCardProps extends FeatureCardType {
    index: number;
}

export function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
    const IconName = icon as keyof typeof LucideIcons;
    const Icon = LucideIcons[IconName] as LucideIcons.LucideIcon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="h-full"
        >
            <div className="h-full rounded-2xl border border-white/6 bg-white/[0.02] p-6 transition-all duration-300 hover:border-primary/25 hover:bg-white/[0.035] flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        {Icon && <Icon size={18} strokeWidth={1.5} />}
                    </div>
                    <h3 className="text-base font-semibold text-white leading-tight">{title}</h3>
                </div>
                <p className="text-white/45 text-sm leading-relaxed font-light">{description}</p>
            </div>
        </motion.div>
    );
}
