import {
  TypescriptOriginal,
  JavascriptOriginal,
  DartOriginal,
  JavaOriginal,
  ReactOriginal,
  NextjsOriginal,
  FlutterOriginal,
  AmazonwebservicesOriginalWordmark,
  TailwindcssOriginal,
  FigmaOriginal,
  GitOriginal,
} from 'devicons-react'

type TechIconProps = {
  id: string
  color?: string
  size?: number
}

/** Iconos de tecnologías usando devicons-react */
export default function TechIcon({ id, color = '#c0c0c8', size = 28 }: TechIconProps) {
  const iconProps = {
    size: size.toString(),
  }

  switch (id) {
    case 'typescript':
      return <TypescriptOriginal {...iconProps} />
    case 'javascript':
      return <JavascriptOriginal {...iconProps} />
    case 'dart':
      return <DartOriginal {...iconProps} />
    case 'java':
      return <JavaOriginal {...iconProps} />
    case 'sql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5}>
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
          <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      )
    case 'react':
      return <ReactOriginal {...iconProps} />
    case 'nextjs':
      return <NextjsOriginal {...iconProps} />
    case 'flutter':
      return <FlutterOriginal {...iconProps} />
    case 'aws':
      return <AmazonwebservicesOriginalWordmark {...iconProps} />
    case 'tailwind':
      return <TailwindcssOriginal {...iconProps} />
    case 'figma':
      return <FigmaOriginal {...iconProps} />
    case 'git':
      return <GitOriginal {...iconProps} />
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
      )
  }
}
