import React from 'react';
import { motion } from 'framer-motion';

const EDUCATION_DATA = [
    {
        degree: 'B.Tech, Computer Science Engineering (CSE)',
        institution: 'BML Munjal University',
        period: '2024 – 2028',
        grade: 'CGPA: 9.14',
        ref: 'ED-DEPT-01'
    },
    {
        degree: 'Class XII (Science)',
        institution: 'Hansraj Model School',
        period: 'CBSE · 2023–24',
        grade: '91.6%',
        ref: 'ED-DEPT-02'
    },
    {
        degree: 'Class X',
        institution: 'Hansraj Model School',
        period: 'CBSE · 2021–22',
        grade: '94.6%',
        ref: 'ED-DEPT-03'
    },
];

export default function Education() {
    return (
        <section id="education" className="py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <div className="shrink-0">
                        <h2 className="text-4xl font-black uppercase tracking-tighter">Education</h2>
                        <span className="marker">RECORDS.HISTORICAL_DATA</span>
                    </div>
                    <div className="h-px bg-white/10 flex-1" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
                    {EDUCATION_DATA.map((item, i) => (
                        <motion.div
                            key={item.ref}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="p-8 md:border-r last:border-r-0 border-white/5 group hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <span className="marker">[{item.ref}]</span>
                                <span className="mono text-[10px] text-white/20 group-hover:text-[var(--accent)] transition-colors">
                                    {item.period}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors leading-tight">
                                {item.degree}
                            </h3>
                            <p className="text-sm text-white/40 mb-6">{item.institution}</p>

                            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                <span className="marker">SCORE_METRIC</span>
                                <span className="mono text-sm font-bold">{item.grade}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
