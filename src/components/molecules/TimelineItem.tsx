'use client'

import { motion } from 'framer-motion'
import { sans } from '@/lib/styles'
import type { ExperienceItem } from '@/data/experience.content'

type TimelineItemProps = {
  item: ExperienceItem
  index: number
  color: string
}

export default function TimelineItem({
  item,
  index,
  color,
}: TimelineItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.06 }}
      className="timeline-item"
    >
      <span
        className="timeline-dot"
        data-active={item.isActual ? 'true' : 'false'}
        style={{ color }}
      />

      <div className="timeline-meta">
        <span className="font-mono text-[10px] tracking-widest" style={{ color }}>
          0{index + 1}
        </span>
        <span className="font-mono text-[10px] text-[#6a6a78]">{item.period}</span>
        <span className="font-mono text-[10px] text-[#5a5a64]">{item.location}</span>
        {item.isActual && (
          <span
            className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full text-black font-semibold"
            style={{ background: color }}
          >
            Ahora
          </span>
        )}
      </div>

      <h3 className="text-lg md:text-xl font-semibold text-white" style={sans}>
        {item.role}
      </h3>
      <p className="text-sm font-medium mt-0.5" style={{ color }}>
        {item.company}
      </p>
      {item.description && (
        <p
          className="mt-2 text-sm text-[#9aa3b8] font-light leading-relaxed max-w-2xl"
          style={sans}
        >
          {item.description}
        </p>
      )}

      <ul className="mt-4 space-y-2.5 max-w-2xl">
        {item.achievements.map((a) => (
          <li
            key={a.slice(0, 48)}
            className="text-sm text-[#bdc4d4] font-light leading-relaxed flex gap-3"
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
}
