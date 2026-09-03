'use client'

import { useEffect } from 'react'
import { X, Download, ExternalLink } from 'lucide-react'
import type { CertificateItem } from '@/data/certificates.content'
import { sans } from '@/lib/styles'

type CertificatePreviewProps = {
  item: CertificateItem | null
  onClose: () => void
}

export default function CertificatePreview({ item, onClose }: CertificatePreviewProps) {
  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [item, onClose])

  if (!item) return null

  const canPreview = Boolean(item.previewUrl)
  const canDownload = Boolean(item.downloadUrl)

  return (
    <div className="cert-modal-overlay" role="dialog" aria-modal="true" aria-label={item.title}>
      <button type="button" className="cert-modal-backdrop" onClick={onClose} aria-label="Cerrar" />

      <div className="cert-modal">
        <div className="cert-modal-corner cert-modal-corner--tl" />
        <div className="cert-modal-corner cert-modal-corner--tr" />
        <div className="cert-modal-corner cert-modal-corner--bl" />
        <div className="cert-modal-corner cert-modal-corner--br" />

        <header className="cert-modal-header">
          <div className="min-w-0">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#8a8a94]">
              PREVIEW // {item.id.toUpperCase()}
            </p>
            <h3 className="mt-1 text-base md:text-lg font-medium text-white truncate" style={sans}>
              {item.title}
            </h3>
            <p className="text-xs text-[#a8b0c4] mt-0.5">{item.issuer}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="cert-modal-close"
            aria-label="Cerrar vista previa"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </header>

        <div className="cert-modal-body">
          {canPreview ? (
            <img
              src={item.previewUrl}
              alt={`Certificado: ${item.title}`}
              className="cert-modal-image"
            />
          ) : (
            <div className="cert-modal-placeholder">
              <div className="cert-modal-placeholder-frame">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#5a5a64] uppercase">
                  {item.verifyUrl ? 'CREDENCIAL DIGITAL' : 'DOCUMENT // LOCKED'}
                </span>
                <p className="mt-3 text-sm text-[#8a92a8] text-center max-w-xs" style={sans}>
                  {item.verifyUrl
                    ? 'Esta credencial está disponible y verificada directamente en la plataforma emisora.'
                    : 'Vista previa no disponible en este momento.'}
                </p>
                {item.verifyUrl && (
                  <a
                    href={item.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 cert-action cert-action--primary inline-flex items-center gap-2"
                  >
                    <ExternalLink size={14} strokeWidth={1.5} />
                    Verificar credencial
                  </a>
                )}
                <p className="mt-4 font-mono text-[10px] text-[#6a6a78]">
                  {item.period} · {item.status === 'completed' ? 'COMPLETED' : 'IN PROGRESS'}
                </p>
              </div>
            </div>
          )}
        </div>

        <footer className="cert-modal-footer">
          {canDownload && (
            <a
              href={item.downloadUrl}
              download={item.fileName || true}
              className="cert-action cert-action--primary"
            >
              <Download size={14} strokeWidth={1.5} />
              Descargar
            </a>
          )}
          {item.verifyUrl && (
            <a
              href={item.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-action cert-action--primary"
            >
              <ExternalLink size={14} strokeWidth={1.5} />
              Verificar
            </a>
          )}
          {canPreview && item.previewUrl && (
            <a
              href={item.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-action"
            >
              <ExternalLink size={14} strokeWidth={1.5} />
              Abrir
            </a>
          )}
        </footer>
      </div>
    </div>
  )
}
