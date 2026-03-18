import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-black/30' : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <button onClick={() => scrollTo('home')} className="gradient-text text-xl font-bold">
                    VN
                </button>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <li key={link}>
                            <button
                                onClick={() => scrollTo(link)}
                                className="text-slate-300 hover:text-indigo-400 text-sm font-medium transition-colors"
                            >
                                {link}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Social icons */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors text-lg">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors text-lg">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:vipin@example.com" className="text-slate-400 hover:text-indigo-400 transition-colors text-lg">
                        <FaEnvelope />
                    </a>
                </div>

                {/* Hamburger */}
                <button
                    className="md:hidden text-slate-300 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                    <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden glass border-t border-white/10 px-4 py-4"
                >
                    {links.map((link) => (
                        <button
                            key={link}
                            onClick={() => scrollTo(link)}
                            className="block w-full text-left text-slate-300 hover:text-indigo-400 py-2 text-sm font-medium transition-colors"
                        >
                            {link}
                        </button>
                    ))}
                    <div className="flex gap-4 mt-3 pt-3 border-t border-white/10">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 text-lg"><FaGithub /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 text-lg"><FaLinkedin /></a>
                        <a href="mailto:vipin@example.com" className="text-slate-400 hover:text-indigo-400 text-lg"><FaEnvelope /></a>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    )
}
