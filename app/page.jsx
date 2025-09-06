import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/LearningJourney";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
