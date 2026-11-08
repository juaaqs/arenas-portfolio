import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import './App.css'

function NotFound() {
  return <section className="not-found"><p className="eyebrow">404 · PAGE NOT FOUND</p><h1>Looks like a<br /><span className="display-italic">wrong turn.</span></h1><a className="button button-dark" href="/">BACK TO HOME <span>↗</span></a></section>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
