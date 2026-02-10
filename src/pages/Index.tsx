import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";

const Index = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Education />
    <Certifications />
    <Contact />
  </main>
);

export default Index;
