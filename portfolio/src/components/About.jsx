import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
    { value: '1.5+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Built' },
    { value: '5+', label: 'Technologies' },
]

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" className="py-24 px-4" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">About Me</p>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text">Who I Am</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="glass rounded-2xl p-8">
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                I&apos;m a passionate Full Stack Developer with <span className="text-indigo-400 font-semibold">1.5+ years of experience</span> building
                                modern web applications. I specialize in crafting end-to-end solutions using React, Angular, and .NET Core.
                            </p>
                            <p className="text-slate-400 leading-relaxed">
                                From designing RESTful APIs and microservices to building interactive dashboards with charts and data visualizations,
                                I enjoy turning complex requirements into clean, scalable code. I&apos;m always exploring new technologies and best practices
                                to deliver high-quality software.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="grid grid-cols-3 gap-4"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                                className="glass rounded-2xl p-6 text-center hover:border-indigo-500/40 transition-colors"
                            >
                                <p className="text-3xl font-black gradient-text mb-1">{stat.value}</p>
                                <p className="text-slate-400 text-xs font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
