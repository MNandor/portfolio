import { useEffect, useRef, useState } from 'react'
import { DeveloperPage } from './components/DeveloperPage'
import { EdgeTab } from './components/EdgeTab'
import { SidePanel } from './components/SidePanel'
import { languagesPanel, securityPanel } from './data/sidePanels'
import './App.css'

type PanelId = 'languages' | 'security' | null

const SWIPE_THRESHOLD = 60

function App() {
  const [openPanel, setOpenPanel] = useState<PanelId>(null)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenPanel(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(delta) < SWIPE_THRESHOLD) return

    if (openPanel === null) {
      // Swipe from near an edge opens that side's panel.
      if (delta > 0 && e.changedTouches[0].clientX - delta < 40) setOpenPanel('languages')
      if (delta < 0 && e.changedTouches[0].clientX - delta > window.innerWidth - 40)
        setOpenPanel('security')
    } else if (openPanel === 'languages' && delta < 0) {
      setOpenPanel(null)
    } else if (openPanel === 'security' && delta > 0) {
      setOpenPanel(null)
    }
  }

  return (
    <div className="app-shell" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <DeveloperPage />

      <EdgeTab
        side="left"
        label={languagesPanel.tabLabel}
        accentVar="--accent-lang"
        isOpen={openPanel === 'languages'}
        onClick={() => setOpenPanel(openPanel === 'languages' ? null : 'languages')}
      />
      <EdgeTab
        side="right"
        label={securityPanel.tabLabel}
        accentVar="--accent-security"
        isOpen={openPanel === 'security'}
        onClick={() => setOpenPanel(openPanel === 'security' ? null : 'security')}
      />

      <SidePanel
        side="left"
        data={languagesPanel}
        accentVar="--accent-lang"
        isOpen={openPanel === 'languages'}
        onClose={() => setOpenPanel(null)}
      />
      <SidePanel
        side="right"
        data={securityPanel}
        accentVar="--accent-security"
        isOpen={openPanel === 'security'}
        onClose={() => setOpenPanel(null)}
      />
    </div>
  )
}

export default App
