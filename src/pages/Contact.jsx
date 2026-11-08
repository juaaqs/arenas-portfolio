import PageTitle from '../components/PageTitle'

export default function Contact() {
  return <>
    <PageTitle number="03" eyebrow="A GOOD CONVERSATION CAN START ANYWHERE" description="Have an idea, want to talk football, or just want to say hi? I’d be happy to hear from you.">Say <span className="display-italic">hello.</span></PageTitle>
    <section className="section contact-page"><div className="contact-copy"><p className="eyebrow">REACH OUT ANYTIME</p><h2>There’s room<br />for a <span className="display-italic">good one.</span></h2><p>Whether it’s a class project, a new idea, or a football story, feel free to get in touch.</p><div className="contact-links"><a href="mailto:juaquinarenas15@gmail.com"><span>EMAIL</span><b>juaquinarenas15@gmail.com</b><i>↗</i></a><a href="tel:+639569078494"><span>PHONE</span><b>+63 956 907 8494</b><i>↗</i></a></div></div><div className="contact-art"><span>✳</span><p>MAKE<br />IT<br /><em>HAPPEN.</em></p><small>OLONGAPO CITY<br />PHILIPPINES</small><div className="contact-art-ring" /></div></section>
  </>
}
