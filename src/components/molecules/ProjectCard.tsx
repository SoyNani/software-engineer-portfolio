'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Chip from '@/components/atoms/Chip'
import type { Project } from '@/types/projects.types'

type ProjectCardProps = {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const reverse = index % 2 === 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-12 gap-5 md:gap-8 items-center card-glow rounded-2xl overflow-hidden"
    >
      <div
        className={`md:col-span-5 relative aspect-video md:aspect-4/3 overflow-hidden ${
          reverse ? 'md:order-2' : ''
        }`}
      >
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-[#111827]" />
        )}
      </div>

      <div className={`md:col-span-7 p-5 md:p-8 ${reverse ? 'md:order-1' : ''}`}>
        <span className="font-mono text-[10px] tracking-widest accent-purple">
          0{index + 1}
        </span>
        <h3 className="mt-1 text-xl md:text-2xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-[#bdc4d4] font-light leading-relaxed">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t, ti) => (
            <Chip key={t} index={ti} size="sm">
              {t}
            </Chip>
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm accent-blue hover:opacity-80"
            >
              Demo <ExternalLink size={13} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[#6a6a78] hover:text-white"
            >
              Código <Github size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
