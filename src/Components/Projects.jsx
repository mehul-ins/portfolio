import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
    {
        title: 'TravelBuddy',
        tagline: 'Booking Infrastructure V1',
        tech: ['React', 'Node.js', 'MongoDB'],
        code: 'https://github.com/mehul-ins/TravelBuddy',
        live: 'https://travelbuddy-kzvh.onrender.com/listings',
        id: 'PRJ-01'
    },
    {
        title: 'Uber Analytics',
        tagline: 'Data Processing Engine',
        tech: ['Python', 'Streamlit', 'Pandas'],
        code: 'https://github.com/mehul-ins/Uber-Rides-Data-Analytics-Dashboard',
        live: 'https://uber-rides-dashboard.streamlit.app/',
        id: 'PRJ-02'
    },
    {
        title: 'Orbit',
        tagline: 'Collaborative Resource Grid',
        tech: ['React', 'Node.js', 'Express.js'],
        live: 'https://orbit-six-phi.vercel.app',
        id: 'PRJ-03'
    },
    {
        title: 'FlowFund',
        tagline: 'MSME Capital Pipeline',
        tech: ['FinTech', 'Full-Stack'],
        code: 'https://github.com/mehul-ins/FlowFund',
        id: 'PRJ-04'
    },
];

function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="blueprint-card p-6 flex flex-col h-full group"
        >
            <div className="flex justify-between items-start mb-8">
                <span className="marker">{project.id}</span>
                <div className="flex gap-4">
                    {project.code && (
                        <a href={project.code} target="_blank" rel="noreferrer" className="text-white/20 hover:text-[var(--accent)] transition-colors">
                            <i className="bx bxl-github text-lg" />
                        </a>
                    )}
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="text-white/20 hover:text-[var(--accent)] transition-colors">
                            <i className="bx bx-link-external text-lg" />
                        </a>
                    )}
                </div>
            </div>

            <h3 className="text-2xl font-bold mb-1 uppercase group-hover:text-[var(--accent)] transition-colors">
                {project.title}
            </h3>
            <p className="mono text-[10px] text-white/30 mb-8 tracking-widest uppercase">
                {project.tagline}
            </p>

            <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">
                        {t}
                    </span>
                ))}
            </div>

            {/* ── TECHNICAL OVERLAY (Gleam) ── */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-px bg-white/10 flex-1" />
                    <div className="shrink-0 text-right">
                        <h2 className="text-4xl font-black uppercase tracking-tighter">Schematics</h2>
                        <span className="marker">DEPLOYED_ASSET_INDEX</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {PROJECTS.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
