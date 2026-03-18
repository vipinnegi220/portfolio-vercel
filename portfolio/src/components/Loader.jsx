import { motion } from 'framer-motion'

export default function Loader() {
    return (
        <div className="fixed inset-0 bg-[#0a0a0f] flex items-center justify-center z-50">
            <div className="text-center">
                <motion.div
                    className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
                <motion.p
                    className="gradient-text text-xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Vipin Negi
                </motion.p>
            </div>
        </div>
    )
}
