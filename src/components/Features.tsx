import { motion } from 'motion/react';
import { BrainCircuit, Eye, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-neon-purple" />,
    title: 'Neural Linkage',
    description: 'Direct interface with global data streams. Process information at petabyte speeds.',
  },
  {
    icon: <Eye className="w-8 h-8 text-neon-blue" />,
    title: 'Optic Enhancement',
    description: 'See beyond the visible spectrum. Infrared, ultraviolet, and augmented overlays.',
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: 'Kinetic Boost',
    description: 'Subdermal synthetic muscle fibers increase strength and reaction time by 400%.',
  },
  {
    icon: <Shield className="w-8 h-8 text-emerald-400" />,
    title: 'Dermal Armor',
    description: 'Titanium-laced carbon nanotubes woven directly into the epidermis for ultimate protection.',
  },
];

export default function Features() {
  return (
    <section id="modules" className="py-24 bg-cyber-black relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Core <span className="text-neon-blue">Modules</span></h2>
          <p className="text-slate-400 font-mono text-sm uppercase tracking-widest">Select your augmentations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cyber-gray p-6 border border-slate-800 hover:border-neon-blue transition-all group relative overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-6 inline-block p-3 bg-slate-900 border border-slate-700 group-hover:border-neon-blue/50 rounded-sm relative z-10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide relative z-10 group-hover:text-neon-blue transition-colors">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">{feature.description}</p>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
