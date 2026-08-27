"use client";

import { protectedContent } from "@/data/protected.content";
import { SectionHeader } from "../molecules/SectionHeader";
import { ExperienceCard } from "../molecules/ExperienceCard";

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-28 md:py-36 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,72,228,0.04)_0%,transparent_50%)] pointer-events-none" />
            <div className="container mx-auto px-6 md:px-10 max-w-7xl relative">
                <SectionHeader
                    tag="Trayectoria"
                    title="Experiencia laboral"
                    highlight="laboral"
                    description="Mi recorrido profesional construyendo soluciones digitales en diferentes industrias y tecnologías."
                />

                <div className="relative mt-4">
                    {protectedContent.experience.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            experience={exp}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
