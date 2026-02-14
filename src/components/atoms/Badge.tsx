import { LucideIcon } from "lucide-react";
import { Badge as ShadcnBadge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BadgeProxyProps {
    icon?: LucideIcon;
    children: React.ReactNode;
    variant?: "default" | "secondary" | "destructive" | "outline" | "mono";
    className?: string;
}

export function Badge({
    icon: Icon,
    children,
    variant = "default",
    className = "",
}: BadgeProxyProps) {
    return (
        <ShadcnBadge
            variant={variant}
            className={cn("gap-2 px-3 py-1.5", className)}
        >
            {Icon && <Icon size={12} />}
            {children}
        </ShadcnBadge>
    );
};
