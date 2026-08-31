'use client'

import SectionLabel from '@/components/atoms/SectionLabel'
import SkillCard from '@/components/molecules/SkillCard'
import { skills } from '@/data/skills.content'
import { sans } from '@/lib/styles'

export default function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <SectionLabel accent="pink">02 // Sistema</SectionLabel>
          <h2
            className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white"
            style={sans}
          >
            Mis habilidades
          </h2>
          <p
            className="mt-3 max-w-md text-sm text-[#8a92a8] font-light"
            style={sans}
          >
            Stack técnico en uso — lenguajes, frameworks y herramientas.
          </p>
        </div>
        <span className="font-mono text-[10px] tracking-[0.2em] text-[#5a5a64] uppercase">
          MODULES // {String(skills.length).padStart(2, '0')}
        </span>
      </div>

      <div className="skill-grid">
        {skills.map((skill, i) => (
          <SkillCard key={skill.id} skill={skill} index={i} />
        ))}
      </div>
    </section>
  )
}
