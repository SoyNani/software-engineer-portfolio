export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  description?: string
  achievements: string[]
  isActual?: boolean
}

export const experience: ExperienceItem[] = [
  {
    company: 'Baguer S.A.',
    role: 'Desarrolladora Junior',
    period: 'Junio 2025 - Actualidad',
    location: 'Colombia',
    isActual: true,
    description:
      'Enfoque principal en aplicaciones móviles multiplataforma con Flutter, arquitectura limpia y código mantenible.',
    achievements: [
      'Desarrollo de apps móviles multiplataforma en Flutter aplicando arquitectura limpia y modular, principios SOLID y patrones de diseño, lo que facilitó el mantenimiento y la escalabilidad del producto.',
      'Entrega de features móviles end-to-end con separación clara de capas (UI, dominio, datos), reduciendo acoplamiento y acelerando la incorporación de nuevas funcionalidades.',
      'Migración del sitio corporativo de .NET a Next.js con micro-frontends y Tailwind, logrando una base más modular y preparada para escalar.',
      'Definición del sistema de diseño en Figma con componentes reutilizables, alineando diseño y desarrollo y mejorando la consistencia visual del producto.',
    ],
  },
  {
    company: 'Pragma S.A',
    role: 'Aprendiz de Desarrollo',
    period: 'Nov 2024 – Mayo 2025',
    location: 'Colombia (Remoto)',
    isActual: false,
    achievements: [
      'Entrega de módulos web en React, TypeScript y Java dentro de sprints Scrum, con criterios de aceptación claros y entregas a tiempo.',
      'Despliegues más rápidos y estables al implementar infraestructura en AWS (CloudFront, S3, Lambda, IAM) orientada a rendimiento y seguridad.',
      'Mayor confiabilidad del código mediante Git flow y pruebas unitarias que atraparon regresiones antes de producción.',
      'Colaboración efectiva en equipo multidisciplinario (dailys, planificaciones y retrospectivas), mejorando la sincronización y la calidad de las entregas.',
    ],
  },
  {
    company: 'Armagica',
    role: 'Desarrolladora de Software',
    period: 'Abr 2023 – Nov 2024',
    location: 'Colombia (Remoto)',
    isActual: false,
    achievements: [
      'Experiencias de Realidad Aumentada interactivas con JavaScript, MindAR y Three.js que elevan el engagement en proyectos innovadores.',
      'Optimización de módulos de rendimiento en VR/AR, logrando una experiencia de usuario más fluida y estable.',
      'Soluciones inmersivas multiplataforma con Unity y WebXR, ampliando el alcance de las experiencias más allá de un solo dispositivo.',
    ],
  },
]
