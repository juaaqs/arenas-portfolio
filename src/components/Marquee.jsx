export default function Marquee({ items, className = '' }) {
  const row = items.map((item, index) => <span className="marquee-item" key={`${item}-${index}`}>{item}<i aria-hidden="true">✳</i></span>)
  return <div className={`marquee ${className}`} aria-label={items.join(', ')}><div className="marquee-track">{row}{items.map((item, index) => <span className="marquee-item" key={`repeat-${item}-${index}`} aria-hidden="true">{item}<i>✳</i></span>)}</div></div>
}
