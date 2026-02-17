import React from 'react';
import { motion } from 'framer-motion';

export default function Connect() {
  return (
    <section id="connect" className="py-24 px-6 md:px-12 bg-white/[0.01] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Initialize<br />Contact_</h2>
          <span className="marker">TRANSMISSION_READY.CONNECT_VIA_CORE_CHANNELS</span>
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-1">
              <span className="marker">EMAIL_CHANNEL</span>
              <p className="mono text-sm font-bold hover:text-[var(--accent)] transition-colors">
                <a href="mailto:mehul.vig.24cse@bmu.edu">mehul.vig.24cse@bmu.edu</a>
              </p>
            </div>
            <div className="space-y-1">
              <span className="marker">COMMS_LINK</span>
              <p className="mono text-sm font-bold hover:text-[var(--accent)] transition-colors">
                <a href="tel:+919873288775">+91 9873288775</a>
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-wrap gap-8">
            {['GITHUB', 'LINKEDIN', 'INSTAGRAM', 'TWITTER'].map(plat => (
              <a
                key={plat}
                href={`#${plat.toLowerCase()}`}
                className="mono text-[10px] font-bold tracking-[0.4em] text-white/20 hover:text-[var(--accent)] transition-all hover:tracking-[0.6em]"
              >
                {plat}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 flex justify-between items-center opacity-20">
        <span className="marker text-[8px]">© 2026_MV.SYS.ARCH</span>
        <span className="marker text-[8px]">ENCRYPTED_CONNECTION</span>
      </div>
    </section>
  );
}