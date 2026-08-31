import SectionLabel from '@/components/atoms/SectionLabel'
import ProjectCard from '@/components/molecules/ProjectCard'
import { projects } from '@/data/projects.content'
import { sans } from '@/lib/styles'

export default function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <SectionLabel accent="blue">04 // Artefactos</SectionLabel>
      <h2
        className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight mb-10 text-white"
        style={sans}
      >
        Proyectos
      </h2>

      <div className="space-y-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
