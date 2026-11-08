import { Link } from 'react-router-dom'

export default function ProjectCard({ project, compact = false }) {
  return (
    <article className={`project-card ${compact ? 'project-card-compact' : ''}`}>
      <div className={`project-art ${project.theme}`}>
        <span className="project-art-number">{project.number} / 03</span>
        <span className="project-art-mark">{project.mark}</span>
        <span className="project-art-caption">{project.type}</span>
        <span className="project-art-arrow" aria-hidden="true">↗</span>
      </div>
      <div className="project-card-copy"><p className="eyebrow">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><Link to="/contact" className="inline-link">MORE ABOUT THIS <span>↗</span></Link></div>
    </article>
  )
}
