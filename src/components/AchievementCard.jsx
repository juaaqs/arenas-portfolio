export default function AchievementCard({ achievement, index }) {
  return (
    <article className="achievement-card project-card">
      <div className={`achievement-cover cover-tone-${index % 5} ${achievement.image ? 'has-cover-image' : ''}`}>
        {achievement.image
          ? <img src={achievement.image} alt={`${achievement.title} achievement`} />
          : <div className="achievement-cover-placeholder"><span className="cover-placeholder-mark">＋</span><span>ADD COVER PHOTO</span></div>}
        <span className="achievement-cover-index">{achievement.number} / 15</span>
        <span className="achievement-cover-caption">MILESTONE · {achievement.number}</span>
        <span className="achievement-cover-arrow" aria-hidden="true">↗</span>
      </div>
      <div className="project-card-copy achievement-card-copy">
        <p className="eyebrow">ACHIEVEMENT {achievement.number}</p>
        <h3>{achievement.title}</h3>
        <p className="project-description">{achievement.detail}</p>
      </div>
    </article>
  )
}
