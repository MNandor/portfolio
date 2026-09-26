import { techStack } from '../data/developer'
import './TechStack.css'

export function TechStack() {
  return (
    <section className="stack-section">
      <h2 className="section-heading">Tech Stack</h2>
      <div className="stack-groups">
        {techStack.map((group) => (
          <div className="stack-group" key={group.id}>
            <h3 className="stack-group-label">{group.label}</h3>
            <div className="stack-group-items">
              {group.items.map((item) => (
                <span className="project-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
