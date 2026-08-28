'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowUpRight, ExternalLink } from 'lucide-react'
import HudFrame from './HudFrame'
import PageDivider from './PageDivider'
import HeroAvatar from './HeroAvatar'
import { projects } from '@/data/projects.content'
import { protectedContent } from '@/data/protected.content'

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Flutter',
  'AWS',
  'Tailwind',
  'Figma',
  'MySQL',
  'Scrum',
  'AR/VR',
]

const sans = { fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' } as const

const expColors = ['#ff6bb5', '#9b6dff', '#5b8cff', '#ff9f43'] as const

export default function HudPortfolio() {
  const email = process.env.NEXT_PUBLIC_EMAIL || 'soyynanii@gmail.com'

  return (
    <>
      <HudFrame />

      <div className="content-scroll">
        <div className="page-shell">
          {/* HERO */}
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
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase accent-purple">
                01 // Inicio
              </p>
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
                  <span className="bg-gradient-to-r from-[#ff6bb5] via-[#9b6dff] to-[#5b8cff] bg-clip-text text-transparent">
                    López
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16 }}
                  className="mt-6 max-w-lg text-base md:text-lg text-[#a8b0c4] font-light leading-relaxed"
                  style={sans}
                >
                  Desarrollo soluciones digitales con enfoque estratégico.
                  Tecnología que conecta experiencia y valor real.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.28 }}
                  className="mt-10 flex flex-wrap gap-3"
                >
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-black transition-opacity hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #ff6bb5, #9b6dff)' }}
                  >
                    Trayectoria
                    <ArrowUpRight size={15} />
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#9b6dff]/50 text-[#c4b0ff] text-sm hover:border-[#9b6dff] transition-colors"
                  >
                    Proyectos
                  </a>
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

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 w-full">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  { t: 'Next.js', c: 'accent-blue' },
                  { t: 'Flutter', c: 'accent-purple' },
                  { t: 'AWS', c: 'accent-orange' },
                  { t: 'Producto', c: 'accent-pink' },
                ].map((item) => (
                  <span
                    key={item.t}
                    className={`font-mono text-[10px] tracking-[0.2em] uppercase ${item.c}`}
                  >
                    {item.t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/SoyNani"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#8a8a94] hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} strokeWidth={1.5} />
                </a>
                <a
                  href="https://www.linkedin.com/in/laura-daniela-lópez-jiménez"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#8a8a94] hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </section>

          <PageDivider />

          {/* MISSION */}
          <section className="section" id="about">
            <div className="grid md:grid-cols-12 gap-10 md:gap-12">
              <div className="md:col-span-4">
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase accent-pink">
                  02 // Mission
                </p>
                <h2
                  className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-white"
                  style={sans}
                >
                  Mentalidad de
                  <br />
                  <span className="accent-purple">producto</span>
                </h2>
              </div>
              <div className="md:col-span-8 space-y-5">
                <p
                  className="text-[#a8b0c4] font-light leading-relaxed text-base md:text-lg"
                  style={sans}
                >
                  Soy Laura López, desarrolladora enfocada en soluciones digitales
                  centradas en personas. Pensamiento crítico, ownership y
                  aprendizaje continuo para mover proyectos hacia impacto real.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {[
                    {
                      t: 'Full-stack',
                      d: 'Del UI al cloud sin perder visión de negocio.',
                      accent: 'border-l-[#5b8cff]',
                    },
                    {
                      t: 'Centrada en humanos',
                      d: 'UX, comunicación y colaboración en el proceso.',
                      accent: 'border-l-[#ff6bb5]',
                    },
                    {
                      t: 'Ownership',
                      d: 'Decisiones técnicas alineadas a producto.',
                      accent: 'border-l-[#9b6dff]',
                    },
                    {
                      t: 'Aprendizaje',
                      d: 'Certificaciones y retos como hábito.',
                      accent: 'border-l-[#ff9f43]',
                    },
                  ].map((item) => (
                    <div
                      key={item.t}
                      className={`card-glow rounded-xl p-4 border-l-2 ${item.accent}`}
                    >
                      <h3 className="text-sm font-semibold text-white/90">{item.t}</h3>
                      <p className="mt-1.5 text-xs text-[#a8b0c4] font-light leading-relaxed">
                        {item.d}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  {skills.map((s, i) => {
                    const chips = ['chip-pink', 'chip-purple', 'chip-blue']
                    return (
                      <span
                        key={s}
                        className={`text-[11px] px-3 py-1 rounded-full border ${chips[i % 3]}`}
                      >
                        {s}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          <PageDivider />

          <div className="section-band section-band--work">
            <section className="section" id="work">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase accent-orange">
                03 // Trayectoria
              </p>
              <h2
                className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white"
                style={sans}
              >
                Experiencia laboral
              </h2>
              <p className="mt-3 max-w-xl text-sm text-[#8a92a8] font-light" style={sans}>
                Resultados y impacto por rol — no solo tareas.
              </p>

              <div className="timeline">
                {protectedContent.experience.map((exp, i) => {
                  const color = expColors[i % expColors.length]
                  return (
                    <motion.article
                      key={exp.company + exp.period}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ delay: i * 0.06 }}
                      className="timeline-item"
                    >
                      <span
                        className="timeline-dot"
                        data-active={exp.isActual ? 'true' : 'false'}
                        style={{ color }}
                      />

                      <div className="timeline-meta">
                        <span className="font-mono text-[10px] tracking-widest" style={{ color }}>
                          0{i + 1}
                        </span>
                        <span className="font-mono text-[10px] text-[#6a6a78]">
                          {exp.period}
                        </span>
                        <span className="font-mono text-[10px] text-[#5a5a64]">
                          {exp.location}
                        </span>
                        {exp.isActual && (
                          <span
                            className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full text-black font-semibold"
                            style={{ background: color }}
                          >
                            Ahora
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg md:text-xl font-semibold text-white" style={sans}>
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color }}>
                        {exp.company}
                      </p>
                      {exp.description && (
                        <p
                          className="mt-2 text-sm text-[#9aa3b8] font-light leading-relaxed max-w-2xl"
                          style={sans}
                        >
                          {exp.description}
                        </p>
                      )}

                      <ul className="mt-4 space-y-2.5 max-w-2xl">
                        {exp.achievements.map((a) => (
                          <li
                            key={a.slice(0, 40)}
                            className="text-sm text-[#a8b0c4] font-light leading-relaxed flex gap-3"
                            style={sans}
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                              style={{ background: color }}
                            />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </motion.article>
                  )
                })}
              </div>

              <div className="mt-14">
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase accent-yellow mb-4">
                  Formación
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {protectedContent.education.map((ed) => (
                    <div
                      key={ed.degree + ed.institution}
                      className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-4"
                    >
                      <p className="text-sm font-medium text-white">{ed.degree}</p>
                      <p className="text-xs text-[#a8b0c4] mt-1">{ed.institution}</p>
                      <p className="text-[10px] font-mono text-[#6a6a78] mt-2 uppercase">
                        {ed.period}
                      </p>
                    </div>
                  ))}
                </div>
                {protectedContent.recognition && (
                  <div className="mt-4 rounded-2xl border border-[#ffd166]/25 bg-white/[0.03] p-5 md:p-6">
                    <p className="font-mono text-[10px] tracking-widest uppercase accent-yellow">
                      Reconocimiento
                    </p>
                    <p className="mt-2 text-base md:text-lg font-semibold text-white">
                      {protectedContent.recognition.title}
                    </p>
                    <p className="mt-2 text-sm text-[#a8b0c4] font-light">
                      {protectedContent.recognition.description}
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>

          <PageDivider />

          <section className="section" id="projects">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase accent-blue">
              04 // Artefactos
            </p>
            <h2
              className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight mb-10 text-white"
              style={sans}
            >
              Proyectos
            </h2>

            <div className="space-y-6">
              {projects.map((p, i) => (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-12 gap-5 md:gap-8 items-center card-glow rounded-2xl overflow-hidden"
                >
                  <div
                    className={`md:col-span-5 relative aspect-video md:aspect-[4/3] overflow-hidden ${
                      i % 2 === 1 ? 'md:order-2' : ''
                    }`}
                  >
                    {p.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.image}
                        alt={p.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#111827]" />
                    )}
                  </div>
                  <div
                    className={`md:col-span-7 p-5 md:p-8 ${
                      i % 2 === 1 ? 'md:order-1' : ''
                    }`}
                  >
                    <span className="font-mono text-[10px] tracking-widest accent-purple">
                      0{i + 1}
                    </span>
                    <h3 className="mt-1 text-xl md:text-2xl font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#a8b0c4] font-light leading-relaxed">
                      {p.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t, ti) => {
                        const chips = ['chip-pink', 'chip-purple', 'chip-blue']
                        return (
                          <span
                            key={t}
                            className={`text-[10px] px-2 py-0.5 rounded border ${chips[ti % 3]}`}
                          >
                            {t}
                          </span>
                        )
                      })}
                    </div>
                    <div className="mt-4 flex gap-4">
                      {p.demoUrl && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm accent-blue hover:opacity-80"
                        >
                          Demo <ExternalLink size={13} />
                        </a>
                      )}
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-[#6a6a78] hover:text-white"
                        >
                          Código <Github size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <PageDivider />

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
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase accent-pink">
                  05 // Señal
                </p>
                <h2
                  className="mt-4 text-[clamp(2rem,6vw,3.5rem)] font-semibold tracking-tight text-white leading-tight"
                  style={sans}
                >
                  Construyamos algo
                  <br />
                  <span className="bg-gradient-to-r from-[#ff6bb5] via-[#9b6dff] to-[#5b8cff] bg-clip-text text-transparent">
                    juntos
                  </span>
                </h2>
                <p className="mt-4 text-[#a8b0c4] font-light max-w-md mx-auto text-sm md:text-base">
                  Abierta a roles, colaboraciones y proyectos con impacto.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full text-sm font-medium text-black"
                    style={{ background: 'linear-gradient(135deg, #ff6bb5, #9b6dff)' }}
                  >
                    Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/laura-daniela-lópez-jiménez"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full border border-[#9b6dff]/50 text-[#c4b0ff] text-sm"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/SoyNani"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full border border-[#5b8cff]/50 text-[#a8c4ff] text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </section>
          </div>

          <footer className="section" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
            <div className="flex flex-col sm:flex-row justify-between gap-2 text-[10px] font-mono text-[#5a5a64] tracking-wider border-t border-white/8 pt-5">
              <span>© {new Date().getFullYear()} Laura Daniela López Jiménez</span>
              <span>NANI.v2 // HUD</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
