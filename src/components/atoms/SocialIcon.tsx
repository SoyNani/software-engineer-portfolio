import { LucideIcon } from "lucide-react";

interface SocialIconProps {
    href: string;
    icon: LucideIcon;
    label: string;
}

export const SocialIcon = ({ href, icon: Icon, label }: SocialIconProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center size-14 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            aria-label={label}
        >
            <Icon size={24} strokeWidth={1.5} />
        </a>
    );
};
