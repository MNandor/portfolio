// PLACEHOLDER CONTENT — replace everything in this file with your real details.

export const profile = {
  name: 'Your Name',
  role: 'Android Developer',
  tagline:
    'I build native Android apps end to end — from architecture to the details users actually notice.',
  location: 'City, Country',
  email: 'you@example.com',
  links: [
    { label: 'GitHub', url: 'https://github.com/yourhandle' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yourhandle' },
  ],
}

export interface TimelineEntry {
  id: string
  range: string
  title: string
  org: string
  summary: string
  highlights: string[]
}

export const workExperience: TimelineEntry[] = [
  {
    id: 'job-1',
    range: '2023 — Present',
    title: 'Senior Android Developer',
    org: 'Company A',
    summary: 'One or two sentences on scope and impact at this role.',
    highlights: [
      'Replace with a concrete outcome, ideally with a number.',
      'Replace with a second concrete outcome or responsibility.',
    ],
  },
  {
    id: 'job-2',
    range: '2020 — 2023',
    title: 'Android Developer',
    org: 'Company B',
    summary: 'One or two sentences on scope and impact at this role.',
    highlights: [
      'Replace with a concrete outcome, ideally with a number.',
      'Replace with a second concrete outcome or responsibility.',
    ],
  },
]

export const education: TimelineEntry[] = [
  {
    id: 'edu-1',
    range: '2016 — 2020',
    title: 'B.Sc. in Computer Science',
    org: 'Your University',
    summary: 'Relevant focus, thesis topic, or honors, if worth mentioning.',
    highlights: [],
  },
]

export interface Project {
  id: string
  name: string
  description: string
  stack: string[]
  url?: string
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    name: 'Project One',
    description:
      'One or two sentences: what it does, who it is for, and the interesting technical problem it solved.',
    stack: ['Kotlin', 'Jetpack Compose', 'Coroutines'],
    url: 'https://github.com/yourhandle/project-one',
  },
  {
    id: 'proj-2',
    name: 'Project Two',
    description:
      'One or two sentences: what it does, who it is for, and the interesting technical problem it solved.',
    stack: ['Kotlin', 'Room', 'WorkManager'],
    url: 'https://github.com/yourhandle/project-two',
  },
  {
    id: 'proj-3',
    name: 'Project Three',
    description:
      'One or two sentences: what it does, who it is for, and the interesting technical problem it solved.',
    stack: ['Kotlin Multiplatform'],
  },
]

export interface StackGroup {
  id: string
  label: string
  items: string[]
}

export const techStack: StackGroup[] = [
  { id: 'languages', label: 'Languages', items: ['Kotlin', 'Java', 'TypeScript'] },
  {
    id: 'android',
    label: 'Android',
    items: ['Jetpack Compose', 'Coroutines & Flow', 'Room', 'WorkManager'],
  },
  { id: 'tooling', label: 'Tooling', items: ['Gradle', 'Git', 'CI/CD'] },
  { id: 'other', label: 'Also comfortable with', items: ['React', 'TypeScript', 'REST APIs'] },
]
