"use client";

import { SectionHeader } from "../molecules/SectionHeader";
import { ProcessCard } from "../molecules/ProcessCard";
import { processItems } from "@/data/process.content";

export function ProcessSection() {
    return (
        <section id="process" className="py-24 md:py-32 bg-[#08080B]">
            <div className="container mx-auto px-6">
                <SectionHeader
                    tag="Proceso"
                    title="Cómo construyo"
                    highlight="construyo"
                    description="Mi enfoque combina pensamiento de producto con ingeniería de calidad."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {processItems.map((item) => (
                        <ProcessCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
