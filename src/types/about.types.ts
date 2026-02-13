import { LucideIcon } from "lucide-react";

export interface FeatureCardType {
    title: string;
    description: string;
    icon: string; // Icon name string to be mapped or LucideIcon if handled directly
}

export interface AboutContentType {
    tag: string;
    titleLine1: string;
    titleHighlight: string;
    description: string;
    features: FeatureCardType[];
}
