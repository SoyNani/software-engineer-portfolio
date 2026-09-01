'use client'

import SectionLabel from '@/components/atoms/SectionLabel'
import TimelineItem from '@/components/molecules/TimelineItem'
import { experience } from '@/data/experience.content'
import { EXP_COLORS, sans } from '@/lib/styles'

export default function ExperienceSection() {
  return (
    <div className="section-band section-band--work">
      <section className="section" id="work">
        <SectionLabel accent="orange">03 // Trayectoria</SectionLabel>
        <h2
          className="mt-3 mb-6 md:mb-8 text-3xl md:text-4xl font-semibold tracking-tight text-white"
          style={sans}
        >
          Experiencia laboral
        </h2>

        <div className="timeline">
          {experience.map((exp, i) => (
            <TimelineItem
              key={exp.company + exp.period}
              item={exp}
              index={i}
              color={EXP_COLORS[i % EXP_COLORS.length]}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
