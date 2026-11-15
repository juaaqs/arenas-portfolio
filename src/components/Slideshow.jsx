import { useEffect, useRef, useState } from 'react'

export default function Slideshow({ images, label, className = '' }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const pointerStart = useRef(null)
  const hasMultipleImages = images.length > 1

  useEffect(() => {
    if (!hasMultipleImages || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length)
    }, 4500)

    return () => window.clearInterval(interval)
  }, [hasMultipleImages, images.length])

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % images.length)
  }

  const handlePointerUp = (event) => {
    if (pointerStart.current === null) return

    const swipeDistance = event.clientX - pointerStart.current
    pointerStart.current = null

    if (swipeDistance > 45) goToPrevious()
    if (swipeDistance < -45) goToNext()
  }

  return (
    <div
      className={`slideshow ${className}`}
      role="group"
      aria-label={`${label} photo slideshow`}
      onPointerDown={(event) => { pointerStart.current = event.clientX }}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => { pointerStart.current = null }}
    >
      <div
        className="slideshow-track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        aria-live="off"
      >
        {images.map((image, index) => (
          <div className="slideshow-slide" key={image} aria-hidden={index !== activeIndex}>
            <img src={image} alt={`${label}, photo ${index + 1} of ${images.length}`} draggable="false" />
          </div>
        ))}
      </div>

      {hasMultipleImages && (
        <>
          <button className="slideshow-arrow slideshow-previous" type="button" onClick={goToPrevious} aria-label="Show previous photo">‹</button>
          <button className="slideshow-arrow slideshow-next" type="button" onClick={goToNext} aria-label="Show next photo">›</button>
          <div className="slideshow-dots" aria-label="Choose a photo">
            {images.map((image, index) => (
              <button
                className={`slideshow-dot ${index === activeIndex ? 'is-active' : ''}`}
                key={`${image}-dot`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show photo ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
