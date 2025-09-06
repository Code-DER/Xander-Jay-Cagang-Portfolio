import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Layout from "./Layout";

export default function Home() {
    return (
        <>
            {/* Hero */}
            <motion.section
                className="min-h-[calc(100vh-4rem)] flex-1 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-8 px-20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Text Area */}
                <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-extrabold">
                        Hi, I'm{" "}
                        <span className="bg-clip-text text-[#004CD7]">
                            {portfolioData.name}
                        </span>
                    </h1>
                    <motion.h2
                        className="mt-2 text-lg md:text-xl text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        A passionate Web Developer & Designer 🚀
                    </motion.h2>
                </div>

                {/* Image Area */}
                <motion.div
                    className="flex-1 flex justify-center md:justify-end"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <motion.img 
                    src={portfolioData.image}
                    alt={portfolioData.name}
                    className="w-64 h-64 object-cover rounded-full border-4 border-red-500 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    />
                </motion.div>
            </motion.section>

            {/* Short intro */}
            <motion.section
                className="flex-1 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Text Area */}
                
                <h1 className="text-3xl md:text-4xl font-bold">
                    Short introduction about me
                </h1>
                <div className="max-w-2xl space-y-2 text-gray-300">
                    <p>I am currently a Computer Science student.</p>
                    <p>I enjoy web development ever since I started learning it.</p>
                    <p>Some of my other hobbies are photography, music, and travelling.</p>
                </div>
            </motion.section>

            {/* Contacts */}
            <motion.section
                className="flex flex-col items-center justify-center gap-6 py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2>Find and Connect with me</h2>
                <div className="flex gap-6 text-3xl">
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                        <FaGithub className="hover:text-[#004CD7] transition-colors" />
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                        <FaFacebook className="hover:text-[#004CD7] transition-colors" />
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                        <FaInstagram className="hover:text-[#004CD7] transition-colors" />
                    </a>
                </div>
            </motion.section>
        </>
    );
}