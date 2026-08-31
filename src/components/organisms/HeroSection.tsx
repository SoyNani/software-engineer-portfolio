'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import SectionLabel from '@/components/atoms/SectionLabel'
import GradientButton from '@/components/atoms/GradientButton'
import OutlineButton from '@/components/atoms/OutlineButton'
import SocialLink from '@/components/atoms/SocialLink'
import HeroAvatar from '@/components/molecules/HeroAvatar'
import { sans } from '@/lib/styles'

export default function HeroSection() {
  const email = process.env.NEXT_PUBLIC_EMAIL || 'soyynanii@gmail.com'

  return (
    <section
      className="section"
      style={{
        minHeight: 'calc(100vh - 96px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div className="flex items-start justify-between gap-4 w-full">
        <SectionLabel accent="purple">01 // Inicio</SectionLabel>
        <span className="font-mono text-[10px] tracking-widest text-[#6a6a78]">0014</span>
      </div>

      <div className="hero-grid py-10 md:py-14">
        <div className="w-full">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#a8b0c4] mb-5"
          >
            Software · Producto · Liderazgo
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-[clamp(2.75rem,8vw,5.5rem)] font-semibold tracking-[-0.04em] leading-[0.92] text-white"
            style={sans}
          >
            Laura
            <br />
            <span className="bg-linear-to-r from-[#ff6bb5] via-[#9b6dff] to-[#5b8cff] bg-clip-text text-transparent">
              López
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="max-w-lg text-base md:text-lg text-[#a8b0c4] font-light leading-relaxed"
            style={{ ...sans, marginTop: '1.5rem' }}
          >
            Desarrollo soluciones digitales con enfoque estratégico. Tecnología que
            conecta experiencia y valor real.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <GradientButton href="#work">
              Trayectoria <ArrowUpRight size={15} />
            </GradientButton>
            <OutlineButton href="#projects">Proyectos</OutlineButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center lg:justify-end"
        >
          <HeroAvatar />
        </motion.div>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-5 border-t border-white/10 pt-5 w-full">
        <SocialLink href={`mailto:${email}`} label="Email">
          <Mail size={18} strokeWidth={1.5} />
        </SocialLink>
        <SocialLink href="https://github.com/SoyNani" label="GitHub">
          <Github size={18} strokeWidth={1.5} />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/laura-daniela-lópez-jiménez"
          label="LinkedIn"
        >
          <Linkedin size={18} strokeWidth={1.5} />
        </SocialLink>
      </div>
    </section>
  )
}
