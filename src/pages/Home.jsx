import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee'
import PhotoFrame from '../components/PhotoFrame'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { achievements, milestones, projects } from '../data/portfolio'

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="hero-grid-mark" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow"><span className="availability-dot" /> IT STUDENT · ATHLETE · BUILDER</p>
        <h1>Juaquin<br /><span>Arenas<span className="hero-period">.</span></span></h1>
        <div className="hero-bottom-row"><p>Curious by nature.<br />Competitive by heart.</p><p className="hero-summary">I’m an IT student and football player who loves a challenge — on the pitch, in class, and in whatever I’m learning next.</p></div>
        <div className="hero-actions"><Link className="button button-lime" to="/projects">EXPLORE MY WORK <span>↗</span></Link><Link className="button button-outline" to="/about">GET TO KNOW ME <span>↓</span></Link></div>
        <span className="hero-index">01 — INTRODUCTION</span>
      </div>
      <div className="hero-photo-wrap"><PhotoFrame className="hero-photo" /><div className="hero-photo-label"><b>9 YEARS</b><span>IN THE GAME</span></div><span className="hero-side-note">LEARN · PLAY · REPEAT</span><span className="hero-cross" aria-hidden="true">✳</span></div>
      <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><span>↓</span></div>
    </section>

    <Marquee items={['IT STUDENT', 'FOOTBALL PLAYER', 'FUTSAL', 'MATH ENTHUSIAST', 'ALWAYS LEARNING']} />

    <section className="section intro-section">
      <div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>Still figuring it out.<br /><span className="display-italic">And loving it.</span></h2></div>
      <div className="intro-layout"><p className="intro-lede">I’m currently studying <strong>Information Technology</strong> at Gordon College, while football, futsal, and curiosity keep me busy outside the classroom.</p><div className="intro-detail"><p>From my first school team in Grade 4 to competing in city and regional tournaments, sport has taught me patience, discipline, and how to show up for a team.</p><Link to="/about" className="inline-link">MORE ABOUT ME <span>↗</span></Link></div></div>
      <div className="milestone-grid">{milestones.map((item) => <Reveal key={item.number}><article className="milestone-card"><span className="milestone-number">{item.number}</span><p className="eyebrow">{item.label}</p><h3>{item.title}</h3><p>{item.copy}</p></article></Reveal>)}</div>
    </section>

    <section className="work-section">
      <div className="section section-work-head"><div><span className="section-index">02 / SELECTED WORK</span><h2>Made with<br /><span className="display-italic">a little heart.</span></h2></div><p>A first look at class projects, personal work, and the activities that keep teaching me something new.</p><Link to="/projects" className="button button-dark">ALL PROJECTS <span>↗</span></Link></div>
      <div className="work-grid">{projects.map((project, index) => <Reveal key={project.number} delay={index * 100}><ProjectCard project={project} compact /></Reveal>)}</div>
    </section>

    <section className="section achievement-preview">
      <div className="section-heading"><span className="section-index">03 / PROUD MOMENTS</span><h2>Good days.<br /><span className="display-italic">Hard work.</span></h2></div>
      <div className="achievement-preview-list">{achievements.slice(1, 5).map((item) => <article key={item.number} className="achievement-preview-row"><span>{item.number}</span><h3>{item.title}</h3><p>{item.detail}</p><span aria-hidden="true">↗</span></article>)}</div>
      <Link to="/about#achievements" className="inline-link">SEE MY ACHIEVEMENTS <span>↗</span></Link>
    </section>

    <section className="contact-banner"><div className="contact-banner-star" aria-hidden="true">✳</div><p className="eyebrow">HAVE A PROJECT, A QUESTION, OR A FOOTBALL STORY?</p><h2>Say <span className="display-italic">hello.</span></h2><Link to="/contact" className="button button-light">LET’S TALK <span>↗</span></Link><span className="banner-index">04 — CONTACT</span></section>
  </>
}
