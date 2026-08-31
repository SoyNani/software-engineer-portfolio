import SectionLabel from '@/components/atoms/SectionLabel'
import GradientButton from '@/components/atoms/GradientButton'
import OutlineButton from '@/components/atoms/OutlineButton'
import { sans } from '@/lib/styles'

export default function ContactSection() {
  const email = process.env.NEXT_PUBLIC_EMAIL

  return (
    <div className="section-band section-band--contact">
      <section
        className="section"
        id="contact"
        style={{
          minHeight: '45vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <div className="w-full max-w-xl">
          <SectionLabel accent="pink">06 // Señal</SectionLabel>
          <h2
            className="mt-4 text-[clamp(2rem,6vw,3.5rem)] font-semibold tracking-tight text-white leading-tight"
            style={sans}
          >
            Construyamos algo
            <br />
            <span className="bg-linear-to-r from-[#ff6bb5] via-[#9b6dff] to-[#5b8cff] bg-clip-text text-transparent">
              juntos
            </span>
          </h2>
          <p className="mt-4 text-[#bdc4d4] font-light max-w-md mx-auto text-sm md:text-base">
            Abierta a roles, colaboraciones y proyectos con impacto.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <GradientButton
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              external
            >
              Email
            </GradientButton>
            <OutlineButton
              href="https://www.linkedin.com/in/laura-daniela-lópez-jiménez"
              external
            >
              LinkedIn
            </OutlineButton>
            <OutlineButton href="https://github.com/SoyNani" tone="blue" external>
              GitHub
            </OutlineButton>
          </div>
        </div>
      </section>
    </div>
  )
}
