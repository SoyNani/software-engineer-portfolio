type OutlineButtonProps = {
  href: string
  children: React.ReactNode
  tone?: 'purple' | 'blue'
  external?: boolean
}

export default function OutlineButton({
  href,
  children,
  tone = 'purple',
  external = false,
}: OutlineButtonProps) {
  const styles =
    tone === 'blue'
      ? 'border-[#5b8cff]/50 text-[#a8c4ff]'
      : 'border-[#9b6dff]/50 text-[#c4b0ff] hover:border-[#9b6dff]'

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`inline-flex items-center gap-2 rounded-full border text-sm transition-colors ${styles}`}
      style={{ padding: '0.55rem 1.15rem' }}
    >
      {children}
    </a>
  )
}
