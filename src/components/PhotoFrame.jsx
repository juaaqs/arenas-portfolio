export default function PhotoFrame({ className = '', label = 'PHOTO · 01', image = '/images/main.jpg' }) {
  return (
    <figure className={`photo-frame ${className}`}>
      <img src={image} alt="Juaquin Arenas outdoors" />
      <figcaption>{label}</figcaption>
      <span className="photo-frame-cross" aria-hidden="true">+</span>
    </figure>
  )
}
