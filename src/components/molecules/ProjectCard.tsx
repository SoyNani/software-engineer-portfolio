"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardAction,
} from "@/components/ui/card";
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
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className={cn(
                "group h-full",
                isFeatured ? "md:col-span-2" : "",
                className
            )}
        >
            <Card className="h-full bg-[#0D0D12] border-white/5 rounded-3xl overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-5px_rgba(145,80,226,0.3)] group-hover:shadow-[0_0_30px_-5px_rgba(145,80,226,0.3)] flex flex-col p-0 gap-0">
                {/* Visual Header / Image Area */}
                <CardHeader className="p-0 space-y-0">
                    <div className="aspect-video md:aspect-auto md:h-72 bg-[#16161D] relative overflow-hidden flex items-center justify-center">
                        {image ? (
                            <>
                                <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                                <div className="text-white/10 font-mono text-sm tracking-widest uppercase select-none z-10">
                                    {title}
                                </div>
                            </>
                        ) : (
                            <div className="text-white/10 font-mono text-sm tracking-widest uppercase select-none">
                                {title}
                            </div>
                        )}

                        {category && (
                            <CardAction className="absolute top-4 right-4 p-0 z-20">
                                <Badge
                                    variant="mono"
                                    className="bg-primary/20 text-primary border-primary/30 backdrop-blur-md gap-1.5 px-3 py-1.5 h-auto text-[10px] uppercase font-bold tracking-wider"
                                >
                                    <Star size={12} fill="currentColor" />
                                    {category}
                                </Badge>
                            </CardAction>
                        )}
                    </div>
                </CardHeader>

                <CardContent className="p-8 md:p-10 pb-0 md:pb-0 flex-1 flex flex-col">
                    <CardTitle className="text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                        {title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl text-[15px]">
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag) => (
                            <Badge
                                key={tag}
                                variant="outline"
                                className="bg-[#1C1C21] text-white/70 border-white/5 hover:bg-[#25252b] hover:text-white transition-colors"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>

                <CardFooter className="p-8 md:p-10 pt-0 mt-[2px] flex items-center gap-6">
                    {demoUrl && (
                        <Button
                            variant="link"
                            size="xs"
                            className="p-0 h-auto text-primary font-bold text-[14px] hover:no-underline group/link"
                            asChild
                        >
                            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                                Ver demo
                                <ExternalLink size={16} className="ml-1 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                            </a>
                        </Button>
                    )}
                    {githubUrl && (
                        <Button
                            variant="link"
                            size="xs"
                            className="p-0 h-auto text-foreground/50 font-bold text-[14px] hover:text-foreground hover:no-underline"
                            asChild
                        >
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                                Código
                                <Github size={16} className="ml-1.5" />
                            </a>
                        </Button>
                    )}
                </CardFooter>

                <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
        </motion.div>
    );
}
