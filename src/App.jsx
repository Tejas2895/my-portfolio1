import Navbar from "./components/Navbar.jsx";
import Cursor from "./components/Cursor.jsx";
import Hero from "./components/Hero.jsx";
import Status from "./components/Status.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import EmailSidebar from "./components/EmailSidebar.jsx"; 
import Contact from "./components/Contact.jsx";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark selection:bg-cyan-500/20 overflow-x-hidden">
      <Cursor />
      <Navbar />
      <EmailSidebar />
      <main>
        <Hero />
        <Status />
        <About />

        {/* SECTION 02: Projects */}
        <div id="projects">
           {/* YAHAN CHANGE KIYA HAI: ProjectsGrid ki jagah Projects */}
           <Projects /> 
        </div>

        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.5em]">
         Designed & Developed by Tejas • 2026 • Amravati, India
        </p>
      </footer>
    </div>
  );
}

export default App;