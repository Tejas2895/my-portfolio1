import { motion } from "framer-motion";
import myProfileImg from "../assets/my-photo.jpg";

export default function About() {
  const skills = ["React", "Node.js", "MongoDB", "Java", "Tailwind", "Git"];

  return (
    <section id="about" className="py-16 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        
        
        <div className="flex justify-center md:justify-start md:pl-20"> 
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group w-full max-w-[300px] md:max-w-[350px]" 
          >
          
            <div className="absolute -inset-4 bg-cyan-500/10 rounded-3xl blur-2xl group-hover:opacity-50 transition-opacity duration-500"></div>
            
         
            <div className="relative aspect-[3/4] bg-slate-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <img 
                src={myProfileImg}  
                alt="Tejas" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

          
            <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none"></div>
          </motion.div>
        </div>

     
        <div className="space-y-8">
          <h2 className="text-5xl font-black text-white tracking-tighter italic uppercase">
             <span className="text-cyan-400">About Me</span>
          </h2>
          
          <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
            I am a <span className="text-white">Computer Science Student</span> with a passion for building 
            scalable web applications. My journey started with Java, and now I'm deep-diving into 
            the <span className="text-white">MERN Stack</span>. I love solving real-world problems 
            like I did with <span className="italic">e-GramSeva</span>.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center gap-3 group">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform"></div>
                <span className="text-sm font-mono text-slate-300 uppercase tracking-widest">{skill}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}