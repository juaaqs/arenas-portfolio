export default function PageTitle({ number, eyebrow, children, description, dark = false }) {
  return (
    <section className={`page-title ${dark ? 'page-title-dark' : ''}`}>
      <span className="page-number">{number}</span>
      <div className="page-title-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{children}</h1>
        {description && <p className="page-title-description">{description}</p>}
      </div>
    </section>
  )
}
