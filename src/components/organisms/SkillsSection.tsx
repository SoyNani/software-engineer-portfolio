'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/atoms/SectionLabel'
import SkillCard from '@/components/molecules/SkillCard'
import { skillCategories, skillsFlat } from '@/data/skills.content'
import { sans } from '@/lib/styles'

export default function SkillsSection() {
  let globalIndex = 0

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
          <p className="mt-3 max-w-lg text-sm text-[#8a92a8] font-light" style={sans}>
            Stack por dominio — herramientas con las que construyo producto.
          </p>
        </div>
        <span className="font-mono text-[10px] tracking-[0.2em] text-[#5a5a64] uppercase">
          MODULES // {String(skillsFlat.length).padStart(2, '0')}
        </span>
      </div>

      <div className="space-y-10">
        {skillCategories.map((cat, catIndex) => {
          const startIndex = globalIndex
          globalIndex += cat.skills.length

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: catIndex * 0.05 }}
              className="skill-category"
            >
              <div className="skill-category-header">
                <span
                  className="font-mono text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: cat.accent }}
                >
                  {cat.code}
                </span>
                <h3 className="text-sm font-medium text-white/90 tracking-wide" style={sans}>
                  {cat.label}
                </h3>
                <div className="skill-category-line" />
              </div>

              <div className="skill-grid">
                {cat.skills.map((skill, i) => (
                  <SkillCard
                    key={`${cat.id}-${skill.id}`}
                    skill={skill}
                    index={startIndex + i}
                  />
                ))}
              </div>

              {cat.related && cat.related.length > 0 && (
                <div className="skill-related">
                  {cat.related.map((tag) => (
                    <span key={tag} className="skill-related-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
