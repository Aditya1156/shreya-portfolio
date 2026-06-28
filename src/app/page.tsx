import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import MarqueeBig from "@/components/MarqueeBig";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Statement from "@/components/Statement";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Preloader />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <Hero />
      <MarqueeBig />
      <About />
      <Skills />
      <Statement />
      <Experience />
      <Projects />
      <MarqueeBig reverse />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
