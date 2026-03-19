import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-4 bg-dark/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Zap size={18} className="text-cyan-400" />
          <span className="font-bold text-white uppercase tracking-tighter">TEJAS TULASKAR .</span>
        </div>

        {/* Desktop Links (Mobile par Hidden)
        <div className="hidden md:flex gap-8 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div> */}
        {/* Desktop Links (Modern & Clear) */}
<div className="hidden md:flex items-center gap-10 text-[12px] font-bold tracking-[0.2em] text-slate-500 uppercase">
  
  <a href="#home" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300 relative group">
    Home
    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
  </a>

  <a href="#about" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300 relative group">
    About
    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
  </a>

  <a href="#projects" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300 relative group">
    Work
    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
  </a>

  <a href="#contact" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300 relative group">
    Contact
    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
  </a>

</div>

     
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

     
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 p-8 flex flex-col gap-6 text-center border-b border-white/10">
          <a href="#home" onClick={() => setIsOpen(false)}>HOME</a>
          <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>WORK</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a>
        </div>
      )}
    </nav>
  );
}