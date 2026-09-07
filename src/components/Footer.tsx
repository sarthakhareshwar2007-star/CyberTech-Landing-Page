import { Cpu, Github, Twitter, Disc } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cyber-black border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Cpu className="text-neon-purple w-6 h-6" />
            <span className="text-lg font-bold tracking-widest text-white uppercase font-mono">
              Cyber<span className="text-neon-purple">Tech</span>
            </span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-neon-blue transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-slate-500 hover:text-neon-blue transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-slate-500 hover:text-neon-blue transition-colors">
              <Disc size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-900 pt-8 text-sm font-mono text-slate-600">
          <p>&copy; 2077 CyberTech Corp. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-neon-blue">Privacy Policy</a>
            <a href="#" className="hover:text-neon-blue">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
