export interface CertificateItem {
  title: string
  issuer: string
  period: string
  status?: 'completed' | 'in-progress'
  url?: string
}

export const certificates: CertificateItem[] = [
  {
    title: 'Certificado de Gestión de Proyectos de Google',
    issuer: 'Google (Coursera)',
    period: 'En progreso',
    status: 'in-progress',
  },
  {
    title: 'Continuing Education Certificate in Leadership',
    issuer: 'MIU City University Miami + UNIR',
    period: 'En progreso',
    status: 'in-progress',
  },
  {
    title: 'Bootcamp en Inteligencia Artificial',
    issuer: 'MinTIC Colombia',
    period: 'Nov 2024 – Dic 2024',
    status: 'completed',
  },
  {
    title: 'Cómo resolver problemas y tomar decisiones con eficacia',
    issuer: 'University of California, Irvine (Coursera)',
    period: 'Finalizado',
    status: 'completed',
  },
]

export const recognition = {
  title: 'Premio Mérito Ciudadano José Elías Puyana',
  institution: 'Gobierno de Floridablanca (2023)',
  description:
    'Reconocimiento otorgado por el Gobierno de Floridablanca (2023) por liderazgo en iniciativas tecnológicas con jóvenes como Vicepresidenta de la Plataforma Municipal de Juventudes.',
}
