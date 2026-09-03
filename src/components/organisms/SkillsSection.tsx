'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/atoms/SectionLabel'
import SkillCard from '@/components/molecules/SkillCard'
import { skillsFlat } from '@/data/skills.content'
import { sans } from '@/lib/styles'

export default function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
        <div>
          <SectionLabel accent="pink">02 // HABILIDADES</SectionLabel>
          <h2
            className="mt-3 mb-1 text-3xl md:text-4xl font-semibold tracking-tight text-white"
            style={sans}
          >
            Mis habilidades
          </h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        className="skill-grid"
      >
        {skillsFlat.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index} />
        ))}
      </motion.div>
    </section>
  )
}
