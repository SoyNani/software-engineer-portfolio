export interface ExperienceType {
    company: string;
    role: string;
    period: string;
    location: string;
    description?: string;
    achievements: string[];
    isActual?: boolean;
}

export interface EducationType {
    institution: string;
    degree: string;
    period: string;
    type: "degree" | "certification";
}

export const protectedContent = {
    experience: [
        {
            company: "Baguer S.A.",
            role: "Desarrolladora Junior",
            period: "Junio 2025 - Actualidad",
            location: "Colombia",
            isActual: true,
            description:
                "Enfoque principal en aplicaciones móviles multiplataforma con Flutter, arquitectura limpia y código mantenible.",
            achievements: [
                "Desarrollo de apps móviles multiplataforma en Flutter aplicando arquitectura limpia y modular, principios SOLID y patrones de diseño, lo que facilitó el mantenimiento y la escalabilidad del producto.",
                "Entrega de features móviles end-to-end con separación clara de capas (UI, dominio, datos), reduciendo acoplamiento y acelerando la incorporación de nuevas funcionalidades.",
                "Migración del sitio corporativo de .NET a Next.js con micro-frontends y Tailwind, logrando una base más modular y preparada para escalar.",
                "Definición del sistema de diseño en Figma con componentes reutilizables, alineando diseño y desarrollo y mejorando la consistencia visual del producto."
            ]
        },
        {
            company: "Pragma S.A",
            role: "Aprendiz de Desarrollo",
            period: "Nov 2024 – Mayo 2025",
            location: "Colombia (Remoto)",
            isActual: false,
            achievements: [
                "Entrega de módulos web en React, TypeScript y Java dentro de sprints Scrum, con criterios de aceptación claros y entregas a tiempo.",
                "Despliegues más rápidos y estables al implementar infraestructura en AWS (CloudFront, S3, Lambda, IAM) orientada a rendimiento y seguridad.",
                "Mayor confiabilidad del código mediante Git flow y pruebas unitarias que atraparon regresiones antes de producción.",
                "Colaboración efectiva en equipo multidisciplinario (dailys, planificaciones y retrospectivas), mejorando la sincronización y la calidad de las entregas."
            ]
        },
        {
            company: "Armagica",
            role: "Desarrolladora de Software",
            period: "Abr 2023 – Nov 2024",
            location: "Colombia (Remoto)",
            isActual: false,
            achievements: [
                "Experiencias de Realidad Aumentada interactivas con JavaScript, MindAR y Three.js que elevan el engagement en proyectos innovadores.",
                "Optimización de módulos de rendimiento en VR/AR, logrando una experiencia de usuario más fluida y estable.",
                "Soluciones inmersivas multiplataforma con Unity y WebXR, ampliando el alcance de las experiencias más allá de un solo dispositivo."
            ]
        }
    ] as ExperienceType[],
    education: [
        {
            institution: "Universidad Internacional de La Rioja (UNIR)",
            degree: "Ingeniería Informática",
            period: "En progreso",
            type: "degree"
        },
        {
            institution: "Servicio Nacional de Aprendizaje (SENA)",
            degree: "Tecnología en Análisis y Desarrollo de Software",
            period: "2023 - 2025",
            type: "degree"
        },
        {
            institution: "Ministerio de Tecnologías de la Información y Comunicaciones de Colombia (MinTIC)",
            degree: "Bootcamp en Inteligencia Artificial",
            period: "Nov 2024 - Dic 2024",
            type: "degree"
        },
        {
            institution: "MIU City University Miami + UNIR",
            degree: "Continuing Education Certificate in Leadership",
            period: "En progreso",
            type: "certification"
        },
        {
            institution: "University of California, Irvine (Coursera)",
            degree: "Cómo resolver problemas y tomar decisiones con eficacia",
            period: "Finalizado",
            type: "certification"
        },
        {
            institution: "Google (Coursera)",
            degree: "Certificado de Gestión de Proyectos de Google",
            period: "En progreso",
            type: "certification"
        }
    ] as EducationType[],
    recognition: {
        title: "Premio Mérito Ciudadano José Elías Puyana",
        institution: "Gobierno de Floridablanca (2023)",
        description: "Reconocimiento otorgado por el Gobierno de Floridablanca (2023) por liderazgo en iniciativas tecnológicas con jóvenes como Vicepresidenta de la Plataforma Municipal de Juventudes."
    },
    cvUrl: process.env.NEXT_PUBLIC_CV_URL
};
