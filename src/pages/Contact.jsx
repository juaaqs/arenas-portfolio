import PageTitle from '../components/PageTitle'
import Slideshow from '../components/Slideshow'

export default function Contact() {
  return <>
    <PageTitle
      number="03"
      eyebrow="LET’S CHAT, PLAY, OR LEARN TOGETHER"
      description="Playing ML or CODM makes my day so much better. Feel free to message me for a chat or if you’re looking for a mathematics tutor."
    >
      Tara ML<br /><span className="display-italic">or CODM</span>
    </PageTitle>
    <section className="section contact-page">
      <div className="contact-copy">
        <p className="eyebrow">REACH OUT ANYTIME</p>
        <h2>There’s room<br />for a <span className="display-italic">good one.</span></h2>
        <p>You can message me to chat about games, school, or football. If you’re looking for a mathematics tutor, contact me through any of the links below.</p>
        <div className="contact-links">
          <a href="mailto:juaquinarenas15@gmail.com" aria-label="Email Juaquin Arenas">
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
            </span>
            <b>juaquinarenas15@gmail.com</b><i aria-hidden="true">↗</i>
          </a>
          <a href="tel:+639569078494" aria-label="Call Juaquin Arenas">
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a14 14 0 0 1-8-8l2-2-2-5Z" /></svg>
            </span>
            <b>+63 956 907 8494</b><i aria-hidden="true">↗</i>
          </a>
          <a href="https://www.facebook.com/waks.piq" target="_blank" rel="noreferrer" aria-label="Juaquin Arenas on Facebook">
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.2v3.2H10V21h3.4Z" /></svg>
            </span>
            <b>Juaquin Arenas</b><i aria-hidden="true">↗</i>
          </a>
          <a href="https://www.instagram.com/juaaqs/" target="_blank" rel="noreferrer" aria-label="juaaqs on Instagram">
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>
            </span>
            <b>juaaqs</b><i aria-hidden="true">↗</i>
          </a>
        </div>
      </div>
      <div className="contact-art">
        <Slideshow
          className="contact-art-slideshow"
          images={['/images/contact-con.jpeg', '/images/con2.jpg']}
          label="Contact artwork"
        />
        <span>✳</span>
        <p>MAKE<br />IT<br /><em>HAPPEN.</em></p>
        <small>OLONGAPO CITY<br />PHILIPPINES</small>
        <div className="contact-art-ring" />
      </div>
    </section>
  </>
}
