type SectionLabelProps = {
  children: React.ReactNode
  accent?: 'pink' | 'purple' | 'blue' | 'orange' | 'yellow'
}

const accentClass = {
  pink: 'accent-pink',
  purple: 'accent-purple',
  blue: 'accent-blue',
  orange: 'accent-orange',
  yellow: 'accent-yellow',
} as const

export default function SectionLabel({
  children,
  accent = 'purple',
}: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-[10px] tracking-[0.25em] uppercase ${accentClass[accent]}`}
    >
      {children}
    </p>
  )
}
