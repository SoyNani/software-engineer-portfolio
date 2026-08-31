type FeatureCardProps = {
  title: string
  description: string
  accent: string
}

export default function FeatureCard({
  title,
  description,
  accent,
}: FeatureCardProps) {
  return (
    <div className={`card-glow rounded-xl p-4 border-l-2 ${accent}`}>
      <h3 className="text-sm font-semibold text-white/90">{title}</h3>
      <p className="mt-1.5 text-xs text-[#bdc4d4] font-light leading-relaxed">
        {description}
      </p>
    </div>
  )
}
