'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowUpRight, ExternalLink } from 'lucide-react'
import HudFrame from './HudFrame'
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

export default function HudPortfolio() {
  const email = process.env.NEXT_PUBLIC_EMAIL || 'soyynanii@gmail.com'

  return (
    <>
      <HudFrame />

      <div className="content-scroll" data-content-scroll>
        {/* HERO */}
        <section className="relative min-h-full flex flex-col">
          <div className="liquid-panel relative flex-1 m-3 md:m-4 min-h-[calc(100vh-80px-24px)]">
            <div className="liquid-bg" />
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[65vh] p-6 md:p-12 lg:p-16">
              <div className="flex items-start justify-between gap-4">
                <p className="hud-section-label">Sección · Liquid ether</p>
                <span className="font-mono text-[10px] tracking-widest text-black/40">
                  0014
                </span>
              </div>

              <div className="max-w-3xl py-12 md:py-20">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono text-[11px] tracking-[0.28em] uppercase text-black/55 mb-5"
                >
                  Software · Producto · Liderazgo
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 }}
                  className="text-[clamp(2.75rem,8vw,6rem)] font-semibold tracking-[-0.04em] leading-[0.92] text-black"
                >
                  Laura
                  <br />
                  López
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16 }}
                  className="mt-6 max-w-md text-base md:text-lg text-black/60 font-light leading-relaxed"
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-black/85 transition-colors"
                  >
                    Trayectoria
                    <ArrowUpRight size={15} />
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/25 text-black/80 text-sm hover:border-black/50 transition-colors"
                  >
                    Proyectos
                  </a>
                </motion.div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/15 pt-5">
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {['Next.js', 'Flutter', 'AWS', 'Producto'].map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/45"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/SoyNani"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black/55 hover:text-black transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/laura-daniela-lópez-jiménez"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black/55 hover:text-black transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-dark px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#a8a8b0]">
                02 // Mission
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-white">
                Mentalidad de
                <br />
                producto
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-5">
              <p className="text-white/60 font-light leading-relaxed text-base md:text-lg">
                Soy Laura López, desarrolladora enfocada en soluciones digitales
                centradas en personas. Pensamiento crítico, ownership y
                aprendizaje continuo para mover proyectos hacia impacto real.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  {
                    t: 'Full-stack',
                    d: 'Del UI al cloud sin perder visión de negocio.',
                  },
                  {
                    t: 'Centrada en humanos',
                    d: 'UX, comunicación y colaboración en el proceso.',
                  },
                  {
                    t: 'Ownership',
                    d: 'Decisiones técnicas alineadas a producto.',
                  },
                  {
                    t: 'Aprendizaje',
                    d: 'Certificaciones y retos como hábito.',
                  },
                ].map((item) => (
                  <div
                    key={item.t}
                    className="rounded-xl border border-white/12 bg-white/[0.04] p-4"
                  >
                    <h3 className="text-sm font-semibold text-white/90">
                      {item.t}
                    </h3>
                    <p className="mt-1.5 text-xs text-white/45 font-light leading-relaxed">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-4">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-3 py-1 rounded-full border border-white/15 text-white/55"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="work" className="relative">
          <div className="liquid-panel m-3 md:m-4 overflow-hidden">
            <div className="liquid-bg opacity-95" />
            <div className="relative z-10 p-6 md:p-12 lg:p-16">
              <p className="hud-section-label">03 // Trayectoria</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-black">
                Experiencia laboral
              </h2>

              <div className="mt-10 space-y-4">
                {protectedContent.experience.map((exp, i) => (
                  <motion.article
                    key={exp.company + exp.period}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-2xl border border-black/10 bg-white/50 backdrop-blur-sm p-5 md:p-7"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div>
                        <span className="font-mono text-[10px] text-black/40">
                          0{i + 1}
                        </span>
                        <h3 className="text-lg md:text-xl font-semibold text-black mt-1">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-medium text-black/65 mt-0.5">
                          {exp.company}
                        </p>
                        <p className="text-xs font-mono text-black/45 mt-1">
                          {exp.period} · {exp.location}
                        </p>
                      </div>
                      {exp.isActual && (
                        <span className="self-start text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-black text-white font-semibold">
                          Ahora
                        </span>
                      )}
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.achievements.map((a) => (
                        <li
                          key={a.slice(0, 32)}
                          className="text-sm text-black/60 font-light leading-relaxed flex gap-2"
                        >
                          <span className="mt-2 h-1 w-1 rounded-full bg-black/45 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </div>

              <div className="mt-12">
                <p className="hud-section-label mb-4">Formación</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {protectedContent.education.map((ed) => (
                    <div
                      key={ed.degree + ed.institution}
                      className="rounded-xl border border-black/10 bg-white/45 backdrop-blur-sm px-4 py-4"
                    >
                      <p className="text-sm font-medium text-black">
                        {ed.degree}
                      </p>
                      <p className="text-xs text-black/50 mt-1">
                        {ed.institution}
                      </p>
                      <p className="text-[10px] font-mono text-black/40 mt-2 uppercase">
                        {ed.period}
                      </p>
                    </div>
                  ))}
                </div>
                {protectedContent.recognition && (
                  <div className="mt-4 rounded-2xl border border-black/15 bg-white/50 p-5 md:p-6">
                    <p className="font-mono text-[10px] tracking-widest uppercase text-black/50">
                      Reconocimiento
                    </p>
                    <p className="mt-2 text-base md:text-lg font-semibold text-black">
                      {protectedContent.recognition.title}
                    </p>
                    <p className="mt-2 text-sm text-black/55 font-light">
                      {protectedContent.recognition.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="section-dark px-6 md:px-12 lg:px-16 py-20 md:py-28"
        >
          <div className="max-w-5xl mx-auto">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#a8a8b0]">
              04 // Artefactos
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight mb-10 text-white">
              Proyectos
            </h2>

            <div className="space-y-6">
              {projects.map((p, i) => (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-12 gap-5 md:gap-8 items-center rounded-2xl border border-white/12 bg-white/[0.04] overflow-hidden"
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
                      <div className="absolute inset-0 bg-[#161b2e]" />
                    )}
                  </div>
                  <div
                    className={`md:col-span-7 p-5 md:p-8 ${
                      i % 2 === 1 ? 'md:order-1' : ''
                    }`}
                  >
                    <span className="font-mono text-[10px] tracking-widest text-white/35">
                      0{i + 1}
                    </span>
                    <h3 className="mt-1 text-xl md:text-2xl font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/50 font-light leading-relaxed">
                      {p.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded border border-white/12 text-white/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-4">
                      {p.demoUrl && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-[#c0c0c8] hover:text-white"
                        >
                          Demo <ExternalLink size={13} />
                        </a>
                      )}
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white"
                        >
                          Código <Github size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative pb-6">
          <div className="liquid-panel m-3 md:m-4 min-h-[50vh] flex items-center">
            <div className="liquid-bg" />
            <div className="relative z-10 w-full p-8 md:p-16 text-center">
              <p className="hud-section-label">05 // Señal</p>
              <h2 className="mt-4 text-[clamp(2rem,6vw,3.5rem)] font-semibold tracking-tight text-black leading-tight">
                Construyamos algo
                <br />
                juntos
              </h2>
              <p className="mt-4 text-black/55 font-light max-w-md mx-auto text-sm md:text-base">
                Abierta a roles, colaboraciones y proyectos con impacto.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/laura-daniela-lópez-jiménez"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full border border-black/25 text-black/80 text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/SoyNani"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full border border-black/25 text-black/80 text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="px-6 py-6 flex flex-col sm:flex-row justify-between gap-2 text-[10px] font-mono text-[#8a8a94] tracking-wider">
          <span>© {new Date().getFullYear()} Laura Daniela López Jiménez</span>
          <span>NANI.v2 // HUD</span>
        </footer>
      </div>
    </>
  )
}
