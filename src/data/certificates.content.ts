export interface CertificateItem {
  id: string
  title: string
  issuer: string
  period: string
  status?: 'completed' | 'in-progress'
  previewUrl?: string
  downloadUrl?: string
  fileName?: string
  credentialId?: string
  verifyUrl?: string
}

export const certificates: CertificateItem[] = [
  {
    id: 'gci-world',
    title: 'Global Consumer Intelligence World Program (GCI World)',
    issuer: 'Matsuo-Iwasawa Laboratory, Graduate School of Engineering, University of Tokyo',
    period: 'Finalizado',
    status: 'completed',
    previewUrl: '/certificates/gci-world.png',
    downloadUrl: '/certificates/gci-world.pdf',
    fileName: 'Laura-Lopez-GCI-World.pdf',
  },
  {
    id: 'miu-leadership',
    title: 'Continuing Education Certificate in Leadership',
    issuer: 'MIU City University Miami + UNIR',
    period: 'Finalizado',
    status: 'completed',
  },
  {
    id: 'google-pm',
    title: 'Fundamentos de Gestión de Proyectos',
    issuer: 'Google (Coursera)',
    period: 'Finalizado',
    status: 'completed',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/badge/sJQrvDsNQR2UK7w7DfEdxw',
  },
  {
    id: 'Irvine',
    title: 'Cómo resolver problemas y tomar decisiones con eficacia',
    issuer: 'University of California, Irvine (Coursera)',
    period: 'Finalizado',
    status: 'completed',
    previewUrl: '/certificates/university-of-california.png',
    downloadUrl: '/certificates/university-of-califronia.pdf',
    fileName: 'Laura-Lopez-Irvine.pdf',
  },
]

export const recognition = {
  title: 'Premio Mérito Ciudadano José Elías Puyana',
  institution: 'Gobierno de Floridablanca (2023)',
  description:
    'Reconocimiento otorgado por el Gobierno de Floridablanca (2023) por liderazgo en iniciativas tecnológicas con jóvenes como Vicepresidenta de la Plataforma Municipal de Juventudes.',
}
