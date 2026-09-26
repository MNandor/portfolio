// Replace remaining placeholder content in `projects` below when ready — not yet populated per request.

export const profile = {
  name: 'Nándor Majla',
  role: 'Mobile Developer',
  tagline:
    'I build native Android apps end to end — from architecture to the details users actually notice.',
  location: 'Linköping, Sweden',
  email: 'majlanandor@gmail.com',
  links: [{ label: 'GitHub', url: 'https://github.com/MNandor' }],
}

export interface TimelineEntry {
  id: string
  range: string
  title: string
  org: string
  summary: string
  highlights: string[]
  tags?: string[]
}

export const workExperience: TimelineEntry[] = [
  {
    id: 'opera',
    range: 'Oct 2025 — Present',
    title: 'Mobile Developer',
    org: 'Opera',
    summary: 'Mobile development at Opera, the browser company, based in Linköping, Sweden.',
    highlights: [],
  },
  {
    id: 'freelancer-2023',
    range: '2023 — 2024',
    title: 'Freelancer',
    org: 'Self-employed',
    summary:
      'Developed Android and cross-platform apps. Led open-source projects and published 5 apps across Productivity, Education, Gaming, and AI. Used the Native Development Kit (NDK) to improve performance.',
    highlights: [],
  },
  {
    id: 'cognizant-2023',
    range: '2023',
    title: 'Android Reverse Engineer',
    org: 'Cognizant',
    summary:
      'Worked with Google to analyze apps uploaded to the Play Store for malware, evaluating potentially unsafe apps using decompilation and static/dynamic analysis. Correctly judged 100% of apps after training, across a total of 76.',
    highlights: [],
  },
  {
    id: 'endava-2022',
    range: '2022 — 2023',
    title: 'Android Developer',
    org: 'Endava',
    summary:
      'Supported 3 junior colleagues via code reviews, mentoring, and workshops. Established best practices and implemented Clean Architecture. Worked with the client to define team requirements, monitored the repository for code quality, and wrote unit and integration tests. Improved the average app store rating from 1.7 to 4.2.',
    highlights: [],
    tags: [
      'Material Design',
      'Clean Architecture',
      'Project Management',
      'CI/CD',
      'Scrum',
      'Code Reviews',
      'Research',
      'Innovation',
    ],
  },
  {
    id: 'accenture-2020',
    range: '2020 — 2022',
    title: 'Android Developer',
    org: 'Accenture',
    summary:
      'Started as an intern building a company-vehicle rental app (web requests, database management, design patterns), then joined full-time as part of an international team — developed and maintained applications, implemented UIs, connected and tested APIs, fixed bugs including a Log4j vulnerability, published 6 apps, and ran workshops for colleagues.',
    highlights: [],
    tags: [
      'MVVM',
      'Retrofit',
      'Dagger2',
      'Koin',
      'Room',
      'RxJava',
      'LiveData',
      'Coroutines',
      'Hilt',
      'MVP',
      'OkHttp',
      'Glide',
    ],
  },
]

export const education: TimelineEntry[] = [
  {
    id: 'ubb',
    range: 'Oct 2024 —',
    title: "M.Sc. in Cybersecurity",
    org: 'Universitatea Babeș-Bolyai, Cluj-Napoca',
    summary: 'Completed one year before relocating to Sweden for a full-time role at Opera.',
    highlights: [],
  },
  {
    id: 'sapientia',
    range: '2018 — 2022',
    title: 'B.Sc. in Computer Science (Informatics)',
    org: 'Sapientia Hungarian University of Transylvania',
    summary:
      'Maintained #1 GPA in the year for the first two semesters and earned a scholarship. Spoke at the Scientific Student Conference and won 3rd place at a Data Visualization contest.',
    highlights: [],
    tags: [
      'Databases',
      'OOP',
      'Functional Programming',
      'Operating Systems',
      'Probability',
      'Statistics',
      'Android',
      'Graph Theory',
      'UI/UX',
      'C#',
      'Computer Networks',
      'Discrete Mathematics',
      'Cryptography',
    ],
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
  {
    id: 'languages',
    label: 'Languages',
    items: ['Kotlin', 'Java', 'Python', 'SQL', 'C', 'C++', 'Dart', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'mobile',
    label: 'Mobile / Android',
    items: [
      'MVVM',
      'Clean Architecture',
      'Retrofit',
      'Dagger2',
      'Koin',
      'Room',
      'RxJava',
      'LiveData',
      'Coroutines',
      'Hilt',
      'MVP',
    ],
  },
  {
    id: 'tooling',
    label: 'Tooling & Practices',
    items: ['Linux', 'Git', 'Agile/Scrum', 'CI/CD', 'Unit Tests', 'Public Speaking', 'Cybersecurity'],
  },
]
