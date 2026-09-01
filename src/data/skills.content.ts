export type SkillItem = {
  id: string
  name: string
  accent: string
}

export type SkillCategory = {
  id: string
  label: string
  code: string
  accent: string
  skills: SkillItem[]
  related?: string[]
}


export const skillCategories: SkillCategory[] = [
  {
    id: 'mobile',
    label: 'Móvil',
    code: 'MOB',
    accent: '#5b8cff',
    skills: [
      { id: 'flutter', name: 'Flutter', accent: '#5b8cff' },
      { id: 'dart', name: 'Dart', accent: '#5b8cff' },
      { id: 'firebase', name: 'Firebase', accent: '#ff9f43' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    code: 'FE',
    accent: '#9b6dff',
    skills: [
      { id: 'html5', name: 'HTML5', accent: '#ff9f43' },
      { id: 'css3', name: 'CSS3', accent: '#5b8cff' },
      { id: 'sass', name: 'SASS', accent: '#ff6bb5' },
      { id: 'javascript', name: 'JavaScript', accent: '#ffd166' },
      { id: 'typescript', name: 'TypeScript', accent: '#5b8cff' },
      { id: 'react', name: 'React', accent: '#5b8cff' },
      { id: 'nextjs', name: 'Next.js', accent: '#eef0f6' },
      { id: 'angular', name: 'Angular', accent: '#ff6bb5' },
      { id: 'vue', name: 'Vue', accent: '#5b8cff' },
      { id: 'tailwind', name: 'Tailwind', accent: '#5b8cff' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    code: 'BE',
    accent: '#ff9f43',
    skills: [
      { id: 'java', name: 'Java', accent: '#ff9f43' },
      { id: 'spring', name: 'Spring Boot', accent: '#5b8cff' },
      { id: 'php', name: 'PHP', accent: '#9b6dff' },
      { id: 'laravel', name: 'Laravel', accent: '#ff6bb5' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    code: 'OPS',
    accent: '#ff9f43',
    skills: [
      { id: 'aws', name: 'AWS', accent: '#ff9f43' },
      { id: 'azure', name: 'Azure DevOps', accent: '#5b8cff' },
    ],
  },
  {
    id: 'data',
    label: 'Bases de datos',
    code: 'DB',
    accent: '#9b6dff',
    skills: [
      { id: 'mysql', name: 'MySQL', accent: '#5b8cff' },
      { id: 'sql', name: 'SQL', accent: '#9b6dff' },
    ],
  },
  {
    id: 'quality',
    label: 'Testing & CMS',
    code: 'QA',
    accent: '#ffd166',
    skills: [
      { id: 'jest', name: 'Jest', accent: '#ff9f43' },
      { id: 'wordpress', name: 'WordPress', accent: '#5b8cff' },
    ],
  },
  {
    id: 'design',
    label: 'Diseño',
    code: 'UX',
    accent: '#ff6bb5',
    skills: [
      { id: 'figma', name: 'Figma', accent: '#ff6bb5' },
    ],
  },
  {
    id: 'vcs',
    label: 'Control de versiones',
    code: 'VCS',
    accent: '#ff9f43',
    skills: [
      { id: 'git', name: 'Git', accent: '#ff9f43' },
      { id: 'github', name: 'GitHub', accent: '#eef0f6' },
    ],
  },
  {
    id: 'innovation',
    label: 'Innovación',
    code: 'XR',
    accent: '#9b6dff',
    skills: [
      { id: 'unity', name: 'Unity', accent: '#eef0f6' },
    ],
  },
]

export const skillsFlat = skillCategories.flatMap((c) => c.skills)
