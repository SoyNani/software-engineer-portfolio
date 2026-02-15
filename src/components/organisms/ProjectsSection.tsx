"use client";

import { SectionHeader } from "../molecules/SectionHeader";
import { ProjectCard } from "../molecules/ProjectCard";
import { projects } from "@/data/projects.content";

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 md:py-32 bg-[#08080B]">
            <div className="container mx-auto px-6 max-w-7xl">
                <SectionHeader
                    tag="Proyectos"
                    title="Productos que he construido"
                    highlight="construido"
                    description="Una selección de proyectos que reflejan mi enfoque en producto, diseño y tecnología."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
