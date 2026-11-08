import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="topline"><span><i className="availability-dot" /> AVAILABLE FOR LEARNING &amp; COLLABORATION</span><span>OLONGAPO CITY · PHILIPPINES</span></div>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Juaquin Arenas home" onClick={closeMenu}><span className="brand-mark">J<span>.</span></span><span className="brand-name">JUAQUIN<br />ARENAS</span></Link>
        <button className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <NavLink to="/" end onClick={closeMenu}>HOME</NavLink><NavLink to="/about" onClick={closeMenu}>ABOUT</NavLink><NavLink to="/projects" onClick={closeMenu}>PROJECTS</NavLink><NavLink to="/contact" onClick={closeMenu}>CONTACT</NavLink>
        </nav>
        <Link className="header-cta" to="/contact" onClick={closeMenu}>LET’S TALK <span>↗</span></Link>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <div className="footer-heading"><p className="eyebrow">THANKS FOR STOPPING BY</p><Link to="/contact">Have a good one.<br /><span>Let’s keep in touch.</span> ↗</Link></div>
        <div className="footer-bottom"><Link className="footer-brand" to="/">JUAQUIN ARENAS <span>© 2026</span></Link><span>MADE WITH CURIOSITY IN OLONGAPO CITY</span><Link to="/">BACK TO TOP ↑</Link></div>
      </footer>
    </div>
  )
}
