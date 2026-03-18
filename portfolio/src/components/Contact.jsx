import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const contacts = [
    {
        icon: FaEnvelope,
        label: 'Email',
        value: 'vipin.negi@example.com',
        href: 'mailto:vipin.negi@example.com',
        color: 'from-red-500 to-orange-500',
    },
    {
        icon: FaLinkedin,
        label: 'LinkedIn',
        value: 'linkedin.com/in/vipinnegi',
        href: 'https://linkedin.com',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: FaGithub,
        label: 'GitHub',
        value: 'github.com/vipinnegi',
        href: 'https://github.com',
        color: 'from-slate-500 to-slate-400',
    },
]

export default function Contact() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="contact" className="py-24 px-4" ref={ref}>
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text">Contact</h2>
                    <p className="text-slate-400 mt-4 max-w-md mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-3 gap-5">
                    {contacts.map((c, i) => (
                        <motion.a
                            key={c.label}
                            href={c.href}
                            target={c.href.startsWith('http') ? '_blank' : undefined}
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -4 }}
                            className="glass rounded-2xl p-6 text-center hover:border-indigo-500/40 transition-all duration-300 group"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${c.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                                <c.icon className="text-white text-xl" />
                            </div>
                            <p className="text-white font-semibold mb-1">{c.label}</p>
                            <p className="text-slate-400 text-xs break-all">{c.value}</p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
