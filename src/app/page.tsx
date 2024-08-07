'use client'

import Intro from "./intro";
import Projects from './projects';
import About from './about';
import Journey from "./journey";
import { useEffect, useState } from "react";


export default function Home() {
    const [visbileSection, setVisibleSection] = useState<number>(1);
    useEffect(() => {
      const handleScroll = () => {
        const viewportHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

        const first = viewportHeight - 250;
        const second = first + viewportHeight + 50;
        const third = second + viewportHeight + 100;

        
        if (scrollPosition < first) {
          setVisibleSection(1);
        } else if (scrollPosition < second ) {
          setVisibleSection(2);
        } else if (scrollPosition < third) {
          setVisibleSection(3);
        } else {
          setVisibleSection(4);
        }


      };
      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);


  return (
    <div>
      <section id="Introduction" className="pt-28 h-screen ">
        <Intro />
      </section>
      <section id="Projects" className={`h-screen duration-300 ${visbileSection === 2 ? 'opacity-1' : 'opacity-0'}`}>
        <Projects />
      </section>
      <section id='About' className={`h-screen duration-300 ${visbileSection === 3 ? 'opacity-1' : 'opacity-0'}`}>
        <About />
      </section>
      <section id="Progress" className={`h-screen duration-300 ${visbileSection === 4 ? 'opacity-1' : 'opacity-0'}`}>
        <Journey />
      </section>
    </div>
  )
}