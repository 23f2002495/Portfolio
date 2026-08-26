import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects/project";
import Experience from "@/components/Experience/Experience";

import Skills from "@/components/Skills/skills";

import Contact from "@/components/Contact/contactSection";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    
      <Experience />

      <Skills />
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}