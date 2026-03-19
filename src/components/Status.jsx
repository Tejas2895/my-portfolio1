export default function Status() {
  return (
    <div className="px-10 max-w-5xl mx-auto mb-20 font-sans">
      <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl flex flex-wrap gap-8 items-center backdrop-blur-sm">
        <div>
          <span className="text-slate-500 text-[10px] uppercase block mb-1 font-mono tracking-widest text-cyan-500/80">Current Focus</span>
          <span className="text-white font-medium text-sm">• Web Development • Scalable Systems</span>
        </div>
        <div className="h-10 w-[1px] bg-slate-800 hidden md:block"></div>
        <div>
          <span className="text-slate-500 text-[10px] uppercase block mb-1 font-mono tracking-widest text-cyan-500/80">Working On</span>
          <span className="text-white font-medium text-sm">e-GramSeva Platform</span>
        </div>
        <div className="ml-auto">
          <span className="flex items-center gap-2 text-green-400 text-[10px] font-mono uppercase tracking-widest">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Open for Internships
          </span>
        </div>
      </div>
    </div>
  );
}