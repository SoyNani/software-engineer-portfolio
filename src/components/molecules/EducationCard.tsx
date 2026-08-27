"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { EducationType } from "@/data/protected.content";

interface EducationCardProps {
    item: EducationType;
    index: number;
}

export const EducationCard = ({ item, index }: EducationCardProps) => {
    const isDegree = item.type === "degree";

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
        >
            <div className="rounded-2xl border border-white/6 bg-white/[0.02] p-5 md:p-6 flex items-center gap-5 transition-all duration-300 hover:border-primary/25 hover:bg-white/[0.035]">
                <div className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center ${isDegree ? "bg-primary/10 text-primary border border-primary/15" : "bg-white/5 text-white/60 border border-white/8"}`}>
                    {isDegree ? <GraduationCap size={22} strokeWidth={1.5} /> : <Award size={22} strokeWidth={1.5} />}
                </div>
                <div className="space-y-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-white leading-snug">
                        {item.degree}
                    </h3>
                    <p className="text-white/40 text-sm font-light truncate">
                        {item.institution}
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-medium tracking-wide text-white/30 uppercase">
                        {item.period}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};
