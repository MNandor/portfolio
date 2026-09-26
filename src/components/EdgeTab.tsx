import type { CSSProperties } from 'react'
import './EdgeTab.css'

export function EdgeTab({
  side,
  label,
  accentVar,
  isOpen,
  onClick,
}: {
  side: 'left' | 'right'
  label: string
  accentVar: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      className={`edge-tab edge-tab-${side}`}
      style={{ '--tab-accent': `var(${accentVar})` } as CSSProperties}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={`${isOpen ? 'Close' : 'Open'} ${label} panel`}
    >
      <span className="edge-tab-label">{label}</span>
    </button>
  )
}
