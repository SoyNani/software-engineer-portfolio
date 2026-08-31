import SectionLabel from '@/components/atoms/SectionLabel'
import Chip from '@/components/atoms/Chip'
import FeatureCard from '@/components/molecules/FeatureCard'
import { missionPillars, skills } from '@/data/skills.content'
import { sans } from '@/lib/styles'

export default function MissionSection() {
  return (
    <section className="section" id="about">
      <div className="grid md:grid-cols-12 gap-10 md:gap-12">
        <div className="md:col-span-4">
          <SectionLabel accent="pink">02 // Mission</SectionLabel>
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
            className="text-[#bdc4d4] font-light leading-relaxed text-base md:text-lg"
            style={sans}
          >
            Soy Laura López, desarrolladora enfocada en soluciones digitales centradas
            en personas. Pensamiento crítico, ownership y aprendizaje continuo para
            mover proyectos hacia impacto real.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            {missionPillars.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                accent={item.accent}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
            {skills.map((s, i) => (
              <Chip key={s} index={i}>
                {s}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
