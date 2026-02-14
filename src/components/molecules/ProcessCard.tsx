"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className={cn("h-full", className)}
        >
            <Card className="h-full bg-[#0D0D12] border-white/5 rounded-2xl overflow-hidden transition-all hover:border-primary/30 flex items-center p-6 md:p-8 gap-6 shadow-none">
                {/* Icon Container */}
                <div className="shrink-0 size-12 md:size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                    <Icon size={24} />
                </div>

                <CardContent className="p-0 flex flex-col gap-2">
                    <h3 className="text-base md:text-xl font-semibold text-foreground transition-colors leading-tight">
                        {title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-[14px] md:text-[15px]">
                        {description}
                    </p>
                </CardContent>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
        </motion.div>
    );
}
