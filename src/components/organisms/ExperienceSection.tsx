"use client";

import { protectedContent } from "@/data/protected.content";
import { SectionHeader } from "../molecules/SectionHeader";
import { ExperienceCard } from "../molecules/ExperienceCard";

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 md:py-32 bg-[#08080B]">
            <div className="container mx-auto px-6 max-w-7xl">
                <SectionHeader
                    tag="Trayectoria"
                    title="Experiencia laboral"
                    highlight="laboral"
                    description="Mi recorrido profesional construyendo soluciones digitales en diferentes industrias y tecnologías."
                />

                <div className="relative mt-12">
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
