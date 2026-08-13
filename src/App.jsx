import { useEffect, useState } from "react";
import IndexRail from "./components/IndexRail";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import TurningPoint from "./components/TurningPoint";
import Results from "./components/Results";
import Closing from "./components/Closing";
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
      <MobileNav activeId={activeId} />
      <main className="md:pl-14 lg:pl-16">
        <Hero />
        <Problem />
        <TurningPoint />
        <Results />
        <Closing />
        <Footer />
      </main>
    </div>
  );
}

export default App
