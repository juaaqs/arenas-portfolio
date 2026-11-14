import PageTitle from '../components/PageTitle'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projects } from '../data/portfolio'

export default function Projects() {
  return <>
    <PageTitle number="02" eyebrow="CLASS WORK · PERSONAL PROJECTS · SPORT" description="An early collection of the things I’ve made, tried, and learned along the way.">A few things<br /><span className="display-italic">I’ve worked on.</span></PageTitle>
    <section className="section projects-page"><div className="projects-intro"><span className="section-index">THREE STORIES · AND MORE TO COME</span><p>These are first-draft project cards. I’ll keep adding finished class work and personal projects as I make them.</p></div><div className="projects-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <Reveal key={project.number} delay={index * 100}><ProjectCard project={project} /></Reveal>)}</div></section>
    <section className="contact-banner"><div className="contact-banner-star" aria-hidden="true">✳</div><p className="eyebrow">GOOD THINGS START WITH A CONVERSATION</p><h2>Have an <span className="display-italic">idea?</span></h2><a className="button button-light" href="https://www.facebook.com/waks.piq" target="_blank" rel="noreferrer">GET IN TOUCH <span>↗</span></a></section>
  </>
}
