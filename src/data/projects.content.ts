import { Project } from "../types/projects.types";

export const projects: Project[] = [
    {
        id: "saas-dashboard",
        title: "SaaS Dashboard Analytics",
        description: "Plataforma de analytics en tiempo real para startups SaaS. Métricas de MRR, churn y growth con visualizaciones interactivas.",
        tags: ["React", "TypeScript", "Recharts", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",
        isFeatured: true,
        category: "Destacado"
    },
    {
        id: "ecommerce-headless",
        title: "E-commerce Headless",
        description: "Tienda e-commerce con arquitectura headless, checkout optimizado y pasarela de pagos integrada.",
        tags: ["Next.js", "Stripe", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "#",
        isFeatured: false
    },
    {
        id: "workflow-automation",
        title: "Automatización de Workflows",
        description: "Sistema de automatización de procesos internos con IA para optimizar flujos de trabajo repetitivos.",
        tags: ["React", "Node.js", "OpenAI", "AWS"],
        demoUrl: "#",
        githubUrl: "#",
        isFeatured: false
    },
    {
        id: "data-viz-tool",
        title: "Data Visualization Tool",
        description: "Herramienta interactiva de visualización de datos para explorar datasets complejos con filtros dinámicos.",
        tags: ["React", "D3.js", "Python", "FastAPI"],
        demoUrl: "#",
        githubUrl: "#",
        isFeatured: false
    },
    {
        id: "mobile-app-fintech",
        title: "Fintech Mobile App",
        description: "Aplicación móvil para gestión de finanzas personales con integración bancaria y análisis de gastos.",
        tags: ["React Native", "Firebase", "Node.js"],
        demoUrl: "#",
        githubUrl: "#",
        isFeatured: false
    }
];
