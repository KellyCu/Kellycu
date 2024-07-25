import Intro from "./intro";
import Projects from './projects';
import About from './about';


export default function Home() {
  return (
    <div>
      <section id="Introduction" className="pt-28 h-screen">
        <Intro />
      </section>
      <section id="Projects" className="h-auto">
        <Projects />
      </section>
      <section id='About' className="h-screen">
        <About />
      </section>
    </div>
  )
}