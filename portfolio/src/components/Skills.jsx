import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
    {
        category: 'Languages',
        color: 'from-blue-500 to-cyan-500',
        skills: ['C++', 'C#', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
        category: 'Frontend',
        color: 'from-indigo-500 to-purple-500',
        skills: ['React', 'Angular', 'HTML', 'CSS', 'Bootstrap'],
    },
    {
        category: 'Backend',
        color: 'from-purple-500 to-pink-500',
        skills: ['.NET Core', 'Web API', 'Microservices'],
    },
    {
        category: 'Database',
        color: 'from-orange-500 to-red-500',
        skills: ['SQL Server', 'EF Core'],
    },
    {
        category: 'Tools',
        color: 'from-green-500 to-teal-500',
        skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Azure'],
    },
]

export default function Skills() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="skills" className="py-24 px-4 bg-white/[0.02]" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">What I Know</p>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text">Skills & Tech</h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillGroups.map((group, i) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.03, y: -4 }}
                            className="glass rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300"
                        >
                            <div className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${group.color} text-white text-xs font-bold mb-4`}>
                                {group.category}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm hover:border-indigo-500/40 hover:text-indigo-300 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
