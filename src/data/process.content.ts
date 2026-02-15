import { Layers, IterationCcw, Brain, Rocket } from "lucide-react";
import { ProcessItem } from "../types/process.types";

export const processItems: ProcessItem[] = [
    {
        id: "modular-architecture",
        title: "Desarrollo limpio y modular",
        description: "Aplico principios de arquitectura y buenas prácticas para crear código mantenible, escalable y basado en componentes reutilizables.",
        icon: Layers
    },
    {
        id: "iterative-development",
        title: "Comunicación & Enfoque Estratégico",
        description: "Analizo requerimientos con visión de negocio, propongo alternativas técnicas y explico conceptos complejos de forma clara para distintos públicos",
        icon: IterationCcw
    },
    {
        id: "ai-tooling",
        title: "Metodologías Ágiles & Trabajo en Equipo",
        description: "Trabajo en entornos colaborativos con enfoque iterativo, gestionando versiones y ramas de forma organizada para garantizar estabilidad y trazabilidad.",
        icon: Brain
    },
    {
        id: "scalability-first",
        title: "Cloud & Arquitectura de Despliegue",
        description: "Diseño soluciones preparadas para producción, considerando infraestructura, rendimiento y escalabilidad desde etapas tempranas.",
        icon: Rocket
    }
];
