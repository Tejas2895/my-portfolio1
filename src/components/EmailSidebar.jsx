import { motion } from "framer-motion";

export default function EmailSidebar() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="fixed bottom-0 right-10 hidden lg:flex flex-col items-center gap-24 z-50"
    >
   
      <a 
        href="mailto:tejastulaskar28@gmail.com" 
        className="text-slate-500 font-mono text-xs tracking-[0.3em] [writing-mode:vertical-rl] hover:text-cyan-400 hover:-translate-y-2 transition-all duration-300 hidden lg:flex"
      >
        tejastulaskar0@gmail.com
      </a>

     
      <div className="w-[1px] h-32 bg-slate-800"></div>
    </motion.div>
  );
}