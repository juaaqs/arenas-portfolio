export default function PhotoFrame({ className = '', label = 'PHOTO · 01' }) {
  return (
    <figure className={`photo-frame ${className}`}>
      <img src="/images/main.jpg" alt="Juaquin Arenas outdoors" />
      <figcaption>{label}</figcaption>
      <span className="photo-frame-cross" aria-hidden="true">+</span>
    </figure>
  )
}
