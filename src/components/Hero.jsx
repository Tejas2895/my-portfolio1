import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col justify-center py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
       
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Available for work</span>
        </div>

       
        <h1 className="text-5xl md:text-7xl lg:text-[120px] font-black tracking-tighter leading-[0.85] text-white">
  CREATING <br />
  <span className="text-slate-800 outline-text">DIGITAL</span> SOLUTIONS
</h1>
        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="text-lg md:text-xl text-slate-400 max-w-md font-medium leading-relaxed">
            I'm Tejas, a Computer Science student building modern web applications with a focus on <span className="text-white">user experience</span> and <span className="text-white">clean architecture</span>.
          </p>
          
         
          <div className="flex gap-4">
          
            <a 
              href="https://www.linkedin.com/in/tejas-tulaskar-3925b9290" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-all shadow-lg shadow-white/5">
                Get in touch
              </button>
            </a>

          
            <a href="#contact">
              <button className="px-8 py-4 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all">
                Let's Talk
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}