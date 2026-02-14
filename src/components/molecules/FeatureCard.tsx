"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { FeatureCardType } from "@/types/about.types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface FeatureCardProps extends FeatureCardType {
    index: number;
}

export function FeatureCard ({ title, description, icon, index }: FeatureCardProps) {
    // Dynamically get the icon component
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
            <Card className="h-full bg-card/30 border-border/50 card-hover group overflow-hidden flex flex-col gap-0 py-0">
                <CardHeader className="pt-6 pb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2 text-primary group-hover:scale-110 transition-transform duration-300">
                        {Icon && <Icon size={24} />}
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">
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


