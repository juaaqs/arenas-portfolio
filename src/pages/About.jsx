import AchievementCard from '../components/AchievementCard'
import PageTitle from '../components/PageTitle'
import PhotoFrame from '../components/PhotoFrame'
import Reveal from '../components/Reveal'
import { achievements, skills } from '../data/portfolio'

export default function About() {
  return <>
    <PageTitle number="01" eyebrow="THE PERSON BEHIND THE PORTFOLIO" description="Still learning, still playing, still looking for the next challenge.">A student.<br /><span className="display-italic">A teammate.</span></PageTitle>
    <section className="section about-story">
      <div className="about-photo-column"><PhotoFrame className="about-photo" label="JUAQUIN · OLONGAPO CITY" image="/images/main2.jpg"/><span className="photo-aside">A FEW YEARS OF LEARNING<br />A LIFETIME OF PLAYING</span></div>
      <div className="about-copy"><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Curious about<br />how things <span className="display-italic">work.</span></h2><p>I’m Juaquin Alejandro P. Arenas, a 3rd year Bachelor of Science in Information Technology student at Gordon College — College of Computer Studies. I’ve loved football since Grade 4 at Kalalake Elementary School, and I’ve been playing for nine years.</p><p>Away from the pitch, I enjoy chess, Rubik’s cubes, Mobile Legends, traveling, and playing electric guitar. Math is a favorite too: I earned a 97 in Basic Calculus and a 100 in Mathematics in the Modern World.</p><div className="about-facts"><div><span>STUDYING</span><b>BS Information Technology</b></div><div><span>SCHOOL</span><b>Gordon College</b></div><div><span>YEAR</span><b>3rd Year College</b></div><div><span>BIRTHDAY</span><b>March 15, 2006</b></div><div><span>FROM</span><b>Olongapo City, PH</b></div><div><span>OFF THE CLOCK</span><b>Futsal · Chess · Guitar</b></div></div></div>
    </section>
    <section className="numbered-highlights"><div className="section numbered-head"><span className="section-index">02 / A FEW THINGS I’VE PICKED UP</span><h2>Little by <span className="display-italic">little.</span></h2></div><div className="numbered-list">{[
      ['01', 'Math has my attention', '97 in Basic Calculus. 100 in Mathematics in the Modern World.'],
      ['02', 'I’ve been a team player', 'Started playing football in Grade 4. Nine years and counting.'],
      ['03', 'There’s always another puzzle', 'Chess, Sudoku, and Rubik’s cubes are my kind of quiet challenge.'],
      ['04', 'I like to make things', 'Class projects, book covers, and a little music on electric guitar.'],
    ].map(([number, title, copy]) => <Reveal key={number}><article className="numbered-row"><span>{number}</span><h3>{title}</h3><p>{copy}</p><span className="row-arrow">↗</span></article></Reveal>)}</div></section>
    <section className="section skills-section"><div className="section-heading"><span className="section-index">03 / IN PROGRESS</span><h2>Skills &amp; <span className="display-italic">strengths.</span></h2></div><p className="section-subtitle">A first draft — still learning and growing every semester.</p><div className="skill-list">{skills.map((skill, index) => <span key={skill}><i>0{index + 1}</i>{skill}</span>)}</div></section>
    <section className="section achievements-section" id="achievements"><div className="section-heading"><span className="section-index">04 / MILESTONES &amp; MEMORIES</span><h2>A few proud <span className="display-italic">moments.</span></h2></div><p className="section-subtitle">Fifteen moments worth remembering. Each card has space for its cover photo.</p><div className="achievement-cards-grid">{achievements.map((achievement, index) => <Reveal key={achievement.number} delay={(index % 3) * 75}><AchievementCard achievement={achievement} index={index} /></Reveal>)}</div></section>
  </>
}
