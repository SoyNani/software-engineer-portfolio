'use client'

import { useState } from 'react'
import SectionLabel from '@/components/atoms/SectionLabel'
import CertificateCard from '@/components/molecules/CertificateCard'
import CertificatePreview from '@/components/molecules/CertificatePreview'
import {
  certificates,
  recognition,
  type CertificateItem,
} from '@/data/certificates.content'
import { sans } from '@/lib/styles'

export default function CertificatesSection() {
  const [preview, setPreview] = useState<CertificateItem | null>(null)

  return (
    <section className="section" id="certificates">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <SectionLabel accent="yellow">05 // Certificados</SectionLabel>
          <h2
            className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white"
            style={sans}
          >
            Certificados
          </h2>
        </div>
      </div>

      <div className="cert-list">
        {certificates.map((c, i) => (
          <CertificateCard
            key={c.id}
            item={c}
            index={i}
            onPreview={setPreview}
          />
        ))}
      </div>

      {recognition && (
        <div className="cert-recognition mt-8">
          <div className="cert-recognition-corner cert-recognition-corner--tl" />
          <div className="cert-recognition-corner cert-recognition-corner--tr" />
          <div className="cert-recognition-corner cert-recognition-corner--bl" />
          <div className="cert-recognition-corner cert-recognition-corner--br" />
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase accent-yellow">
            Reconocimiento
          </p>
          <p className="mt-2 text-base md:text-lg font-semibold text-white" style={sans}>
            {recognition.title}
          </p>
          <p className="mt-1 text-xs text-[#8a8a94]">{recognition.institution}</p>
          <p className="mt-3 text-sm text-[#bdc4d4] font-light leading-relaxed" style={sans}>
            {recognition.description}
          </p>
        </div>
      )}

      <CertificatePreview item={preview} onClose={() => setPreview(null)} />
    </section>
  )
}
