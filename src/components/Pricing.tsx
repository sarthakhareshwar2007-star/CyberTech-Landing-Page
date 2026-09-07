import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Base Synthetic',
    price: '45,000',
    description: 'Essential cybernetic integration for civilian applications.',
    features: ['Standard Neural Link', 'Basic Optical HUD', 'Minor Kinetic Enhancements', '24/7 Tech Support'],
    color: 'text-slate-300',
    borderColor: 'border-slate-700',
    glow: 'hover:border-slate-500',
    popular: false,
  },
  {
    name: 'Nexus Prime',
    price: '120,000',
    description: 'Military-grade hardware for maximum physical and mental ascension.',
    features: ['Quantum Neural Processor', 'Full-Spectrum Vision', 'Subdermal Plating', 'Cognitive Overdrive Module', 'Priority Maintenance'],
    color: 'text-neon-blue',
    borderColor: 'border-neon-blue',
    glow: 'hover:box-shadow-neon border-neon-blue/80',
    popular: true,
  },
  {
    name: 'Ghost in the Shell',
    price: 'CLASSIFIED',
    description: 'Complete bodily replacement. Become one with the network.',
    features: ['Full Prosthetic Body', 'Consciousness Transfer', 'Unlimited Processing', 'Weaponized Appendages'],
    color: 'text-neon-purple',
    borderColor: 'border-neon-purple/50',
    glow: 'hover:border-neon-purple hover:shadow-[0_0_15px_rgba(188,19,254,0.3)]',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="tiers" className="py-24 bg-cyber-black relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4"
          >
            Acquisition <span className="text-neon-blue">Tiers</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 font-mono text-sm uppercase tracking-widest"
          >
            Fund your ascension
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-cyber-gray p-8 border ${tier.borderColor} ${tier.glow} transition-all duration-300 relative ${tier.popular ? 'md:-translate-y-4 shadow-[0_0_20px_rgba(0,243,255,0.1)]' : ''}`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon-blue text-cyber-black font-bold px-4 py-1 font-mono text-sm uppercase tracking-wider">
                  Recommended
                </div>
              )}
              <h3 className={`text-2xl font-bold uppercase tracking-wide mb-2 ${tier.color}`}>{tier.name}</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">{tier.description}</p>
              
              <div className="mb-8 border-b border-slate-800 pb-8">
                <span className="text-slate-500 font-mono text-lg font-bold">¥</span>
                <span className="text-4xl font-bold text-white tracking-tighter">{tier.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className={`w-5 h-5 shrink-0 ${tier.popular ? 'text-neon-blue' : 'text-slate-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 font-mono font-bold uppercase tracking-widest transition-all ${
                tier.popular 
                  ? 'bg-neon-blue text-cyber-black hover:bg-white hover:text-black' 
                  : 'bg-transparent text-white border border-slate-600 hover:border-white'
              }`}>
                Initialize Secure Link
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
