import { motion } from 'motion/react';
import { Activity } from 'lucide-react';

const specs = [
  { label: 'Processing Power', value: 98, color: 'bg-neon-blue' },
  { label: 'Structural Integrity', value: 85, color: 'bg-emerald-400' },
  { label: 'Energy Efficiency', value: 92, color: 'bg-yellow-400' },
  { label: 'Neural Sync', value: 99, color: 'bg-neon-purple' },
];

export default function Specs() {
  return (
    <section id="specs" className="py-24 bg-cyber-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center relative z-10">
        <div className="lg:w-1/2 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <Activity className="text-neon-blue w-6 h-6 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">System <span className="text-neon-purple">Diagnostics</span></h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mb-10 font-light text-lg"
          >
            All hardware modules are stress-tested to endure extreme conditions. Real-time telemetry ensures your biological and synthetic systems remain in perfect harmony.
          </motion.p>
          
          <div className="space-y-6">
            {specs.map((spec, index) => (
              <div key={spec.label}>
                <div className="flex justify-between mb-2 font-mono text-sm uppercase tracking-wider">
                  <span className="text-slate-300">{spec.label}</span>
                  <span className="text-neon-blue">{spec.value}%</span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${spec.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className={`h-full ${spec.color} box-shadow-neon`}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-1 bg-gradient-to-br from-neon-blue via-slate-900 to-neon-purple rounded-lg"
          >
            <div className="bg-cyber-black p-8 rounded-lg h-full border border-slate-900/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-xs text-slate-600">SYS.LOG.0934</div>
              
              <div className="font-mono text-sm text-green-500 space-y-2 mt-8">
                <p>{'>'} Initializing boot sequence...</p>
                <p>{'>'} Loading core modules: SUCCESS</p>
                <p>{'>'} Connecting to neural net... ESTABLISHED</p>
                <p>{'>'} Calibrating optical sensors... DONE</p>
                <p className="text-neon-blue mt-4 font-bold">{'>'} SYSTEM READY FOR DEPLOYMENT_</p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-800 flex justify-between items-end">
                <div>
                  <div className="text-xs text-slate-500 font-mono mb-1">STATUS</div>
                  <div className="text-neon-blue font-bold uppercase">Optimal</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 font-mono mb-1">TEMP</div>
                  <div className="text-white font-mono">32.4°C</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
