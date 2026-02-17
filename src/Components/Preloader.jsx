import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LOGS = [
    '[ INIT_CORE_ENGINE ]',
    '[ LOADING_SYSTEM_ASSETS ]',
    '[ CONFIGURING_BLUEPRINT_GRID ]',
    '[ CALIBRATING_EMERALD_ACCENTS ]',
    '[ SYNCING_GEOSPATIAL_COORDINATES ]',
    '[ READY: MEHUL_VIG_OS_v2.0 ]',
];

export default function Preloader({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [currentLog, setCurrentLog] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 1000); // Wait a bit before finishing
                    return 100;
                }
                return prev + Math.floor(Math.random() * 5) + 1;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    useEffect(() => {
        const logInterval = setInterval(() => {
            setCurrentLog((prev) => (prev < BOOT_LOGS.length - 1 ? prev + 1 : prev));
        }, 600);

        return () => clearInterval(logInterval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: 'easeIn' } }}
            className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center p-6 sm:p-12"
        >
            <div className="max-w-xl w-full">
                {/* Header */}
                <div className="flex justify-between items-end mb-12">
                    <div className="space-y-1">
                        <span className="marker text-[var(--accent)]">[ BOOT_SEQUENCE ]</span>
                        <h1 className="text-4xl font-black uppercase tracking-tighter text-white">System Start</h1>
                    </div>
                    <span className="mono text-2xl font-black text-white">{progress}%</span>
                </div>

                {/* Progress Bar Container */}
                <div className="h-[2px] w-full bg-white/5 relative overflow-hidden mb-8">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-[var(--accent)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: 'linear' }}
                    />
                </div>

                {/* Logs */}
                <div className="space-y-2 h-24 overflow-hidden">
                    <AnimatePresence mode="popLayout">
                        {BOOT_LOGS.slice(0, currentLog + 1).map((log, i) => (
                            <motion.p
                                key={log}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`mono text-[10px] sm:text-xs tracking-widest ${i === currentLog ? 'text-[var(--accent)]' : 'text-white/20'
                                    }`}
                            >
                                {log}
                            </motion.p>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Background Grid Decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="grid-background" />
            </div>

            {/* System Status Marker */}
            <div className="absolute bottom-12 right-12 hidden sm:block">
                <span className="marker">[ LOADING_KERNAL_MODULES ]</span>
            </div>
        </motion.div>
    );
}
