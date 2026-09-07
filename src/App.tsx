import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Specs from './components/Specs';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cyber-black text-slate-50 selection:bg-neon-blue selection:text-cyber-black">
      <div className="scanline"></div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Specs />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
