"use client";

import { aboutContent } from "@/data/about.content";
import { SectionHeader } from "../molecules/SectionHeader";
import { FeatureCard } from "../molecules/FeatureCard";
import { TechStack } from "../molecules/TechStack";

export function AboutSection() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <SectionHeader
                    tag={aboutContent.tag}
                    title={aboutContent.titleLine1 + " " + aboutContent.titleHighlight}
                    description={aboutContent.description}
                    highlight={aboutContent.titleHighlight}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            {/* Subtle background element */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        </section>
    );
};
