import { useEffect, useState } from 'react'

const INTRO_SEEN_KEY = 'juaquin-portfolio-intro-seen'

function shouldShowIntro() {
  try {
    return window.sessionStorage.getItem(INTRO_SEEN_KEY) !== 'true'
  } catch {
    return true
  }
}

export default function IntroOverlay() {
  const [visible, setVisible] = useState(shouldShowIntro)

  useEffect(() => {
    if (!visible) return undefined

    try {
      window.sessionStorage.setItem(INTRO_SEEN_KEY, 'true')
    } catch {
      // Continue with the intro if session storage is unavailable.
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false)
      return undefined
    }

    const timeout = window.setTimeout(() => setVisible(false), 2650)
    return () => window.clearTimeout(timeout)
  }, [visible])

  if (!visible) return null

  return (
    <div className="intro-overlay" role="dialog" aria-modal="true" aria-label="Welcome to Juaquin Arenas’ portfolio">
      <p className="intro-kicker">PORTFOLIO · 2026</p>
      <h1 className="intro-name">
        <span>Juaquin Alejandro</span>
        <span>Arenas<span className="intro-period">.</span></span>
      </h1>
      <p className="intro-role">IT STUDENT</p>
      <div className="intro-progress" aria-hidden="true"><span /></div>
      <button className="intro-skip" type="button" onClick={() => setVisible(false)}>SKIP INTRO <span>↗</span></button>
    </div>
  )
}
