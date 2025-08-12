import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-pink-100 via-blue-100 to-green-100">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                trasition={{ duration: 0.8 }}
                className="text-5xl font-bold text-gray-800"
            >
                Hi, I'm {portfolioData.name}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-4 text-lg text-gray-600 max-w-xl"
            >
                {portfolioData.tagline}
            </motion.p>
        </section>
    );
}