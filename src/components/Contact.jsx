import { Mail, ArrowUpRight, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center bg-slate-900/30 border border-white/5 p-12 md:p-24 rounded-[3rem] backdrop-blur-sm relative overflow-hidden">
       
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[120px]"></div>

        <h3 className="text-slate-500 font-mono text-xs uppercase tracking-[0.4em] mb-6"></h3>
        
        <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none">
          HAVE A PROJECT <br /> 
          <span className="text-cyan-400 italic underline decoration-white/10">IN MIND?</span>
        </h2>

    
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
       
          <a 
            href="mailto:tejastulaskar28@gmail.com" 
            className="w-full md:w-auto inline-flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-400 hover:scale-105 transition-all group shadow-xl shadow-white/5"
          >
            Say Hello <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>

          
          <a 
            href="/Resume.pdf" 
            download="Tejas_Tulaskar_Resume.pdf"
            className="w-full md:w-auto inline-flex items-center justify-center gap-4 border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/5 hover:border-white/20 transition-all group"
          >
            Get Resume <FileText className="w-5 h-5 text-cyan-400" />
          </a>
        </div>

       <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-6 md:gap-12 border-t border-white/5 pt-12 text-[10px] font-bold tracking-[0.3em]">
  
  <a 
    href="mailto:tejastulaskar0@gmail.com" 
    className="text-slate-500 hover:text-white transition-colors uppercase px-2 py-1"
  >
    Email
  </a>

  <a 
    href="https://www.linkedin.com/in/tejas-tulaskar-3925b9290" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-slate-500 hover:text-white transition-colors uppercase px-2 py-1"
  >
    LinkedIn
  </a>

  <a 
    href="https://github.com/Tejas2895" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-slate-500 hover:text-white transition-colors uppercase px-2 py-1"
  >
    GitHub
  </a>

  <a 
    href="https://www.instagram.com/itz__tejas__28?igsh=MTN6MGIybmFhY2VlZQ==" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-slate-500 hover:text-white transition-colors uppercase px-2 py-1"
  >
    Instagram
  </a>
  
</div>

      
        <p className="mt-12 text-slate-700 text-[8px] font-mono tracking-widest uppercase italic">
          Handcrafted by me &copy; 2026
        </p>
      </div>
    </section>
  );
}