import type { TimelineEntry } from '../data/developer'
import './Timeline.css'

export function Timeline({ heading, entries }: { heading: string; entries: TimelineEntry[] }) {
  return (
    <section className="timeline-section">
      <h2 className="section-heading">{heading}</h2>
      <ol className="timeline">
        {entries.map((entry, i) => (
          <li className="timeline-entry" key={entry.id}>
            <span className="timeline-index">{String(i + 1).padStart(2, '0')}</span>
            <div className="timeline-body">
              <div className="timeline-heading-row">
                <h3 className="timeline-title">{entry.title}</h3>
                <span className="timeline-range">{entry.range}</span>
              </div>
              <p className="timeline-org">{entry.org}</p>
              <p className="timeline-summary">{entry.summary}</p>
              {entry.tags && entry.tags.length > 0 && (
                <div className="timeline-tags">
                  {entry.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {entry.highlights.length > 0 && (
                <ul className="timeline-highlights">
                  {entry.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
