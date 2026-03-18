import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-8 px-4">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-slate-500 text-sm flex items-center gap-1.5">
                    Built with <FaHeart className="text-red-500 text-xs" /> by{' '}
                    <span className="gradient-text font-semibold">Vipin Negi</span>
                </p>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/vipinnegi220" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors text-lg">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/vipin-negi-6a539b1b0/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors text-lg">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:vipinegi220@gmail.com" className="text-slate-500 hover:text-indigo-400 transition-colors text-lg">
                        <FaEnvelope />
                    </a>
                </div>

                <p className="text-slate-600 text-xs">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    )
}
