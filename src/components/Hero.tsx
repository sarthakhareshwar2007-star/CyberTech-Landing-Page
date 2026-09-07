import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-black pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Glowing orb effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 animate-float"
        >
           {/* Cybernetic geometric center art placeholder */}
           <div className="w-32 h-32 border border-neon-blue/40 rounded-full flex items-center justify-center relative bg-cyber-black/50 backdrop-blur-sm">
             <div className="w-24 h-24 border border-neon-purple/50 rounded-full rotate-45 flex items-center justify-center">
                <Terminal className="text-neon-blue w-10 h-10 animate-pulse" />
             </div>
             <div className="absolute inset-0 border-2 border-dashed border-neon-blue/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
           </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue mb-8 font-mono text-sm uppercase tracking-widest"
        >
          <Terminal size={14} />
          <span>System v2.4 Online</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase mb-6"
        >
          Transcend <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
            Flesh & Bone
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10 font-light"
        >
          Upgrade your biological vessel with state-of-the-art cybernetic enhancements. Experience reality beyond natural limitations.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-neon-blue text-cyber-black font-bold font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all hover:box-shadow-neon flex items-center justify-center gap-2 group border border-neon-blue">
            Request Upgrade
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <button className="px-8 py-4 bg-transparent text-white border border-slate-700 hover:border-neon-blue hover:text-neon-blue font-bold font-mono uppercase tracking-widest transition-all">
            View Catalog
          </button>
        </motion.div>
      </div>

      {/* Decorative tech lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent"></div>
      <div className="absolute left-10 top-0 w-px h-full bg-gradient-to-b from-transparent via-neon-blue/20 to-transparent hidden lg:block"></div>
      <div className="absolute right-10 top-0 w-px h-full bg-gradient-to-b from-transparent via-neon-purple/20 to-transparent hidden lg:block"></div>
    </section>
  );
}
