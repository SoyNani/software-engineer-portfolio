import type { CertificateItem } from '@/data/certificates.content'

type CertificateCardProps = {
  item: CertificateItem
}

export default function CertificateCard({ item }: CertificateCardProps) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/3 px-4 py-4 card-glow">
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-medium text-white leading-snug">{item.title}</p>
        {item.status === 'in-progress' && (
          <span className="shrink-0 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-[#ffd166]/40 text-[#ffd166]">
            En curso
          </span>
        )}
      </div>
      <p className="text-xs text-[#bdc4d4] mt-1">{item.issuer}</p>
      <p className="text-[10px] font-mono text-[#6a6a78] mt-2 uppercase">
        {item.period}
      </p>
    </div>
  )
}
