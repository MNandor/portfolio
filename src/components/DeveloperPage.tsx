import { Hero } from './Hero'
import { Timeline } from './Timeline'
import { Projects } from './Projects'
import { TechStack } from './TechStack'
import { workExperience, education } from '../data/developer'
import './DeveloperPage.css'

export function DeveloperPage() {
  return (
    <main className="developer-page">
      <div className="developer-page-inner">
        <Hero />
        <Timeline heading="Work Experience" entries={workExperience} />
        <Timeline heading="Education" entries={education} />
        <Projects />
        <TechStack />
      </div>
    </main>
  )
}
