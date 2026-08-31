type GradientButtonProps = {
  href: string
  children: React.ReactNode
  external?: boolean
}

export default function GradientButton({
  href,
  children,
  external = false,
}: GradientButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-black transition-opacity hover:opacity-90"
      style={{
        background: 'linear-gradient(135deg, #ff6bb5, #9b6dff)',
        padding: '0.55rem 1.15rem',
      }}
    >
      {children}
    </a>
  )
}
