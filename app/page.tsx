import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "<Bilal Pervez />",
};

export default function Home() {
  return (
    <div className="z-0 h-screen overflow-x-hidden overflow-y-scroll text-white bg-gray-900 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-blue-900/70 snap-y snap-mandatory scroll-p-14">
      <Header />
      {/*  Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About Section */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/*  Experience Section */}
      <section id="experience" className="">
        <Experiences />
      </section>
      {/*  Projects Section */}
      <section id="projects" className="">
        <Projects />
      </section>
      {/* Skills Section */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/*  Contact me */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
}
