"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";
import { ExperienceType } from "@/data/protected.content";

interface ExperienceCardProps {
    experience: ExperienceType;
    index: number;
}

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative pl-8 md:pl-14 pb-14 last:pb-0 group"
        >
            <div className="absolute left-[7px] md:left-[11px] top-2 bottom-0 w-px bg-white/8 group-last:h-6" />
            <div className="absolute left-0 md:left-1 top-1.5 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border border-primary/60 bg-background z-10 flex items-center justify-center">
                <div className={`w-1.5 h-1.5 rounded-full ${experience.isActual ? "bg-primary animate-pulse" : "bg-primary/50"}`} />
            </div>
            <div className="rounded-2xl border border-white/6 bg-white/[0.02] p-6 md:p-8 transition-all duration-400 hover:border-primary/25 hover:bg-white/[0.035]">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div className="space-y-1.5">
                        <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                            {experience.role}
                        </h3>
                        <div className="flex items-center gap-2 text-primary/90 font-medium text-sm">
                            <Building2 size={14} strokeWidth={1.5} />
                            <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/35 text-sm pt-0.5">
                            <MapPin size={13} strokeWidth={1.5} />
                            <span>{experience.location}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2.5 shrink-0">
                        <div className="flex items-center gap-2 text-white/40 text-xs font-medium bg-white/5 px-3 py-1.5 rounded-lg border border-white/6">
                            <Calendar size={12} strokeWidth={1.5} />
                            <span>{experience.period}</span>
                        </div>
                        {experience.isActual && (
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md">
                                Actual
                            </span>
                        )}
                    </div>
                </div>
                <ul className="space-y-3">
                    {experience.achievements.map((achievement: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-white/50">
                            <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-primary/60" />
                            <p className="text-sm md:text-[15px] leading-relaxed font-light">
                                {achievement}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};
