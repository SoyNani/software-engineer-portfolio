"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { protectedContent } from "@/data/protected.content";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "../molecules/SectionHeader";
import { EducationCard } from "../molecules/EducationCard";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

export const EducationSection = () => {
    const educationItems = protectedContent.education.filter(item => item.type === "degree");
    const certificationItems = protectedContent.education.filter(item => item.type === "certification");
    const recognition = protectedContent.recognition;

    return (
        <section id="education" className="py-24 md:py-32 bg-[#08080B]">
            <div className="container mx-auto px-6 max-w-7xl">
                <SectionHeader
                    tag="Formación"
                    title="Educación & Certificados"
                    highlight="Certificados"
                    description="Mi trayectoria académica y certificaciones que validan mi expertise técnico y compromiso con el aprendizaje constante."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    {/* Education Column */}
                    <div className="space-y-6">
                        <div className="mb-6">
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                                Educación
                            </span>
                        </div>
                        {educationItems.map((item, index) => (
                            <EducationCard key={`edu-${index}`} item={item} index={index} />
                        ))}
                    </div>

                    {/* Certifications Column */}
                    <div className="space-y-6">
                        <div className="mb-6">
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                                Certificaciones
                            </span>
                        </div>
                        {certificationItems.map((item, index) => (
                            <EducationCard key={`cert-${index}`} item={item} index={index} />
                        ))}
                    </div>
                </div>

                {/* Recognition Section */}
                {recognition && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-16"
                    >
                        <Card className="bg-[#111115] border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-5px_rgba(145,80,226,0.3)] group">
                            <CardContent className="p-8 flex items-start gap-8">
                                <div className="w-16 h-16 rounded-2xl shrink-0 flex items-center justify-center bg-primary/10 text-primary border border-primary/20 group-hover:scale-105 transition-transform duration-300">
                                    <Trophy size={32} />
                                </div>
                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#4f48e4]">
                                        Reconocimiento
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                                        {recognition.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed opacity-80">
                                        {recognition.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
