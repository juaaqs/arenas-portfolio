import { useEffect, useRef } from 'react'
import Slideshow from './Slideshow'

export default function ProjectDialog({ project, onClose }) {
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
        className="achievement-dialog project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
      >
        <button
          ref={closeButton}
          className="achievement-dialog-close"
          type="button"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        <div className="achievement-dialog-photo project-dialog-photo">
          <Slideshow
            className="achievement-slideshow"
            images={project.gallery}
            label={project.title}
          />
          <span className="achievement-dialog-photo-label">PROJECT · {project.number}</span>
        </div>

        <div className="achievement-dialog-content project-dialog-content">
          <p className="eyebrow">{project.type}</p>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p className="achievement-dialog-result">{project.description}</p>
          <div className="achievement-dialog-rule" />
          <div className="project-dialog-description-list">
            {project.fullDescription.map((paragraph) => (
              <p className="achievement-dialog-description" key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
