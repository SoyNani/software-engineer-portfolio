import { LucideIcon } from "lucide-react";

export interface FeatureCardType {
    title: string;
    description: string;
    icon: string; 
}

export interface AboutContentType {
    tag: string;
    titleLine1: string;
    titleHighlight: string;
    description: string;
    features: FeatureCardType[];
    techStack: string[];
}
