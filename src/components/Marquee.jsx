export default function Marquee({ items, className = '' }) {
  const repeatedItems = items.map((item, index) => (
    <span className="marquee-item" key={`${item}-${index}`}>
      {item}
      <i aria-hidden="true">✳</i>
    </span>
  ))

  const accessibleLabel = items.join(', ')

  return (
    <div className={`marquee ${className}`} aria-label={accessibleLabel}>
      <div className="marquee-track">
        {repeatedItems}
        {items.map((item, index) => (
          <span
            className="marquee-item"
            key={`repeat-${item}-${index}`}
            aria-hidden="true"
          >
            {item}
            <i>✳</i>
          </span>
        ))}
      </div>
    </div>
  )
}
