import { useEffect, useState } from "react";
import IndexRail from "./components/IndexRail";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { sections } from "./data/content";

function App() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-ink text-paper">
      <IndexRail activeId={activeId} />
      <main className="md:pl-14 lg:pl-16">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App
