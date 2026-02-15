"use client";

import { motion } from "framer-motion";
import { Badge } from "../atoms/Badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar, MapPin, Play } from "lucide-react";
import { ExperienceType } from "@/data/protected.content";

interface ExperienceCardProps {
    experience: ExperienceType;
    index: number;
}

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12 pb-12 last:pb-0 group"
        >
            <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-border group-last:bottom-auto group-last:h-8" />

            <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-background border-2 border-primary z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>

            <Card className="text-card-foreground gap-6 border shadow-sm bg-[#111115] border-border/50 rounded-2xl p-0 overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-5px_rgba(145,80,226,0.3)] group-hover:shadow-[0_0_30px_-5px_rgba(145,80,226,0.3)]">
                <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start justify-between items-start gap-4 mb-6 w-full">
                        <div className="space-y-1">
                            <h3 className="text-normal md:text-2xl font-bold text-white tracking-tight">
                                {experience.role}
                            </h3>
                            <div className="flex items-center gap-2 text-primary font-medium">
                                <Building2 size={16} />
                                <span>{experience.company}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium pt-1">
                                <MapPin size={14} />
                                <span>{experience.location}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0 md:ml-auto md:text-right">
                            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium bg-secondary/30 px-3 py-1.5 rounded-lg border border-border/30">
                                <Calendar size={14} />
                                <span>{experience.period}</span>
                            </div>
                            {experience.isActual && (
                                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-[10px] uppercase tracking-wider py-1 px-2">
                                    Actual
                                </Badge>
                            )}
                        </div>
                    </div>

                    <ul>
                        {experience.achievements.map((achievement: string, i: number) => (
                            <li key={i} className="flex items-start gap-4 text-muted-foreground group/item">
                                <span className="mt-1.5 shrink-0 text-primary opacity-70 group-hover/item:opacity-100 transition-opacity">
                                    <Play size={10} fill="currentColor" />
                                </span>
                                <p className="text-sm md:text-base leading-relaxed">
                                    {achievement}
                                </p>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </motion.div>
    );
};
