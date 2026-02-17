import React from 'react';

/* ── COMPREHENSIVE SVG ICON CATALOG ── */
const icons = {
    Java: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <path fill="#EA2D2E" d="M47.6 98.1s-4.8 2.8 3.4 3.7c9.9 1.1 14.9 1 25.8-1.1 0 0 2.9 1.8 6.9 3.4-24.4 10.5-55.3-.6-36.1-6zm-3-13.7s-5.3 4 2.8 4.8c10.6 1.1 18.9 1.2 33.4-1.6 0 0 2 2 5.1 3.1-29.5 8.6-62.4.7-41.3-6.3zM69.8 61.3c6 6.9-1.6 13.2-1.6 13.2s15.3-7.9 8.3-17.8c-6.6-9.2-11.6-13.8 15.6-29.6 0 0-42.7 10.7-22.3 34.2zM102.1 108.2s3.5 2.9-3.9 5.2c-14.1 4.3-58.7 5.6-71.1.2-4.5-1.9 3.9-4.6 6.5-5.2s4.3-.5 4.3-.5c-5-3.5-32 6.9-13.7 9.8 49.8 8.1 90.8-3.6 77.9-9.5zM49.9 70.3s-22.7 5.4-8 7.3c6.2.8 18.5.6 30-.3 9.4-.8 18.8-2.5 18.8-2.5s-3.3 1.4-5.7 3c-23 6.1-67.5 3.2-54.7-3 10.8-5.2 19.6-4.6 19.6-4.6zm40.7 22.7c23.4-12.2 12.6-23.9 5-22.3-1.8.4-2.7.7-2.7.7s.7-1.1 2-1.5c15-5.3 26.5 15.5-4.8 23.7 0 0 .4-.3.5-.6zM76.5 1.6s13 13-12.3 31.6C43.9 48.2 59.5 56.7 64 66.5c-11.3-10.6-19.9-19.1-14.7-27 7.5-11.4 31.4-17 27.2-37.9zM52.2 126c22.5 1.4 57-.8 57.8-11.4 0 0-1.6 4-18.6 7.2-19.2 3.6-42.9 3.2-56.9.9 0 0 2.9 2.4 17.7 3.3z" />
        </svg>
    ),
    C: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <path fill="#659AD2" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z" />
            <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z" />
            <path fill="#fff" d="M85.3 76.3C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.2l13-7.5c-6.8-11.6-19.3-19.2-34.3-19.2-21.8 0-39 17.2-39 39s17.2 39 39 39c15 0 27.5-7.6 34.3-19.2l-13-7.5z" />
        </svg>
    ),
    JavaScript: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <path fill="#F0DB4F" d="M1.4 1.4h125.2v125.2H1.4z" />
            <path fill="#323330" d="M116.3 96.7c-.9-5.7-4.6-10.5-15.7-15-3.8-1.8-8.1-3-9.4-5.9-.4-1.7-.5-2.6-.2-3.7.8-3.3 4.8-4.4 7.9-3.4 2 .7 3.9 2.2 5.1 4.7 5.4-3.5 5.4-3.5 9.2-5.9-1.4-2.1-2.1-3.1-3-4-3.3-3.7-7.7-5.5-14.8-5.4l-3.7.5c-3.5.9-6.9 2.7-8.9 5.2-5.9 6.7-4.2 18.5 3 23.3 7.1 5.3 17.5 6.5 18.9 11.5 1.3 6.1-4.5 8.1-10.2 7.4-4.2-.9-6.6-3-9.1-6.9-4.7 2.7-4.7 2.7-9.5 5.5 1.1 2.5 2.3 3.6 4.2 5.9 9.1 9.1 31.7 8.6 35.8-5.3.1-.4 1.2-3.6.1-8.3zM68.5 17.7h-11.4v44.1c0 8.2.4 15.8-.9 18.1-2.1 4.3-7.7 3.8-10.2 3.1-2.5-1.2-3.8-3-5.3-5.4-.4-.7-.7-1.2-.7-1.2l-9.5 5.9c1.6 3.3 3.9 6.2 7 8 4.5 2.8 10.6 3.7 17.1 2.1 4.2-1.2 7.8-3.9 9.7-7.7 2.7-5.1 2.2-11.4 2.1-18.4.1-14.9 0-29.7 0-44.6h.1z" />
        </svg>
    ),
    Python: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <path fill="#3776AB" d="M64 4.54c-17.13 0-16.05 7.41-16.05 7.41l.01 7.21h16.32v2.29H21.99s-10.2 1.17-10.2 16.34c0 15.17 8.87 15.88 8.87 15.88h5.29V43.4c0-10.59 9.15-10.02 9.15-10.02h22.68c8.89 0 8.44-8.08 8.44-8.08V11.83s.77-7.29-12.22-7.29zm-7.6 6.36c2.4 0 4.34 1.94 4.34 4.34s-1.94 4.34-4.34 4.34-4.34-1.94-4.34-4.34 1.94-4.34 4.34-4.34z" />
            <path fill="#FFD343" d="M64 123.46c17.13 0 16.05-7.41 16.05-7.41l-.01-7.21H63.72v-2.29h42.29s10.2-1.17 10.2-16.34c0-15.17-8.87-15.88-8.87-15.88h-5.29v10.27c0 10.59-9.15 10.02-9.15 10.02H70.22c-8.89 0-8.44 8.08-8.44 8.08v13.48s-.77 7.29 12.22 7.29zm7.6-6.36c-2.4 0-4.34-1.94-4.34-4.34s1.94-4.34 4.34-4.34 4.34 1.94 4.34 4.34-1.94 4.34-4.34 4.34z" />
        </svg>
    ),
    React: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <circle cx="64" cy="64" r="11.4" fill="#61DAFB" />
            <path fill="none" stroke="#61DAFB" strokeWidth="6" d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.7-14-19.2-18.8z" />
        </svg>
    ),
    NodeJS: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <path fill="#339933" d="M112.8 30.3L68.7 4.7c-2.8-1.6-6.4-1.6-9.2 0L14.9 30.3c-2.9 1.7-4.9 4.8-4.9 8.1V90c0 3.3 2.1 6.4 5 8.1l11.8 6.7c5.6 2.8 7.6 2.8 10.2 2.8 8.3 0 13.1-5 13.1-13.8V53.3c0-.7-.4-1.8-1.1-1.8h-5.6c-.7 0-2.3 1.1-2.3 1.8V104c0 3.9-3.5 7.8-10.1 4.5l-2.3-1.3c-.4-.2-.7-.7-.7-1.2V38.4c0-.5.6-1 1-1.2l44.4-25.6c.4-.2 1-.2 1.4 0l43.9 25.6c.4.3.3.7.3 1.2V90s.2 1-.2 1.2l-44.1 25.6c-.4.2-.8.2-1.3 0l-11.3-6.7c-.3-.2-.7-.3-1.1-.1-3.1 1.8-3.7 2-6.7 3-.7.3-1.8.7.4 1.9l14.8 8.8a9.3 9.3 0 004.6 1.2c1.6 0 3.3-.4 4.7-1.2l43.9-25.6c2.9-1.7 4.2-4.8 4.2-8.1V38.4c0-3.3-1.4-6.4-4.2-8.1z" />
        </svg>
    ),
    MongoDB: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <path fill="#4DB33D" d="M86.3 54.1c-1-5.7-3.9-10.5-8.1-14.3.7 4 1.3 8 .9 12-.1.9-.3 1.8-.5 2.6l-.3 1.2-.2 1.1c-.8 3.7-2.6 6.8-5.3 9.2a15.8 15.8 0 01-10 3.8h-.1A15.8 15.8 0 0152.7 66c-2.7-2.4-4.5-5.5-5.3-9.2l-.2-1.1-.3-1.2c-.2-.8-.4-1.7-.5-2.6-.4-4 .2-8 .9-12-4.2 3.8-7.1 8.6-8.1 14.3-.9 5-1 10.1-1 15.2 0 6.6 1.6 12.8 4.5 18.2 3.7 7 10.3 12.2 18.2 13.9l1.1.2c1 .2 2 .4 3 .4.2 0 .4 0 .6-.1 1.6-.1 3.2-.3 4.8-.6 1.1-.2 2.2-.4 3.3-.8 4.9-1.6 9-4.5 12.1-8.3 3.5-4.3 5.4-9.6 5.4-15.3-.1-4.7-.2-9.5-1.1-14.5z" />
            <path fill="#3F3E3E" d="M64 4.2C54.8 4.2 44.9 14.8 31.3 33.4v62.4c1.1.9 2.1 1.9 3.1 2.9l2.2 2c3.5 3.3 7 7 8.3 8.3 4.2 4 8.3 8 9.3 8 0 0 9.4-4.1 9.4-12.8V35.6l.4-.5c13.6-18.6 23.6-29.2 32.7-29.2-2.3-1.3-4.1-2.2-4.1-2.2H64v.3z" />
        </svg>
    ),
    MySQL: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <path fill="#00758F" d="M12.9 82.2c0-10.4 8.4-18.8 18.8-18.8h1.2l-2.7 6.4h-1c-8.4 0-15.2 6.8-15.2 15.2V112H4.1V82.2h8.8zm36.8-18.8h.4l6.4 15.2v33.4H52.2V82.2l-6.4-14h-.4L39 82.2v29.8h-4.3V78.6l15-15.2zm28.6 0h.4l6.4 15.2v33.4H80.8V82.2l-6.4-14h-.4L67.6 82.2v29.8h-4.3V78.6l15-15.2zm28.6 0h.4l6.4 15.2v33.4H109.4V82.2l-6.4-14h-.4L96.2 82.2v29.8h-4.3V78.6l15-15.2z" />
            <path fill="#F29111" d="M31.7 63.4c10.4 0 18.8 8.4 18.8 18.8v29.8h-4.3v-29.8c0-8.4-6.8-15.2-15.2-15.2h-.4l1.1-13.6zm28.6 0h.4l-1.1 13.6c8.4 0 15.2 6.8 15.2 15.2v29.8h-4.3v-29.8c0-8.4-6.8-15.2-15.2-15.2h-.4l15-15.2zm28.6 0h.4l-1.1 13.6c8.4 0 15.2 6.8 15.2 15.2v29.8h-4.3v-29.8c0-8.4-6.8-15.2-15.2-15.2h-.4l15-15.2z" />
        </svg>
    ),
    Git: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <path fill="#F05032" d="M124.7 58.4L69.6 3.3c-3-3-8-3-11 0L46.7 14.7l14.5 14.5c3.4-1.1 7.2-.4 9.9 2.3 2.7 2.7 3.5 6.6 2.3 10L87.4 55.4c3.4-1.1 7.3-.4 10 2.3 3.8 3.8 3.8 9.9 0 13.7a9.7 9.7 0 01-13.7 0 9.7 9.7 0 01-2.1-10.5L68.6 47.9l.1 34.3c2.6.4 4.8 1.9 5.8 4.3 1.5 3.8.4 8-2.6 11-3 3-8 4.1-11.8 2.6-3.8-1.5-6.3-5-6.3-9s1.5-7.5 4.3-9V47.3c-2.8-.4-5.2-1.9-6.2-4.4-1.5-3.8-.4-8 2.6-11L41.1 20.3 3.3 58.1c-3 3-3 8 0 11L58.4 124.3c3 3 8 3 11 0l55.1-55.1c3.1-3.2 3.1-8.1.2-10.8z" />
        </svg>
    ),
    Docker: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <path fill="#2496ED" d="M127.1 63.8c-2.4-1.6-8-2.6-12.3-1.6-.6-4.2-3.2-7.8-6.2-10.7l-1.2-.8-.9 1.2c-1.8 2.7-2.3 7.2-2 10.5.2 2.4 1 4.7 2.2 6.8-.9.5-2.5 1.1-4.7 1.4H.5l-.2 1.8c-.5 5.3.3 10.7 2.2 15.7 2.3 5.7 6.2 9.8 11.4 12.4 5.8 2.9 15.2 4.5 23.5 4.5 4.4 0 8.8-.4 13.1-1.3 6-1.2 11.7-3.5 16.8-6.8 4.2-2.8 8-6.3 11.2-10.4 5.3-6.8 8.4-14.4 10.7-21.4h.9c5.6 0 9.1-2.2 11-4.1.7-.7 1.3-1.5 1.8-2.3l.2-.5-1.1-.5zM33.8 50.8h11.3v11.5H33.8V50.8zm13.4 0h11.3v11.5H47.2V50.8zm0-13.4h11.3v11.5H47.2V37.4zm13.4 13.4h11.3v11.5H60.6V50.8zm0-13.4h11.3v11.5H60.6V37.4zm0-13.4h11.3v11.5H60.6V24zm13.4 26.8h11.3v11.5H74V50.8zm0-13.4h11.3v11.5H74V37.4zm13.4 13.4h11.3v11.5H87.4V50.8z" />
        </svg>
    ),
    Linux: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <path fill="#FCC624" d="M64 2.1c-16 0-29.9 13.9-29.9 31.9 0 6 .3 12 2.1 17.6-6.4 5.2-11.2 12.8-13.3 21.3-3.1 12.9-.6 25.5 6.6 35.1 4.2 5.5 9.7 9.8 15.2 12.1 10.9 4.6 23.2 5.5 35 1.5 11.8-4 21.8-12.7 27.2-23.7 5.4-11 6.3-23.8 2.3-35.3-2.1-5.9-5.5-11.3-10-15.7.5-4.2.8-8.5.8-12.8.2-18-12.2-32.1-26-32.1h-.2-9.8z" />
            <path fill="#333" d="M61 55.4l1.1.2c5.6.8 10.1 5.3 10.9 10.9v1.1c.1-.5.1-1.1.1-1.6 0-5.8-4.7-10.5-10.5-10.5-.5-.1-1.1-.1-1.6-.1zm-1.1 1.6V56c-1.1 0-2.2.1-3.2.4l1.1 1.7s.1-.1.2-.1c1 0 1.9-.3 1.9-.3s-.3 3.6-2.5 5.5c-.2.2-.4.3-.5.5l1.6 1.6c.3-.3.5-.7.8-1 1.9-2.3 1.9-6.3.6-9.3zm20.2-24.3l.3.2a15.2 15.2 0 005.1 2.8c-1.1.5-2.2.9-3.4 1.2-1.7-4.2-2-4.2-2-4.2zm-2.7 1.5l1.2-.4c1.1 3 2.5 5.8 4.2 8.4l-1.5.5c-1.7-2.7-3-5.6-3.9-8.5zm-5.7.4l.2.2c1.7 1.5 3 3.5 3.9 5.7l-1 1c-1.3-2.3-2-2.3-3.1-3.6l-.3-1.6.3-1.7zm1.1.3l.4-.1a14.3 14.3 0 00-4 1.2c1.3.5 2.5 1 3.6 1.6v-2.7zm-2.7.9l1 .5-.1 1.2h.5c.3 0 .7.1 1 .3l-1 1c-.3.4-.6.8-.7 1.2-.4-1.2-.4-1.2-1-2.4l.3-1.8zm-2.3.6v-.3c-.6.3-1.2.6-1.8 1l.8 1.1s.1-.1.2-.2l.8-1.6z" />
        </svg>
    ),
    ExpressJS: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <path fill="#fff" d="M126.7 98.4c-4.6 1.2-7.4 0-9.9-3.8-5.7-8.5-12-16.6-18-24.9-.8-1.1-1.6-2.1-2.6-3.5C89 76 82.2 85.4 75.3 94.7c-2.5 3.4-5.1 4.7-9.5 3.6l25-33.4-23.5-31.4c4.3-1 7.3.2 9.7 3.7 6 8.4 12.3 16.6 18.8 25.2 6.5-8.7 12.9-16.9 18.9-25.4 2.3-3.2 4.9-4.5 9-3.3l-24.8 33 25 33.7h-.1zM1.3 61.7c.7-3.6 1.2-7.3 2.2-10.8 6-21.4 30.6-30.3 47.5-17.1s12.5 22.3 12 34.6H7.1c-.8 22.2 15.1 35.6 35.5 28.8 7.2-2.4 11.4-8 13.5-15 1.1-3.5 2.8-4.1 6.1-3.1-1.7 8.8-5.5 16.1-13.5 20.7-12 6.9-29.1 5.2-38.6-4.2C2.9 85.1.9 76.9 1.3 67.4c0-.5 0-1.1 0-1.6 0-1.3 0-2.7 0-4.1zm5.9-1.5h50.4c-.3-16.1-10.3-27.5-24.2-27.8-15.3-.4-26.1 11.2-26.2 27.8z" />
        </svg>
    ),
    DSA: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#61DAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
    ),
    DBMS: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
    ),
    OS: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#EA2D2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
        </svg>
    ),
    SystemDesign: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
    ),
};

const LANGUAGES = [
    { name: 'Java', icon: icons.Java },
    { name: 'C', icon: icons.C },
    { name: 'JavaScript', icon: icons.JavaScript },
    { name: 'Python', icon: icons.Python },
];

const WEB_DB = [
    { name: 'React', icon: icons.React },
    { name: 'Node.js', icon: icons.NodeJS },
    { name: 'Express.js', icon: icons.ExpressJS },
    { name: 'MongoDB', icon: icons.MongoDB },
    { name: 'MySQL', icon: icons.MySQL },
];

const DEVOPS_CORE = [
    { name: 'Git', icon: icons.Git },
    { name: 'Docker', icon: icons.Docker },
    { name: 'Linux', icon: icons.Linux },
    { name: 'DSA', icon: icons.DSA },
    { name: 'DBMS', icon: icons.DBMS },
    { name: 'OS', icon: icons.OS },
    { name: 'System Design', icon: icons.SystemDesign },
];

function MarqueeRow({ items, direction = 'left', speed = 30 }) {
    const animClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
    const tripled = [...items, ...items, ...items];

    return (
        <div className="relative overflow-hidden py-4 group">
            <div className={`flex gap-12 w-max ${animClass} group-hover:[animation-play-state:paused]`} style={{ animationDuration: `${speed}s` }}>
                {tripled.map((skill, i) => (
                    <div key={`${skill.name}-${i}`} className="flex flex-col items-center gap-4 group/item">
                        <div className="w-14 h-14 md:w-16 md:h-16 transition-all duration-300 group-hover/item:scale-110 group-hover/item:filter group-hover/item:drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                            {skill.icon}
                        </div>
                        <span className="mono text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-white/20 group-hover/item:text-[var(--accent)] transition-colors whitespace-nowrap">
                            {skill.name.toUpperCase()}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="py-24 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
            {/* Decorative Blueprint Markers */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none hidden md:block">
                <span className="marker block text-right">CAPABILITY_MATRIX_LOADED</span>
                <span className="marker block text-right">VERSION_2.0.4_STABLE</span>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center relative">
                <div className="inline-block relative">
                    <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-2">Technical Core</h2>
                    <div className="absolute -right-8 -top-4">
                        <span className="marker text-[var(--accent)]">[ LOADED ]</span>
                    </div>
                    <p className="mono text-[10px] tracking-[0.4em] text-white/30 uppercase">Enterprise Infrastructure & Systems</p>
                </div>
            </div>

            <div className="space-y-4 md:space-y-8 max-w-[2000px] mx-auto">
                <MarqueeRow items={LANGUAGES} direction="left" speed={25} />
                <MarqueeRow items={WEB_DB} direction="right" speed={35} />
                <MarqueeRow items={DEVOPS_CORE} direction="left" speed={45} />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 flex justify-center">
                <div className="flex gap-12 border-t border-white/5 pt-12 w-full justify-center">
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-black text-white">15+</span>
                        <span className="marker text-[8px]">CORE_TECHNOLOGIES</span>
                    </div>
                    <div className="divider w-px h-10 bg-white/10" />
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-black text-white">04+</span>
                        <span className="marker text-[8px]">PROJECT_DOMAINS</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
