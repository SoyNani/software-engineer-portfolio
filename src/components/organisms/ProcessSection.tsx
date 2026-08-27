"use client";

import { SectionHeader } from "../molecules/SectionHeader";
import { ProcessCard } from "../molecules/ProcessCard";
import { processItems } from "@/data/process.content";

export function ProcessSection() {
    return (
        <section id="architecture" className="py-28 md:py-36">
            <div className="container mx-auto px-6 md:px-10 max-w-7xl">
                <SectionHeader
                    tag="Proceso"
                    title="Cómo construyo"
                    highlight="construyo"
                    description="Trabajo con metodologías ágiles, creando código limpio, modular y escalable. Analizo requerimientos desde la lógica de negocio, propongo soluciones viables y colaboro en equipo con comunicación clara para perfiles técnicos y no técnicos."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    {processItems.map((item) => (
                        <ProcessCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
