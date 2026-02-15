"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { EducationType } from "@/data/protected.content";
import { Card, CardContent } from "@/components/ui/card";

interface EducationCardProps {
    item: EducationType;
    index: number;
}

export const EducationCard = ({ item, index }: EducationCardProps) => {
    const isDegree = item.type === "degree";

    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card className="bg-[#111115] border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-5px_rgba(145,80,226,0.3)] group">
                <CardContent className="p-6 flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center ${isDegree ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-[#4f48e410] text-[#4f48e4] border border-[#4f48e420]'} group-hover:scale-105 transition-transform duration-300`}>
                        {isDegree ? <GraduationCap size={28} /> : <Award size={28} />}
                    </div>

                    <div className="space-y-1">
                        <h3 className="text-lg font-bold text-white leading-tight">
                            {item.degree}
                        </h3>
                        <p className="text-muted-foreground text-sm font-medium">
                            {item.institution}
                        </p>
                        <div className="pt-1">
                            <span className="inline-flex px-3 py-1 rounded-lg bg-secondary/30 border border-border/30 text-[11px] font-bold text-muted-foreground/80 uppercase tracking-wider">
                                {item.period}
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};
