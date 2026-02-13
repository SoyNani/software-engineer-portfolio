import { LucideIcon } from "lucide-react";

export interface BadgeProps {
    icon?: LucideIcon;
    children: React.ReactNode;
    variant?: "default" | "mono";
    className?: string;
}

export interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}
