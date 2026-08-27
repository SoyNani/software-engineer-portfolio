"use client";

import { motion } from "framer-motion";
import { protectedContent } from "@/data/protected.content";
import { SectionHeader } from "../molecules/SectionHeader";
import { EducationCard } from "../molecules/EducationCard";
import { Trophy } from "lucide-react";

export const EducationSection = () => {
    const educationItems = protectedContent.education.filter((item) => item.type === "degree");
    const certificationItems = protectedContent.education.filter((item) => item.type === "certification");
    const recognition = protectedContent.recognition;

    return (
        <section id="education" className="py-28 md:py-36">
            <div className="container mx-auto px-6 md:px-10 max-w-7xl">
                <SectionHeader
                    tag="Formación"
                    title="Educación & Certificados"
                    highlight="Certificados"
                    description="Mi trayectoria académica y certificaciones que validan mi expertise técnico y compromiso con el aprendizaje constante."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
                    <div className="space-y-5">
                        <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/30">
                            Educación
                        </span>
                        <div className="space-y-4 mt-4">
                            {educationItems.map((item, index) => (
                                <EducationCard key={`edu-${index}`} item={item} index={index} />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-5">
                        <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/30">
                            Certificaciones
                        </span>
                        <div className="space-y-4 mt-4">
                            {certificationItems.map((item, index) => (
                                <EducationCard key={`cert-${index}`} item={item} index={index} />
                            ))}
                        </div>
                    </div>
                </div>

                {recognition && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-8 md:p-10 flex flex-col sm:flex-row items-start gap-6 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.03]">
                            <div className="w-14 h-14 rounded-xl shrink-0 flex items-center justify-center bg-primary/10 text-primary border border-primary/15">
                                <Trophy size={24} strokeWidth={1.5} />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-primary/80">
                                    Reconocimiento
                                </span>
                                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                                    {recognition.title}
                                </h3>
                                <p className="text-white/45 text-sm md:text-base leading-relaxed font-light">
                                    {recognition.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
