type SocialLinkProps = {
  href: string
  label: string
  children: React.ReactNode
}

export default function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-[#8a8a94] hover:text-white transition-colors"
      aria-label={label}
    >
      {children}
    </a>
  )
}
