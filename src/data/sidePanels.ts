// Intro sentences below are still placeholders pending copy discussion.

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
    { title: 'Hungarian', detail: 'Native' },
    { title: 'English', detail: 'Advanced' },
    { title: 'German', detail: 'Intermediate' },
    { title: 'Romanian', detail: 'Intermediate' },
    { title: 'Swedish', detail: 'Beginner' },
    { title: 'Japanese', detail: 'Beginner' },
  ],
}

export const securityPanel: SidePanelData = {
  id: 'security',
  tabLabel: 'Cybersecurity',
  title: 'Cybersecurity',
  intro: 'A sentence or two on what draws you to security and at what depth you engage with it.',
  items: [
    {
      title: 'Android Reverse Engineering — Cognizant',
      detail:
        'Analyzed apps submitted to the Play Store for malware with Google, using decompilation and static/dynamic analysis — 100% correct classification across 76 apps after training.',
    },
    {
      title: 'Vulnerability Remediation — Accenture',
      detail: 'Identified and fixed vulnerabilities in production apps, including Log4j.',
    },
  ],
}
