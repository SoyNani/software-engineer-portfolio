export interface CertificateItem {
  id: string
  title: string
  issuer: string
  period: string
  status?: 'completed' | 'in-progress'
  /** Vista previa (imagen o página del certificado) */
  previewUrl?: string
  /** Archivo descargable (PDF u otro) */
  downloadUrl?: string
  /** Nombre sugerido al descargar */
  fileName?: string
  /** Código / ID de credencial */
  credentialId?: string
}

/**
 * Añade previewUrl / downloadUrl cuando tengas el PDF o imagen del certificado.
 * Ejemplo:
 *   previewUrl: '/certificates/ai-bootcamp.png',
 *   downloadUrl: '/certificates/ai-bootcamp.pdf',
 *   fileName: 'Laura-Lopez-Bootcamp-IA-MinTIC.pdf',
 */
export const certificates: CertificateItem[] = [
  {
    id: 'google-pm',
    title: 'Certificado de Gestión de Proyectos de Google',
    issuer: 'Google (Coursera)',
    period: 'En progreso',
    status: 'in-progress',
  },
  {
    id: 'miu-leadership',
    title: 'Continuing Education Certificate in Leadership',
    issuer: 'MIU City University Miami + UNIR',
    period: 'En progreso',
    status: 'in-progress',
  },
  {
    id: 'mintic-ai',
    title: 'Bootcamp en Inteligencia Artificial',
    issuer: 'MinTIC Colombia',
    period: 'Nov 2024 – Dic 2024',
    status: 'completed',
    // previewUrl: '/certificates/mintic-ai.png',
    // downloadUrl: '/certificates/mintic-ai.pdf',
    // fileName: 'Laura-Lopez-Bootcamp-IA-MinTIC.pdf',
  },
  {
    id: 'uci-decision',
    title: 'Cómo resolver problemas y tomar decisiones con eficacia',
    issuer: 'University of California, Irvine (Coursera)',
    period: 'Finalizado',
    status: 'completed',
    // previewUrl: '/certificates/uci-decision.png',
    // downloadUrl: '/certificates/uci-decision.pdf',
  },
]

export const recognition = {
  title: 'Premio Mérito Ciudadano José Elías Puyana',
  institution: 'Gobierno de Floridablanca (2023)',
  description:
    'Reconocimiento otorgado por el Gobierno de Floridablanca (2023) por liderazgo en iniciativas tecnológicas con jóvenes como Vicepresidenta de la Plataforma Municipal de Juventudes.',
}
