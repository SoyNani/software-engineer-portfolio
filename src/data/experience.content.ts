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
      'Desarrollo de apps móviles multiplataforma en Flutter aplicando arquitectura limpia, SOLID y patrones de diseño.',
      'Entrego features móviles end-to-end, desde el levantamiento de requerimientos hasta el despliegue en iOS y Android, incluyendo persistencia segura e integraciones nativas.',
      'Diseñé el sistema de diseño completo en Figma; participé en la migración del sitio corporativo de .NET a Next.js con arquitectura de micro-frontends',
      'Desarrollo e-commerce en Vue.js con despliegues automatizados (PM2, GitHub Actions)',
    ],
  },
  {
    company: 'Pragma S.A',
    role: 'Aprendiz de Desarrollo',
    period: 'Nov 2024 – Mayo 2025',
    location: 'Colombia (Remoto)',
    isActual: false,
    achievements: [
      'Desarrollé apps web con React, TypeScript y Java bajo metodología Scrum.',
      'Despliegues más rápidos y estables al implementar infraestructura en AWS (CloudFront, S3, Lambda, IAM) orientada a rendimiento y seguridad.',
      'Aseguré calidad con pruebas unitarias y control de versiones en Git',
    ],
  },
  {
    company: 'Armagica',
    role: 'Desarrolladora de Software',
    period: 'Abr 2023 – Nov 2024',
    location: 'Colombia (Remoto)',
    isActual: false,
    achievements: [
      'Construí experiencias de Realidad Aumentada con JavaScript, MindAR y Three.js',
      'Optimicé rendimiento en apps VR/AR y desarrollé con Unity + WebXR multiplataforma',
    ],
  },
]
