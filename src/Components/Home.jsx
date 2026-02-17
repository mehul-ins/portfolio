import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative px-6 md:px-12">
      <div className="grid-background" />

      {/* ── Technical Markers ── */}
      <div className="absolute top-24 left-6 md:left-12 flex flex-col gap-1">
        <span className="marker">[ CORE_ENGINE_ACTIVE ]</span>
        <span className="marker">[ 28.4595° N, 77.0266° E ]</span>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto w-full"
      >
        <motion.p variants={item} className="mono text-[var(--accent)] text-xs md:text-sm mb-4 tracking-[0.2em]">
          // FULL_STACK_ENGINEER_PORTFOLIO_V2.0
        </motion.p>

        <div className="relative mb-8">
          <motion.h1
            variants={item}
            className="heading-huge text-white mb-2"
          >
            Mehul
          </motion.h1>
          <motion.h1
            variants={item}
            className="heading-huge text-outline"
          >
            Vig.
          </motion.h1>
        </div>

        <motion.div variants={item} className="max-w-xl">
          <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed mb-8">
            Building digital systems with mechanical precision. Focusing on <span className="text-white">scalable architecture</span> and <span className="text-white">high-performance frontend execution</span>.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-[var(--accent)] text-black font-bold uppercase tracking-wider text-xs hover:scale-105 transition-transform"
            >
              Explore Schematics
            </button>
            <div className="flex flex-col gap-1">
              <span className="marker">STATUS: AVAILABLE_FOR_COLLAB</span>
              <span className="marker">LOCAL_TIME: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Bottom Accent Line ── */}
      <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 flex items-center gap-4">
        <div className="h-px bg-white/10 flex-1" />
        <span className="marker">INITIATING_SEQUENCE_01</span>
      </div>
    </section>
  );
}