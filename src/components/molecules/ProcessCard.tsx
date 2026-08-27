"use client";

import { motion } from "framer-motion";
import { ProcessItem } from "@/types/process.types";
import { cn } from "@/lib/utils";

interface ProcessCardProps {
    item: ProcessItem;
    className?: string;
}

export function ProcessCard({ item, className }: ProcessCardProps) {
    const { title, description, icon: Icon } = item;

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn("h-full", className)}
        >
            <div className="h-full rounded-2xl border border-white/6 bg-white/[0.02] p-6 md:p-8 flex items-start gap-5 transition-all duration-300 hover:border-primary/25 hover:bg-white/[0.035]">
                <div className="shrink-0 size-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Icon size={20} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-base md:text-lg font-semibold text-white leading-tight">
                        {title}
                    </h3>
                    <p className="text-white/45 leading-relaxed text-sm font-light">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
