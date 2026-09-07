import { motion } from 'motion/react';
import { Fingerprint, Dna, Network } from 'lucide-react';

const steps = [
  {
    icon: <Fingerprint className="w-6 h-6 text-neon-blue" />,
    title: 'Biometric Assessment',
    description: 'Full body scan to map your unique genetic markers and identify optimal cybernetic integration points.',
  },
  {
    icon: <Dna className="w-6 h-6 text-neon-purple" />,
    title: 'Surgical Implantation',
    description: 'Precision automated nanobot surgery ensures zero tissue rejection and perfect synthetic fusion.',
  },
  {
    icon: <Network className="w-6 h-6 text-emerald-400" />,
    title: 'Neural Calibration',
    description: 'Syncing your wetware with the new hardware. Welcome to the connected collective.',
  },
];

export default function Process() {
  return (
    <section id="protocol" className="py-24 bg-cyber-black relative border-t border-slate-900 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4"
          >
            Integration <span className="text-neon-purple">Protocol</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 font-mono text-sm uppercase tracking-widest"
          >
            3-Phase Ascension Process
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-purple/50 to-transparent md:-translate-x-1/2"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className="md:w-1/2 flex-1 pl-16 md:pl-0 md:px-12 w-full">
                  <div className={`bg-cyber-gray p-6 border border-slate-800 rounded-lg hover:border-neon-purple/50 transition-all ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="font-mono text-neon-purple text-sm mb-2 opacity-80">PHASE 0{index + 1}</div>
                    <h3 className="text-xl font-bold uppercase tracking-wider mb-3 text-white">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-cyber-black border-2 border-neon-purple rounded-full flex items-center justify-center box-shadow-neon z-10">
                  {step.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
