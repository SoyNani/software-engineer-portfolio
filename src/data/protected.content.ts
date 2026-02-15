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
            achievements: [
                "Lideré la migración del sitio web corporativo de .NET a Next.js implementando arquitectura de micro-frontends con Tailwind CSS, mejorando la modularidad y escalabilidad del proyecto.",
                "Diseñé y desarrollé el sistema de diseño completo de la nueva plataforma en Figma, estableciendo guías de estilo y componentes reutilizables para garantizar consistencia visual.",
                "Desarrollo de aplicaciones móviles multiplataforma en Flutter, participando activamente en la creación y mantenimiento de features."
            ]
        },
        {
            company: "Freelance – Desarrollo Web PHP",
            role: "Desarrolladora Web",
            period: "Septiembre 2025 - Actualidad",
            location: "Colombia (Remoto)",
            isActual: true,
            achievements: [
                "Desarrollo, mantenimiento y evolución de sitios web en PHP y WordPress, incluyendo personalización de funcionalidades, optimización de rendimiento y corrección de incidencias.",
                "Administración y mantenimiento de un sitio WordPress alojado en AWS, gestionando configuraciones de servidor, despliegues y respaldos.",
                "Implementación de bases de datos relacionales en MySQL, manejo de consultas SQL, relaciones entre entidades y optimización de datos.",
                "Integración frontend con HTML, CSS, JavaScript y Bootstrap responsivo."
            ]
        },
        {
            company: "Pragma S.A",
            role: "Aprendiz de Desarrollo",
            period: "Nov 2024– Mayo 2025",
            location: "Colombia (Remoto)",
            isActual: false,
            achievements: [
                "Desarrollé aplicaciones web utilizando React, TypeScript y Java en entornos ágiles bajo metodología Scrum.",
                "Implementé infraestructura cloud en AWS (CloudFront, S3, Lambda, IAM) para optimizar el despliegue y rendimiento de aplicaciones.",
                "Gestioné control de versiones con Git y desarrollé pruebas unitarias para garantizar calidad del código.",
                "Colaboré en equipos multidisciplinarios participando activamente en ceremonias Scrum (dailys, retrospectivas,planificaciones)."
            ]
        },
        {
            company: "Armagica",
            role: "Desarrolladora de Software",
            period: "Abr 2023– Nov 2024",
            location: "Colombia (Remoto)",
            isActual: false,
            achievements: [
                "Implementé experiencias interactivas de Realidad Aumentada utilizando JavaScript, MindAR y Three.js para proyectos innovadores.",
                "Optimicé módulos de rendimiento para aplicaciones de Realidad Virtual y Aumentada, mejorando la experiencia de usuario.",
                "Desarrollé soluciones con Unity y WebXR para crear experiencias inmersivas multiplataforma."
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
