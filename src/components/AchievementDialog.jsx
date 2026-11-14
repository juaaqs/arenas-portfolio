import { useEffect, useRef } from 'react'

export default function AchievementDialog({ achievement, onClose }) {
  const closeButton = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    closeButton.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  return (
    <div
      className="achievement-dialog-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        className="achievement-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="achievement-dialog-title"
      >
        <button
          ref={closeButton}
          className="achievement-dialog-close"
          type="button"
          onClick={onClose}
          aria-label="Close achievement details"
        >
          ×
        </button>

        <div className="achievement-dialog-photo">
          {achievement.image ? (
            <img src={achievement.image} alt={`${achievement.title} event`} />
          ) : (
            <div className="achievement-dialog-photo-placeholder">
              <span>ADD EVENT PHOTO</span>
            </div>
          )}
          <span className="achievement-dialog-photo-label">
            MILESTONE · {achievement.number}
          </span>
        </div>

        <div className="achievement-dialog-content">
          <p className="eyebrow">ACHIEVEMENT {achievement.number} / 15</p>
          <h2 id="achievement-dialog-title">{achievement.title}</h2>
          <p className="achievement-dialog-result">{achievement.detail}</p>
          <div className="achievement-dialog-rule" />
          <p className="achievement-dialog-description">
            {achievement.description || 'Your event description will go here.'}
          </p>
          {!achievement.description && (
            <p className="achievement-dialog-hint">
              Add your story to this achievement in the portfolio details.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
