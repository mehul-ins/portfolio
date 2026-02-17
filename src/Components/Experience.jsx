import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <div className="shrink-0">
                        <h2 className="text-4xl font-black uppercase tracking-tighter">Experience</h2>
                        <span className="marker">FIELD_OPERATIONS_LOG</span>
                    </div>
                    <div className="h-px bg-white/10 flex-1" />
                </div>

                {/* Nexus Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="blueprint-card p-8 md:p-12"
                >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
                        <div>
                            <span className="marker">[ NEXUS.SYS_INT_01 ]</span>
                            <h3 className="text-3xl font-bold uppercase mt-2">Software Development Intern</h3>
                        </div>
                        <div className="text-right">
                            <span className="mono text-sm text-[var(--accent)] font-bold">JUL 2025 – APR 2026</span>
                            <br />
                            <span className="marker tracking-[0.2em]">REMOTE_DEPLOYMENT</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <span className="text-[var(--accent)] font-bold mono">01</span>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Engineered <span className="text-white">12+ RESTful APIs</span> using Node.js, Express, and MongoDB, reducing response time by <span className="text-white">25%</span>.
                                </p>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[var(--accent)] font-bold mono">02</span>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Developed <span className="text-white">10+ reusable React components</span> with JWT-based authentication, improving frontend modularity by <span className="text-white">30%</span>.
                                </p>
                            </li>
                        </ul>

                        <div className="flex flex-col justify-end gap-4 p-6 bg-white/[0.02] border border-white/5">
                            <span className="marker text-[8px]">TECH_STACK_MANIFEST</span>
                            <div className="flex flex-wrap gap-x-6 gap-y-2">
                                {['NODE.JS', 'EXPRESS', 'MONGODB', 'REACT', 'JWT'].map(t => (
                                    <span key={t} className="mono text-xs font-bold text-white/40">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
