'use client'

import { Eye, Download, FileBadge } from 'lucide-react'
import type { CertificateItem } from '@/data/certificates.content'
import { sans } from '@/lib/styles'

type CertificateCardProps = {
  item: CertificateItem
  index: number
  onPreview: (item: CertificateItem) => void
}

export default function CertificateCard({ item, index, onPreview }: CertificateCardProps) {
  const canPreview = Boolean(item.previewUrl)
  const canDownload = Boolean(item.downloadUrl)
  const isProgress = item.status === 'in-progress'

  return (
    <article className="cert-row">
      <div className="cert-row-index font-mono">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="cert-row-icon" aria-hidden>
        <FileBadge size={18} strokeWidth={1.4} />
      </div>

      <div className="cert-row-body min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-sm font-medium text-white leading-snug" style={sans}>
            {item.title}
          </h3>
          {isProgress && (
            <span className="cert-badge cert-badge--progress">En curso</span>
          )}
          {item.status === 'completed' && (
            <span className="cert-badge cert-badge--done">Completado</span>
          )}
        </div>
        <p className="mt-1 text-xs text-[#a8b0c4]">{item.issuer}</p>
        <p className="mt-1 font-mono text-[10px] tracking-wider text-[#5a5a64] uppercase">
          {item.period}
          {item.credentialId ? ` · ID ${item.credentialId}` : ''}
        </p>
      </div>

      <div className="cert-row-actions">
        <button
          type="button"
          className="cert-action"
          onClick={() => onPreview(item)}
          title={canPreview ? 'Vista previa' : 'Ver detalle'}
        >
          <Eye size={14} strokeWidth={1.5} />
          <span className="hidden sm:inline">Preview</span>
        </button>

        {canDownload ? (
          <a
            href={item.downloadUrl}
            download={item.fileName || true}
            className="cert-action cert-action--primary"
            title="Descargar certificado"
          >
            <Download size={14} strokeWidth={1.5} />
            <span className="hidden sm:inline">PDF</span>
          </a>
        ) : (
          <span
            className="cert-action cert-action--disabled"
            title="Archivo aún no disponible"
          >
            <Download size={14} strokeWidth={1.5} />
            <span className="hidden sm:inline">PDF</span>
          </span>
        )}
      </div>
    </article>
  )
}
