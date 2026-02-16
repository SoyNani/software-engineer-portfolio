import { Project } from "../types/projects.types";

export const projects: Project[] = [
    {
        id: "saas-dashboard",
        title: "Automeli-insight",
        description: "Un dashboard que simula cómo funcionaría una herramienta para vendedores que hacen dropshipping.",
        tags: ["React", "TypeScript", "Recharts", "Fake Store API", "Atomic Design"],
        demoUrl: "https://insight-demo-six.vercel.app/dashboard",
        githubUrl: "https://github.com/SoyNani/AM-Insight-demo",
        image: "https://connection-with-nature.s3.us-east-1.amazonaws.com/automeli-insight.png",
        isFeatured: true,
        category: "Destacado"
    },
    {
        id: "ecommerce-headless",
        title: "Proyecto de Migración ERP",
        description: "Proyecto de modernización del ERP corporativo QUAC mediante la migración de una arquitectura monolítica hacia un ecosistema basado en micro frontends.",
        tags: ["Next.js", "Micro-fronts", "Tailwind CSS", "Modular Architecture", "PostMessage API", "Redux Toolkit"],
        // demoUrl: "#",
        githubUrl: "https://docs.google.com/document/d/14xbya4I4IAjP1DYbSlLezp0hG_PCEJcnWNc04dygpio/edit?tab=t.0",
        image: "https://connection-with-nature.s3.us-east-1.amazonaws.com/WhatsApp+Image+2026-02-14+at+11.33.29+PM.jpeg",
        isFeatured: false
    },
    // {
    //     id: "workflow-automation",
    //     title: "Automatización de Workflows",
    //     description: "Sistema de automatización de procesos internos con IA para optimizar flujos de trabajo repetitivos.",
    //     tags: ["React", "Node.js", "OpenAI", "AWS"],
    //     demoUrl: "#",
    //     githubUrl: "#",
    //     isFeatured: false
    // },
    // {
    //     id: "data-viz-tool",
    //     title: "Data Visualization Tool",
    //     description: "Herramienta interactiva de visualización de datos para explorar datasets complejos con filtros dinámicos.",
    //     tags: ["React", "D3.js", "Python", "FastAPI"],
    //     demoUrl: "#",
    //     githubUrl: "#",
    //     isFeatured: false
    // },
    // {
    //     id: "mobile-app-fintech",
    //     title: "Fintech Mobile App",
    //     description: "Aplicación móvil para gestión de finanzas personales con integración bancaria y análisis de gastos.",
    //     tags: ["React Native", "Firebase", "Node.js"],
    //     demoUrl: "#",
    //     githubUrl: "#",
    //     isFeatured: false
    // }
];
