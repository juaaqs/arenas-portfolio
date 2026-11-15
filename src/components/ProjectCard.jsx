import { Link } from 'react-router-dom'

export default function ProjectCard({ project, compact = false, onOpen }) {
  const artContent = (
    <>
      {project.image && <><img className="project-art-image" src={project.image} alt={`${project.title} cover`} /><span className="project-art-shade" /></>}
      <span className="project-art-number">{project.number} / 03</span>
      <span className="project-art-mark">{project.mark}</span>
      <span className="project-art-caption">{project.type}</span>
      <span className="project-art-arrow" aria-hidden="true">↗</span>
    </>
  )

  return (
    <article className={`project-card ${compact ? 'project-card-compact' : ''}`}>
      {onOpen ? (
        <button
          className={`project-art project-art-trigger ${project.theme} ${project.image ? 'has-project-image' : ''}`}
          type="button"
          onClick={onOpen}
          aria-label={`Open ${project.title} photos and details`}
        >
          {artContent}
        </button>
      ) : (
        <div className={`project-art ${project.theme} ${project.image ? 'has-project-image' : ''}`}>
          {artContent}
        </div>
      )}
      <div className="project-card-copy">
        <p className="eyebrow">{project.type}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {project.website ? (
          <a href={project.website} className="inline-link" target="_blank" rel="noreferrer">VISIT PROJECT <span>↗</span></a>
        ) : onOpen ? (
          <button className="inline-link project-open-link" type="button" onClick={onOpen}>VIEW PROJECT <span>↗</span></button>
        ) : (
          <Link to="/contact" className="inline-link">MORE ABOUT THIS <span>↗</span></Link>
        )}
      </div>
    </article>
  )
}
