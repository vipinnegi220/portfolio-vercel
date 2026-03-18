import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase } from 'react-icons/fa'

const experiences = [
    {
        company: 'Infosys, India',
        role: 'Full Stack .NET Developer',
        period: '2023 - Present',
        type: 'Full-time',
        color: 'from-indigo-500 to-purple-500',
        points: [
            'Developed and maintained enterprise-grade web applications using .NET Core and React',
            'Built RESTful APIs and microservices for scalable backend architecture',
            'Implemented interactive dashboards with charts and real-time data visualizations',
            'Collaborated with cross-functional teams in Agile sprints',
        ],
    },
    {
        company: 'TehriHills Software Pvt. Ltd.',
        role: 'React.js Frontend Developer',
        period: 'Sep 2023 - Oct 2024',
        type: 'Full-time',
        color: 'from-cyan-500 to-blue-500',
        points: [
            'Built interactive dashboards using React.js, Chart.js and Highcharts',
            'Developed bar, pie, and stacked charts with real-time data updates',
            'Implemented data filtering and transformation logic for dynamic visualizations',
            'Optimized performance and improved UI responsiveness across devices',
        ],
    },
    {
        company: 'Sumadhwa Software pvt. ltd. - Internship',
        role: 'React Frontend Developer',
        period: '2022 - 2023',
        type: 'Internship',
        color: 'from-purple-500 to-pink-500',
        points: [
            'Built responsive UI components using React and Bootstrap',
            'Integrated REST APIs and managed application state',
            'Improved page performance and optimized component rendering',
            'Worked closely with designers to implement pixel-perfect interfaces',
        ],
    },
]

export default function Experience() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="experience" className="py-24 px-4 bg-white/[0.02]" ref={ref}>
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">My Journey</p>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text">Experience</h2>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent hidden sm:block" />

                    <div className="space-y-8">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, x: -30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="sm:pl-16 relative"
                            >
                                <div className={`absolute left-3.5 top-6 w-5 h-5 rounded-full bg-gradient-to-r ${exp.color} hidden sm:flex items-center justify-center`}>
                                    <FaBriefcase className="text-white text-[8px]" />
                                </div>

                                <div className="glass rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300">
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                            <p className={`text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-slate-400 text-sm">{exp.period}</span>
                                            <br />
                                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                                                {exp.type}
                                            </span>
                                        </div>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.points.map((point, j) => (
                                            <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                                                <span className="text-indigo-400 mt-1.5 shrink-0">&#9658;</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
