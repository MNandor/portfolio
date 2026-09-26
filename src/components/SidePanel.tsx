import type { CSSProperties } from 'react'
import type { SidePanelData } from '../data/sidePanels'
import './SidePanel.css'

export function SidePanel({
  side,
  data,
  accentVar,
  isOpen,
  onClose,
}: {
  side: 'left' | 'right'
  data: SidePanelData
  accentVar: string
  isOpen: boolean
  onClose: () => void
}) {
  return (
    <>
      <div
        className={`side-panel-scrim ${isOpen ? 'is-open' : ''}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      <section
        className={`side-panel side-panel-${side} ${isOpen ? 'is-open' : ''}`}
        style={{ '--panel-accent': `var(${accentVar})` } as CSSProperties}
        aria-hidden={!isOpen}
        aria-label={data.title}
      >
        <button type="button" className="side-panel-close" onClick={onClose} aria-label="Close panel">
          Close
        </button>
        <h2 className="side-panel-title">{data.title}</h2>
        <p className="side-panel-intro">{data.intro}</p>
        <ul className="side-panel-items">
          {data.items.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
