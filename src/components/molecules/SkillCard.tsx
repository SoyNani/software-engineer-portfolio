'use client'

import { motion } from 'framer-motion'
import TechIcon from '@/components/atoms/TechIcon'
import type { SkillItem } from '@/data/skills.content'

type SkillCardProps = {
  skill: SkillItem
  index: number
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      className="skill-card group"
      style={{ ['--skill-accent' as string]: skill.accent }}
    >
      <div className="skill-card-corner skill-card-corner--tl" />
      <div className="skill-card-corner skill-card-corner--tr" />
      <div className="skill-card-corner skill-card-corner--bl" />
      <div className="skill-card-corner skill-card-corner--br" />

      <div className="skill-card-icon">
        <TechIcon id={skill.id} color={skill.accent} size={18} />
      </div>
      <span className="skill-card-name">{skill.name}</span>
      <span className="skill-card-code font-mono">
        {String(index + 1).padStart(2, '0')}
      </span>
    </motion.div>
  )
}
