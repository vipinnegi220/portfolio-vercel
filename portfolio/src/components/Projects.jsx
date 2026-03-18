import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
    {
        title: 'SEO Tools Platform',
        description:
            'A multi-tool platform featuring JSON formatter, text analysis tools, SEO utilities, and more. Built for developers and content creators who need fast, browser-based tools.',
        tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
        live: 'https://seo-tools-platform-chi.vercel.app/',
        github: 'https://github.com',
        badge: 'Live',
    },
    {
        title: 'TravelAway',
        description:
            'A full-stack travel assistant application that helps users plan trips, discover destinations, and manage itineraries with a clean, intuitive interface.',
        tech: ['.NET Core', 'Angular', 'SQL Server', 'Web API'],
        live: null,
        github: 'https://github.com',
        badge: null,
    },
    {
        title: 'Voice Vision Dictation',
        description:
            'An ML-powered image captioning application that generates descriptive captions for images using deep learning models trained on Kaggle datasets.',
        tech: ['Python', 'Machine Learning', 'Kaggle', 'TensorFlow'],
        live: null,
        github: 'https://github.com',
        badge: null,
    },
]

export default function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="projects" className="py-24 px-4" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">What I&apos;ve Built</p>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text">Projects</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            whileHover={{ scale: 1.03, y: -6 }}
                            className="glass rounded-2xl p-6 flex flex-col hover:border-indigo-500/40 transition-all duration-300 group"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-3">
                                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                                    {project.title}
                                </h3>
                                {project.badge && (
                                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30 shrink-0 ml-2">
                                        {project.badge}
                                    </span>
                                )}
                            </div>

                            <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                                {project.description}
                            </p>

                            {/* Tech badges */}
                            <div className="flex flex-wrap gap-1.5 mb-5">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3">
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all"
                                    >
                                        <FaExternalLinkAlt className="text-xs" />
                                        Live
                                    </a>
                                )}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/10 text-slate-300 text-sm font-semibold hover:border-indigo-500/40 hover:text-indigo-300 transition-all"
                                >
                                    <FaGithub />
                                    GitHub
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
