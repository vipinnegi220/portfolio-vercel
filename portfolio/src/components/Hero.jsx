import { motion } from 'framer-motion'
import { FaDownload, FaArrowRight } from 'react-icons/fa'

export default function Hero() {
    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
            {/* Background glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 mb-6 tracking-widest uppercase">
                        Available for opportunities
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 leading-tight"
                >
                    Hi, I&apos;m{' '}
                    <span className="gradient-text">Vipin Negi</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-xl sm:text-2xl font-semibold text-slate-300 mb-4"
                >
                    Full Stack .NET Developer
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-slate-400 text-lg max-w-xl mx-auto mb-10"
                >
                    Building scalable web apps with React, Angular, and .NET
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button
                        onClick={() => scrollTo('projects')}
                        className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105"
                    >
                        View Projects
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <a
                        href="/Vipin_Negi_Resume.pdf"
                        download="Vipin_Negi_Resume.pdf"
                        className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-indigo-500/50 text-indigo-400 font-semibold hover:bg-indigo-500/10 transition-all duration-300 hover:scale-105 hover:border-indigo-400"
                    >
                        <FaDownload />
                        Download Resume
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2"
                    >
                        <div className="w-1 h-2 bg-indigo-400 rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
