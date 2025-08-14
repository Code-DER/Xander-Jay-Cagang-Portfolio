import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
            {/* Left Side */}
            <motion.div
                className="flex-1 flex flex-col justify-center md:items-start items-center text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                        Hi, I'm {portfolioData.name}
                    </span>
                </h1>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-2 text-xl md:text-2xl text-red-400 font-semibold"
                >
                    {portfolioData.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-4 text-gray-300 max-w-lg"
                >
                    {portfolioData.tagline}
                </motion.p>
                <motion.div
                    className="flex gap-5 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition text-2xl">
                        <FaGithub />
                    </a>
                    <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition text-2xl">
                        <FaFacebook />
                    </a>
                    <a href={portfolioData.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition text-2xl">
                        <FaInstagram />
                    </a>
                </motion.div>
            </motion.div>

            {/* Right Side */}
            <motion.div
                className="flex-1 flex justify-center mt-8 md:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.img 
                    src={portfolioData.image}
                    alt={portfolioData.name}
                    className="w-64 h-64 object-cover rounded-full border-4 border-red-500 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />
            </motion.div>
        </section>
    );
}