"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { FeatureCardType } from "@/types/about.types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface FeatureCardProps extends FeatureCardType {
    index: number;
}

export function FeatureCard({ title, description, icon, index }: FeatureCardProps) {

    const IconName = icon as keyof typeof LucideIcons;
    const Icon = LucideIcons[IconName] as LucideIcons.LucideIcon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
        >
            <Card className="h-full bg-card/50 border-border/50 group overflow-hidden flex flex-col gap-0 py-0 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-5px_rgba(145,80,226,0.3)]">
                <CardHeader className="pt-6 pb-4 flex flex-row items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shrink-0">
                        {Icon && <Icon size={20} />}
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground leading-tight">
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        {description}
                    </p>
                </CardContent>
            </Card>
        </motion.div>
    );
};


