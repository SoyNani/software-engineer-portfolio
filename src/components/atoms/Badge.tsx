import { LucideIcon } from "lucide-react";

import { BadgeProps } from "@/types/components.types";

export const Badge = ({
    icon: Icon,
    children,
    variant = "default",
    className = "",
}: BadgeProps) => {
    return (
        <span
            className={`inline-flex items-center gap-2 text-xs font-medium border px-3 py-1.5 rounded-full
        ${variant === "mono" ? "font-mono" : ""}
        text-primary bg-primary/10 border-primary/20
        ${className}`}
        >
            {Icon && <Icon size={12} />}
            {children}
        </span>
    );
};
