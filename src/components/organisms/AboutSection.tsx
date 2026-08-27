"use client";

import { aboutContent } from "@/data/about.content";
import { SectionHeader } from "../molecules/SectionHeader";
import { FeatureCard } from "../molecules/FeatureCard";
import { TechStack } from "../molecules/TechStack";

export function AboutSection() {
    return (
        <section id="about" className="py-28 md:py-36 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-10 max-w-7xl relative z-10">
                <SectionHeader
                    tag={aboutContent.tag}
                    title={aboutContent.titleLine1 + " " + aboutContent.titleHighlight}
                    description={aboutContent.description}
                    highlight={aboutContent.titleHighlight}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {aboutContent.features.map((feature, index) => (
                        <FeatureCard
                            key={feature.title}
                            {...feature}
                            index={index}
                        />
                    ))}
                </div>

                <TechStack technologies={aboutContent.techStack} />
            </div>
        </section>
    );
}
