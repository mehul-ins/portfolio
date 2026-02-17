import React from 'react';
import { motion } from 'framer-motion';

const ACHIEVEMENTS = [
    {
        ref: 'ACH-01',
        title: 'Best Poster Award — STELMAR 2026',
        desc: 'Multimodal Cognitive Framework for AI-Enabled Learning Analytics',
    },
    {
        ref: 'ACH-02',
        title: 'Technical Executive — ACM BMU',
        desc: 'Developed official SPA website and orchestrated technical workshops.',
    },
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-px bg-white/10 flex-1" />
                    <div className="shrink-0 text-right">
                        <h2 className="text-4xl font-black uppercase tracking-tighter">Milestones</h2>
                        <span className="marker">PEAK_PERFORMANCE_METRICS</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ACHIEVEMENTS.map((item, i) => (
                        <motion.div
                            key={item.ref}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="blueprint-card p-8 flex gap-6 group"
                        >
                            <div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[var(--accent)] transition-colors">
                                <span className="marker text-white/20 group-hover:text-[var(--accent)] transition-colors leading-none pt-1">0{i + 1}</span>
                            </div>
                            <div>
                                <span className="marker">[{item.ref}]</span>
                                <h3 className="text-xl font-bold uppercase mt-2 group-hover:text-[var(--accent)] transition-colors">{item.title}</h3>
                                <p className="text-sm text-white/40 mt-2 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
