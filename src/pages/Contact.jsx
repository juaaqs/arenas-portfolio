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
          <a href="mailto:juaquinarenas15@gmail.com"><span>EMAIL</span><b>juaquinarenas15@gmail.com</b><i>↗</i></a>
          <a href="tel:+639569078494"><span>PHONE</span><b>+63 956 907 8494</b><i>↗</i></a>
          <a href="https://www.facebook.com/waks.piq" target="_blank" rel="noreferrer"><span>FACEBOOK</span><b>facebook.com/waks.piq</b><i>↗</i></a>
          <a href="https://www.instagram.com/juaaqs/" target="_blank" rel="noreferrer"><span>INSTAGRAM</span><b>instagram.com/juaaqs</b><i>↗</i></a>
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
