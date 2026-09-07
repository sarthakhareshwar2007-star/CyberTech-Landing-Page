import { motion } from 'motion/react';
import { Cpu, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-cyber-black/80 backdrop-blur-md border-b border-neon-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer">
            <Cpu className="text-neon-blue w-8 h-8" />
            <span className="text-xl font-bold tracking-widest text-white uppercase font-mono">
              Cyber<span className="text-neon-blue">Tech</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Modules', 'Protocol', 'Specs', 'Tiers'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-neon-blue hover:text-shadow-neon transition-all px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider font-mono"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <button className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-slate-800 rounded-sm group border border-neon-blue/50 hover:border-neon-blue transition-all hover:box-shadow-neon">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-neon-blue rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative group-hover:text-cyber-black transition-colors duration-300">INITIALIZE</span>
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6 text-neon-blue" /> : <Menu className="h-6 w-6 text-neon-blue" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-cyber-black border-b border-neon-blue/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Modules', 'Protocol', 'Specs', 'Tiers'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium font-mono uppercase"
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 bg-neon-blue/10 border border-neon-blue text-neon-blue px-4 py-2 font-mono uppercase tracking-widest hover:bg-neon-blue hover:text-cyber-black transition-colors">
              Initialize
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
