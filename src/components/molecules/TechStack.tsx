import { Badge } from "../atoms/Badge";

interface TechStackProps {
    technologies: string[];
}

/**
 * TechStack molecule - displays a labeled list of technology badges
 * @param technologies - Array of technology names
 */
export function TechStack({ technologies }: TechStackProps) {
    return (
        <div className="mt-20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
            <h3 className="text-[10px] font-mono tracking-widest text-muted-foreground/70 uppercase mb-2">
                Stack Tecnológico
            </h3>
            <div className="flex flex-wrap gap-2.5">
                {technologies.map((tech) => (
                    <Badge
                        key={tech}
                        className="text-[13px] font-medium py-2 px-5 bg-[#1C1C21] text-white border-none hover:bg-[#25252b] transition-colors"
                    >
                        {tech}
                    </Badge>
                ))}
            </div>
        </div>
    );
};
