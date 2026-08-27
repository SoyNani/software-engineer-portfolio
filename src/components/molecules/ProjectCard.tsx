"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { Project } from "@/types/projects.types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    project: Project;
    className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
    const { title, description, tags, demoUrl, githubUrl, isFeatured, category, image } = project;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={cn("group h-full", isFeatured ? "md:col-span-2" : "", className)}
        >
            <div className="h-full rounded-2xl border border-white/6 bg-white/[0.02] overflow-hidden transition-all duration-400 hover:border-primary/25 hover:bg-white/[0.035] flex flex-col">
                <div className="aspect-video md:aspect-auto md:h-64 bg-[#121216] relative overflow-hidden">
                    {image ? (
                        <>
                            <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        </>
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-white/10 font-mono text-sm tracking-widest uppercase">
                            {title}
                        </div>
                    )}
                    {category && (
                        <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-md text-[10px] uppercase font-semibold tracking-wider">
                            <Star size={11} fill="currentColor" />
                            {category}
                        </span>
                    )}
                </div>

                <div className="p-7 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight text-white group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <p className="text-white/45 leading-relaxed mb-5 text-[15px] font-light flex-1">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs text-white/50 bg-white/[0.04] border border-white/6 px-2.5 py-1 rounded-md"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-5">
                        {demoUrl && (
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
                            >
                                Ver demo
                                <ExternalLink size={14} />
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/40 hover:text-white transition-colors"
                            >
                                Código
                                <Github size={14} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
