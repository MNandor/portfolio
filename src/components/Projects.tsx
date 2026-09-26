import { projects } from '../data/developer'
import './Projects.css'

export function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-heading">Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-row" key={project.id}>
            <div className="project-heading">
              <h3>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-stack">
              {project.stack.map((tech) => (
                <span className="project-tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
