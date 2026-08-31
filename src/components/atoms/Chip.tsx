import { CHIP_VARIANTS } from '@/lib/styles'

type ChipProps = {
  children: React.ReactNode
  index?: number
  size?: 'sm' | 'md'
}

export default function Chip({ children, index = 0, size = 'md' }: ChipProps) {
  const variant = CHIP_VARIANTS[index % CHIP_VARIANTS.length]
  const sizeClass =
    size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-[11px] px-3 py-1'

  return (
    <span className={`${sizeClass} rounded-full border ${variant}`}>
      {children}
    </span>
  )
}
