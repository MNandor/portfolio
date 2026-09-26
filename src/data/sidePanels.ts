// PLACEHOLDER CONTENT — replace with your real details.

export interface SidePanelData {
  id: 'languages' | 'security'
  tabLabel: string
  title: string
  intro: string
  items: { title: string; detail: string }[]
}

export const languagesPanel: SidePanelData = {
  id: 'languages',
  tabLabel: 'Language Learning',
  title: 'Language Learning',
  intro: 'A sentence or two on why you learn languages and how seriously you take it.',
  items: [
    { title: 'Language One', detail: 'Level, and how you use or practice it.' },
    { title: 'Language Two', detail: 'Level, and how you use or practice it.' },
    { title: 'Language Three', detail: 'Level, and how you use or practice it.' },
  ],
}

export const securityPanel: SidePanelData = {
  id: 'security',
  tabLabel: 'Cybersecurity',
  title: 'Cybersecurity',
  intro: 'A sentence or two on what draws you to security and at what depth you engage with it.',
  items: [
    { title: 'CTFs / Challenges', detail: 'Platforms you use, notable results.' },
    { title: 'Certifications', detail: 'Anything in progress or completed.' },
    { title: 'A project or writeup', detail: 'Something concrete you can point to.' },
  ],
}
