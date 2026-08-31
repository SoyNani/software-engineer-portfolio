type TechIconProps = {
  id: string
  color?: string
  size?: number
}

/** Iconos SVG minimalistas estilo HUD (stroke plateado / accent) */
export default function TechIcon({ id, color = '#c0c0c8', size = 28 }: TechIconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (id) {
    case 'typescript':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      )
    case 'javascript':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M10 9v7c0 1-.5 2-2 2M14 9c2 0 3 1 3 2.5S16 14 14 14h-1v4" />
        </svg>
      )
    case 'dart':
      return (
        <svg {...common}>
          <path d="M4 12l8-8 8 8-8 8-8-8z" />
          <path d="M12 4v16" />
        </svg>
      )
    case 'java':
      return (
        <svg {...common}>
          <path d="M8 18c2 1.5 6 1.5 8 0" />
          <path d="M7 15c2.5 1.2 7.5 1.2 10 0" />
          <path d="M12 4c-1 2-3 3-3 5 0 2 1.5 3 3 3s3-1 3-3c0-2-2-3-3-5z" />
        </svg>
      )
    case 'sql':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
          <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      )
    case 'react':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2" fill={color} stroke="none" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      )
    case 'nextjs':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9 8v8M9 8h3.5a3 3 0 010 6H9" />
          <path d="M15 16V8l3 8" />
        </svg>
      )
    case 'flutter':
      return (
        <svg {...common}>
          <path d="M14 3L4 13l3 3 13-13" />
          <path d="M11 16l3 3 6-6-3-3" />
          <path d="M14 19l3 3 3-3" />
        </svg>
      )
    case 'aws':
      return (
        <svg {...common}>
          <path d="M5 16c2 2 5 3 7 3s5-1 7-3" />
          <path d="M8 8l4-4 4 4M12 4v9" />
        </svg>
      )
    case 'tailwind':
      return (
        <svg {...common}>
          <path d="M3 12c2-4 4-6 7-6 2 0 3 1 4 2 1-1 2-2 4-2 3 0 5 2 7 6-2 4-4 6-7 6-2 0-3-1-4-2-1 1-2 2-4 2-3 0-5-2-7-6z" />
        </svg>
      )
    case 'figma':
      return (
        <svg {...common}>
          <circle cx="15" cy="12" r="3" />
          <path d="M9 21a3 3 0 003-3v-3H9a3 3 0 000 6z" />
          <path d="M9 12a3 3 0 010-6h3v6H9z" />
          <path d="M12 3h3a3 3 0 010 6h-3V3z" />
          <path d="M9 3a3 3 0 000 6h3V3H9z" />
        </svg>
      )
    case 'git':
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="M6 8v4a4 4 0 004 4h2M18 8v2a4 4 0 01-4 4h-2" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
      )
  }
}
