import { useEffect } from 'react'
import { BrowserRouter, Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import './App.css'

const achievements = [
  ['01', 'Top 1 Movie', 'Earth Science'],
  ['02', 'Football Citymeet', '2019 · Champion'],
  ['03', 'Football Grassroots', 'Champion'],
  ['04', 'SGFC 1st Futsal Cup', '2022 · Champion'],
  ['05', 'SGFC 2nd Futsal Cup', '2022 · Champion'],
  ['06', 'PFF Qualifier', 'Philippine Football Federation'],
  ['07', 'OCPRISAA Football', '2019 · Bronze'],
  ['08', 'OCPRISAA Chess', '2019 · Bronze'],
  ['09', 'Rubik’s Cube Qualifier', '2018–2019'],
  ['10', 'Sepak Takraw', '2022 · Silver'],
  ['11', 'Sudoku Qualifier', 'Problem solving'],
  ['12', 'Top 1 Book Cover Making', '2024'],
  ['13', 'Academic Excellence Awardee', '2023'],
  ['14', 'Chairman’s Futsal Cup', '2022 · Champion'],
  ['15', 'Best Projectile Motion Model', '2023'],
]

const projects = [
  { number: '01', title: 'My Portfolio', type: 'WEB DESIGN', description: 'A personal space to share my journey, achievements, and the projects I create as an IT student.', mark: 'A.' },
  { number: '02', title: 'Football & Futsal', type: 'SPORTS · 9 YEARS', description: 'A growing record of the teams, tournaments, and lessons that have shaped me as a player.', mark: '09' },
  { number: '03', title: 'Projectile Motion Model', type: 'PHYSICS · 2023', description: 'A classroom model that brings projectile motion to life through a hands-on demonstration.', mark: '↗' },
]

function Reveal({ children, className = '' }) {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
  return <div className={`reveal ${className}`}>{children}</div>
}

function Layout() {
  const location = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [location.pathname])
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="wordmark" to="/" aria-label="Juaquin Arenas home"><span className="wordmark-icon">A</span><span>JUAQUIN <b>ARENAS</b></span></Link>
        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink><NavLink to="/about">About</NavLink><NavLink to="/projects">Projects</NavLink><NavLink to="/contact">Contact</NavLink>
        </nav>
        <Link className="header-cta" to="/contact">LET’S CONNECT <span>↗</span></Link>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer"><Link className="wordmark footer-mark" to="/"><span className="wordmark-icon">A</span><span>JUAQUIN <b>ARENAS</b></span></Link><span>Built with curiosity &amp; a little extra effort.</span><span>© 2026 JUAQUIN ARENAS</span></footer>
    </div>
  )
}

function PhotoPlaceholder({ large = false }) {
  return <div className={`photo-placeholder has-photo ${large ? 'photo-large' : ''}`}><img className="portrait-image" src="/images/main.jpg" alt="Juaquin Arenas outdoors" /><span className="photo-index">PHOTO · 01</span></div>
}

function Home() {
  return <>
    <section className="hero-section">
      <div className="hero-copy"><div className="eyebrow"><span className="status-dot" /> IT STUDENT · ATHLETE · BUILDER</div>
        <h1>Hi, I’m<br /><span className="name-line">Juaquin <span className="accent-text">Arenas.</span></span></h1>
        <p className="hero-description">A curious mind, a competitive spirit, and a love for figuring things out — in code, on the pitch, and everywhere in between.</p>
        <div className="hero-actions"><Link className="button button-dark" to="/projects">EXPLORE MY WORK <span>↗</span></Link><Link className="text-link" to="/about">A LITTLE ABOUT ME <span>↓</span></Link></div>
        <div className="hero-note"><span className="note-line" /> BASED IN OLONGAPO CITY, PH</div>
      </div>
      <div className="hero-visual"><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><PhotoPlaceholder large /><div className="float-card"><span className="float-icon">✳</span><span><b>9 YEARS</b><small>ON THE PITCH</small></span></div><div className="round-stamp">LEARN<br />· PLAY ·<br />REPEAT</div></div>
      <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-arrow">↓</span><span className="hero-bottom-right">01 / 04</span></div>
    </section>
    <section className="intro-strip"><span className="strip-label">A LITTLE INTRO</span><p>Currently studying <b>Information Technology</b> at Gordon College, balancing class projects with football, futsal, and a never-ending list of things I want to learn.</p><Link to="/about" className="circle-arrow">↗</Link></section>
    <section className="home-highlights section-pad"><div className="section-heading reveal"><div><div className="eyebrow">A FEW THINGS I’VE DONE</div><h2>Small wins.<br /><span className="serif-text">Big memories.</span></h2></div><Link to="/about" className="text-link">SEE ALL ACHIEVEMENTS <span>↗</span></Link></div><div className="highlight-grid">{achievements.slice(0, 3).map(([number, title, detail]) => <Reveal key={number}><article className="highlight-card"><div className="card-topline"><span>ACHIEVEMENT {number}</span><span>↗</span></div><div className="mini-image"><span>IMAGE SLOT</span><span>ADD PHOTO</span></div><h3>{title}</h3><p>{detail}</p></article></Reveal>)}</div></section>
    <section className="cta-band"><span className="eyebrow">HAVE A PROJECT OR JUST WANT TO SAY HI?</span><div className="cta-row"><h2>Let’s make<br /><span className="serif-text">something good.</span></h2><Link className="button button-light" to="/contact">GET IN TOUCH <span>↗</span></Link></div></section>
  </>
}

function PageIntro({ kicker, title, accent, description }) {
  return <section className="page-intro section-pad"><div className="eyebrow">{kicker}</div><h1>{title}<br /><span className="serif-text accent-text">{accent}</span></h1><p>{description}</p></section>
}

function About() {
  return <>
    <PageIntro kicker="A LITTLE ABOUT ME" title="Student by day." accent="Player by heart." description="A work in progress, in the best possible way. Here’s a little more about where I’m coming from." />
    <section className="about-content section-pad"><div className="about-photo reveal"><PhotoPlaceholder large /><span className="photo-caption">JUAQUIN · OLONGAPO CITY</span></div><div className="about-copy reveal"><div className="eyebrow">THE SHORT VERSION</div><h2>Curious about<br />how things <span className="serif-text">work.</span></h2><p>I’m Juaquin Alejandro P. Arenas, a 3rd year Bachelor of Science in Information Technology student at Gordon College — College of Computer Studies. I’ve loved football since Grade 4 at Kalalake Elementary School, and I’ve been playing for nine years. Away from the pitch, I enjoy chess, Rubik’s cubes, Mobile Legends, traveling, and playing electric guitar.</p><p>Math has always been a strong suit: I earned a 97 in Basic Calculus and a 100 in Mathematics in the Modern World. I like a challenge, whether it comes as a tricky problem, a new skill, or a match in the final minutes.</p><div className="facts-grid"><div><span>STUDYING</span><b>BS Information Technology</b></div><div><span>SCHOOL</span><b>Gordon College</b></div><div><span>YEAR</span><b>3rd Year College</b></div><div><span>HOME BASE</span><b>Olongapo City, PH</b></div><div><span>BIRTHDAY</span><b>March 15, 2006</b></div><div><span>OFF THE CLOCK</span><b>Futsal · Chess · Guitar</b></div></div></div></section>
    <section className="skills-section section-pad"><div className="section-heading"><div><div className="eyebrow">WHAT I BRING</div><h2>Skills in progress<span className="accent-text">.</span></h2></div><p>A first draft — still learning and growing every semester.</p></div><div className="skill-tags"><span>Mathematical thinking</span><span>Problem solving</span><span>Teamwork</span><span>Discipline</span><span>Football &amp; futsal</span><span>Chess</span><span>Creativity</span><span>Curiosity</span></div></section>
    <section className="achievements-section section-pad"><div className="section-heading"><div><div className="eyebrow">MILESTONES &amp; MEMORIES</div><h2>A few proud <span className="serif-text">moments.</span></h2></div><p>Photo spaces are ready for you to add your event pictures later.</p></div><div className="achievement-list">{achievements.map(([number, title, detail]) => <article className="achievement-row" key={number}><span className="achievement-number">{number}</span><div className="achievement-image">＋ <span>ADD IMAGE</span></div><h3>{title}</h3><span className="achievement-detail">{detail}</span><span className="achievement-arrow">↗</span></article>)}</div></section>
  </>
}

function Projects() {
  return <><PageIntro kicker="THINGS I’VE WORKED ON" title="A few projects." accent="More to come." description="An early collection of class work, personal projects, and the activities I’m proud to be part of." /><section className="project-grid section-pad">{projects.map((project) => <Reveal key={project.number}><article className="project-card"><div className={`project-art art-${project.number}`}><span className="art-mark">{project.mark}</span><span className="art-caption">PROJECT · {project.number}</span></div><div className="project-meta"><span>{project.type}</span><span>{project.number}</span></div><h2>{project.title}</h2><p>{project.description}</p><Link to="/contact" className="project-link">LET’S TALK ABOUT IT <span>↗</span></Link></article></Reveal>)}</section><section className="cta-band"><span className="eyebrow">GOOD THINGS START WITH A CONVERSATION</span><div className="cta-row"><h2>Got an idea?<br /><span className="serif-text">I’m all ears.</span></h2><Link className="button button-light" to="/contact">SAY HELLO <span>↗</span></Link></div></section></>
}

function Contact() {
  return <><PageIntro kicker="OPEN FOR A HELLO" title="Let’s talk." accent="I’m listening." description="Have an idea, want to talk football, or just want to say hi? I’d be happy to hear from you." /><section className="contact-section section-pad"><div className="contact-card"><span className="eyebrow">REACH OUT ANYTIME</span><h2>There’s always room<br />for a <span className="serif-text">good conversation.</span></h2><a className="contact-link" href="mailto:juaquinarenas15@gmail.com"><span>EMAIL</span><b>juaquinarenas15@gmail.com</b><span>↗</span></a><a className="contact-link" href="tel:+639569078494"><span>PHONE</span><b>+63 956 907 8494</b><span>↗</span></a><div className="contact-note"><span className="status-dot" /> CURRENTLY STUDYING &amp; OPEN TO CONNECTING</div></div><div className="contact-decoration"><span>✳</span><p>Make it<br />happen.</p><div>OLONGAPO CITY<br />PHILIPPINES</div></div></section></>
}

function App() {
  return <BrowserRouter><Routes><Route element={<Layout />}><Route index element={<Home />} /><Route path="about" element={<About />} /><Route path="projects" element={<Projects />} /><Route path="contact" element={<Contact />} /><Route path="*" element={<Home />} /></Route></Routes></BrowserRouter>
}

export default App
