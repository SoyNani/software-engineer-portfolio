"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Github, Linkedin, ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects.content";
import { protectedContent } from "@/data/protected.content";
import { KineticCursor } from "./KineticCursor";

const Scene3D = dynamic(() => import("./Scene3D").then((m) => m.Scene3D), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#050507]" />,
});

const nav = [
  { id: "01", label: "Inicio", href: "#top" },
  { id: "02", label: "Código vivo", href: "#about" },
  { id: "03", label: "Trayectoria", href: "#work" },
  { id: "04", label: "Artefactos", href: "#projects" },
  { id: "05", label: "Señal", href: "#contact" },
];

const skills = [
  "React", "Next.js", "TypeScript", "Flutter", "AWS", "Three.js",
  "Tailwind", "Node", "MySQL", "Figma", "Scrum", "AR/VR",
];

export function KineticPortfolio() {
  const [accent, setAccent] = useState("#00e5ff");
  const [active, setActive] = useState("01");
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const sections = [
      { id: "top", tint: "#00e5ff", key: "01" },
      { id: "about", tint: "#a78bfa", key: "02" },
      { id: "work", tint: "#ff2d95", key: "03" },
      { id: "projects", tint: "#c8ff00", key: "04" },
      { id: "contact", tint: "#00e5ff", key: "05" },
    ];

    const onScroll = () => {
      const mid = window.innerHeight * 0.35;
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= mid) {
          setAccent(s.tint);
          setActive(s.key);
          document.documentElement.style.setProperty("--accent", s.tint);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-[var(--fg)]">
      <KineticCursor />
      <div className="noise-overlay" />

      {/* progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
        style={{ scaleX: scrollYProgress, background: accent }}
      />

      {/* side index */}
      <nav className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-4">
        {nav.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="group flex items-center gap-3"
          >
            <span
              className="font-mono text-[10px] tracking-widest transition-colors"
              style={{ color: active === item.id ? accent : "rgba(255,255,255,0.25)" }}
            >
              {item.id}
            </span>
            <span
              className="text-[11px] uppercase tracking-[0.18em] opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: accent }}
            >
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      {/* top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 h-16 mix-blend-difference">
        <a href="#top" className="font-mono text-sm tracking-tight">
          nani<span style={{ color: accent }}>.</span>dev
        </a>
        <div className="flex items-center gap-5">
          <a href="https://github.com/SoyNani" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/laura-daniela-lópez-jiménez"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
          <a
            href="#contact"
            className="hidden md:inline-flex text-xs font-medium tracking-wide px-4 py-2 rounded-full text-black"
            style={{ background: accent }}
          >
            Conectar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
        <Scene3D accent={accent} />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-16">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-[11px] tracking-[0.3em] uppercase mb-6"
                style={{ color: accent }}
              >
                Software · Producto · Liderazgo
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-[clamp(3.5rem,12vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.05em]"
              >
                Laura
                <br />
                <span className="kinetic-gradient-text">López</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-8 max-w-md text-base md:text-lg text-white/50 font-light leading-relaxed"
              >
                Construyo interfaces y sistemas que se sienten vivos.
                De micro-frontends a experiencias inmersivas — código con intención de producto.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-black"
                  style={{ background: accent }}
                >
                  Ver trayectoria
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm border border-white/15 text-white/80 hover:border-white/40 transition-colors"
                >
                  Artefactos
                </a>
              </motion.div>
            </div>
            <div className="lg:col-span-5 hidden lg:block h-[420px]" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-20 md:mt-28 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6"
          >
            {["Next.js", "Flutter", "AWS", "Three.js", "Producto"].map((t) => (
              <span key={t} className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/30">
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-28 md:py-36 section-tint-violet">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase" style={{ color: accent }}>
                02 — Código vivo
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                Mentalidad de
                <br />
                <span className="kinetic-gradient-text">producto</span>
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6">
              <p className="text-lg md:text-xl text-white/55 font-light leading-relaxed">
                Soy Laura López, desarrolladora enfocada en soluciones digitales centradas en personas.
                Combino pensamiento crítico, aprendizaje constante y ownership para mover proyectos
                hacia impacto real — no solo tickets cerrados.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  { t: "Full-stack adaptable", d: "Del frontend al cloud sin perder visión de negocio." },
                  { t: "Centrada en humanos", d: "UX, comunicación y colaboración como parte del código." },
                  { t: "Ownership", d: "Decisiones técnicas alineadas a objetivos de producto." },
                  { t: "Aprendizaje continuo", d: "Certificaciones, retos y curiosidad como hábito." },
                ].map((item) => (
                  <div
                    key={item.t}
                    className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 hover:border-white/20 transition-colors"
                  >
                    <h3 className="text-sm font-semibold mb-2" style={{ color: accent }}>
                      {item.t}
                    </h3>
                    <p className="text-sm text-white/40 font-light leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-6">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE — horizontal */}
      <section id="work" className="relative py-28 md:py-36 section-tint-magenta">
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase" style={{ color: accent }}>
            03 — Trayectoria
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Experiencia en
            <span className="kinetic-gradient-text"> movimiento</span>
          </h2>
          <p className="mt-3 text-white/40 text-sm font-light">Desliza horizontalmente →</p>
        </div>

        <div className="horizontal-scroll px-6 md:px-10 pb-4">
          {protectedContent.experience.map((exp, i) => (
            <motion.article
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="exp-card rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-7 md:p-8 relative overflow-hidden"
            >
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30"
                style={{ background: accent }}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-white/30">0{i + 1}</span>
                  {exp.isActual && (
                    <span
                      className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full text-black font-semibold"
                      style={{ background: accent }}
                    >
                      Ahora
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold leading-tight">{exp.role}</h3>
                <p className="mt-2 text-sm font-medium" style={{ color: accent }}>
                  {exp.company}
                </p>
                <p className="mt-1 text-xs text-white/35 font-mono">
                  {exp.period} · {exp.location}
                </p>
                <ul className="mt-6 space-y-3">
                  {exp.achievements.slice(0, 3).map((a) => (
                    <li key={a.slice(0, 24)} className="text-sm text-white/45 font-light leading-relaxed flex gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full shrink-0" style={{ background: accent }} />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* education strip */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 mt-16">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">Formación</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {protectedContent.education.map((ed) => (
              <div
                key={ed.degree + ed.institution}
                className="rounded-xl border border-white/8 bg-white/[0.02] px-4 py-4"
              >
                <p className="text-sm font-medium text-white/90">{ed.degree}</p>
                <p className="text-xs text-white/35 mt-1">{ed.institution}</p>
                <p className="text-[10px] font-mono text-white/25 mt-2 uppercase">{ed.period}</p>
              </div>
            ))}
          </div>
          {protectedContent.recognition && (
            <div className="mt-6 rounded-2xl border border-white/10 p-6" style={{ borderColor: `${accent}40` }}>
              <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: accent }}>
                Reconocimiento
              </p>
              <p className="mt-2 text-lg font-semibold">{protectedContent.recognition.title}</p>
              <p className="mt-2 text-sm text-white/40 font-light">
                {protectedContent.recognition.description}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative py-28 md:py-36 section-tint-lime">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase" style={{ color: accent }}>
            04 — Artefactos
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight mb-12">
            Cosas que <span className="kinetic-gradient-text">existen</span>
          </h2>

          <div className="space-y-8">
            {projects.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                className="group grid md:grid-cols-12 gap-6 md:gap-10 items-center rounded-3xl border border-white/8 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-colors"
              >
                <div className={`md:col-span-6 relative aspect-video md:aspect-[16/10] overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#121218]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className={`md:col-span-6 p-6 md:p-10 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-white/30">
                    Proyecto 0{i + 1}
                  </span>
                  <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-white/45 font-light leading-relaxed">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-white/50 border border-white/8">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-4">
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium"
                        style={{ color: accent }}
                      >
                        Demo <ExternalLink size={14} />
                      </a>
                    )}
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors"
                      >
                        Código <Github size={14} />
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
      <section id="contact" className="relative py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(ellipse at center, ${accent}33 0%, transparent 60%)`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase" style={{ color: accent }}>
            05 — Señal
          </p>
          <h2 className="mt-6 text-[clamp(2.5rem,8vw,5.5rem)] font-semibold tracking-[-0.04em] leading-[0.95]">
            ¿Construimos
            <br />
            <span className="kinetic-gradient-text">algo raro?</span>
          </h2>
          <p className="mt-6 text-white/45 font-light max-w-md mx-auto">
            Abierta a roles, colaboraciones y experimentos digitales con impacto.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${process.env.NEXT_PUBLIC_EMAIL || "soyynanii@gmail.com"}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full text-sm font-medium text-black"
              style={{ background: accent }}
            >
              Escribir email
            </a>
            <a
              href="https://www.linkedin.com/in/laura-daniela-lópez-jiménez"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full text-sm border border-white/15 text-white/80 hover:border-white/40 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/SoyNani"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full text-sm border border-white/15 text-white/80 hover:border-white/40 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 py-8 px-6 md:px-10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/25 font-mono">
        <span>© {new Date().getFullYear()} Laura Daniela López Jiménez</span>
        <span style={{ color: accent }}>experimental · kinetic · 3d</span>
      </footer>

      {/* invisible progress helper for motion */}
      <motion.div style={{ width: progressWidth }} className="hidden" />
    </div>
  );
}
