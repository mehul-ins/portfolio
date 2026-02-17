import React from 'react';
import { motion } from 'framer-motion';

const VOLUNTEERING = [
    { role: 'Technical Executive', org: 'ACM BMU Student Chapter', period: 'Dec 24 – Present' },
    { role: 'STELMAR 2026', org: 'Conference Secretariat', period: 'Oct 2025 – Jan 2026' },
    { role: 'Technical Lead', org: 'ACIC Propel Pitchfest', period: 'Nov 2025 - Dec 2025' },
    { role: 'Member', org: 'S.A.V.E.R.A Club', period: 'Aug 2024 - Present' },
    { role: 'Creatives Member', org: 'HackBMU 7.0 & STELMAR', period: 'Jan 2025 - Apr 2025' },
    { role: 'Design Team Member', org: '67th Milestone - College Fest', period: 'Jan 2025 - Apr 2025' },
];

export default function Volunteering() {
    return (
        <section id="volunteering" className="py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <div className="shrink-0">
                        <h2 className="text-4xl font-black uppercase tracking-tighter">Engagement</h2>
                        <span className="marker">EXTERNAL_CONTRIBUTIONS_V1</span>
                    </div>
                    <div className="h-px bg-white/10 flex-1" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {VOLUNTEERING.map((item, i) => (
                        <motion.div
                            key={`${item.org}-${i}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white/[0.02] border border-white/5 p-6 hover:bg-white/[0.04] transition-colors flex items-start gap-4"
                        >
                            <div className="w-1.5 h-1.5 bg-[var(--accent)] mt-1.5 shrink-0" />
                            <div>
                                <span className="marker text-[8px] opacity-20">[{item.period || 'ACTIVE'}]</span>
                                <h3 className="text-sm font-bold uppercase text-white/80">{item.role}</h3>
                                <p className="text-[10px] mono text-white/30 tracking-wider mt-1">{item.org}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
