import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Achievements from './Components/Achievements';
import Volunteering from './Components/Volunteering';
import Connect from './Components/Connect';

function App() {
  return (
    <div className="bg-[#050505] min-h-screen selection:bg-[var(--accent)] selection:text-black">
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Home />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Volunteering />
        <Connect />
      </motion.main>

      {/* ── Global Context Decoration ── */}
      <div className="fixed bottom-6 left-6 z-50 pointer-events-none hidden md:block">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
          <span className="marker">VITE_ENV_STABLE_001</span>
        </div>
      </div>
    </div>
  );
}

export default App;