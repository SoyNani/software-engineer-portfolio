import SectionLabel from '@/components/atoms/SectionLabel'
import CertificateCard from '@/components/molecules/CertificateCard'
import { certificates, recognition } from '@/data/certificates.content'
import { sans } from '@/lib/styles'

export default function CertificatesSection() {
  return (
    <section className="section" id="certificates">
      <SectionLabel accent="yellow">05 // Credenciales</SectionLabel>
      <h2
        className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-white"
        style={sans}
      >
        Certificados
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {certificates.map((c) => (
          <CertificateCard key={c.title + c.issuer} item={c} />
        ))}
      </div>

      {recognition && (
        <div className="mt-6 rounded-2xl border border-[#ffd166]/25 bg-white/3 p-5 md:p-6">
          <p className="font-mono text-[10px] tracking-widest uppercase accent-yellow">
            Reconocimiento
          </p>
          <p className="mt-2 text-base md:text-lg font-semibold text-white">
            {recognition.title}
          </p>
          <p className="mt-1 text-xs text-[#8a8a94]">{recognition.institution}</p>
          <p className="mt-2 text-sm text-[#bdc4d4] font-light">
            {recognition.description}
          </p>
        </div>
      )}
    </section>
  )
}
