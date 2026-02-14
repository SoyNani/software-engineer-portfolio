import { Layers, IterationCcw, Brain, Rocket } from "lucide-react";
import { ProcessItem } from "../types/process.types";

export const processItems: ProcessItem[] = [
    {
        id: "modular-architecture",
        title: "Arquitectura modular",
        description: "Componentes reutilizables, separación de responsabilidades y código que escala con el equipo.",
        icon: Layers
    },
    {
        id: "iterative-development",
        title: "Desarrollo iterativo",
        description: "Ciclos cortos de feedback, PRs claros y CI/CD automatizado para entregar valor rápido.",
        icon: IterationCcw
    },
    {
        id: "ai-tooling",
        title: "IA como herramienta",
        description: "Integro IA para acelerar desarrollo, generar contenido y optimizar decisiones basadas en datos.",
        icon: Brain
    },
    {
        id: "scalability-first",
        title: "Escalabilidad primero",
        description: "Diseño pensando en crecimiento: performance, caching, lazy loading y optimización continua.",
        icon: Rocket
    }
];
