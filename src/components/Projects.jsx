import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const myProjects = [
  {
    title: "e-GramSeva",
    category: "Full Stack • Machine Learning",
    desc: "A digital transformation platform for village administration to solve inter-department issues efficiently.",
    tech: ["EJS", "CSS3", "Node.js", "Express", "MongoDB" ],
    link: "#",
  },
  {
    title: "Spotify Clone",
    category: "Frontend • UI/UX",
    desc: "A high-fidelity music streaming interface with real-time audio controls and dynamic playlist management.",
    tech: ["JavaScript", "HTML5", "CSS3", "Vite"],
    link: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
       
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Selected <span className="text-cyan-400 italic">Work</span>
          </h2>
          <div className="h-[2px] flex-grow bg-white/10 mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {myProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group relative bg-[#0a0f1e] rounded-3xl p-8 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
            >
             
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[100px] group-hover:bg-cyan-500/20 transition-all"></div>
              
              <span className="text-xs font-mono text-cyan-500 tracking-widest uppercase mb-4 block">
                {project.category}
              </span>
              
              <h3 className="text-3xl font-bold text-white mb-4 flex justify-between items-center">
                {project.title}
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
              </h3>
              
              <p className="text-slate-400 leading-relaxed mb-8">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-[10px] font-bold tracking-tighter border border-white/10 rounded-full text-slate-300 uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}