import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import work from "../assets/computer-work.svg"
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
                className="min-h-auto flex-1 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-4 px-20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Text Area */}
                <div className="flex-1 basis-2/3">
                    <h1 className="text-3xl md:text-4xl font-bold text-center">
                    Short introduction about me
                    </h1>
                    <div className="max-w-2xl space-y-2 text-white pt-20 text-2xl">
                        <p>I am currently a <span className="text-[#004CD7]">Computer Science</span> student.</p>
                        <br/>
                        <p>I enjoy <span className="text-[#004CD7]">web development</span> ever since I started learning it.</p>
                        <br/>
                        <p>Some of my other hobbies are <span className="text-[#004CD7]">photography, music, and travelling</span>.</p>
                    </div>
                </div>
                
                {/* Image Area */}
                <motion.div
                    className="flex-1 flex justify-center basis-1/3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <motion.img
                        src={work}
                        alt="Working Sticker"
                        className="w-80 h-auto object-contain"
                    />
                </motion.div>
            </motion.section>

            {/* Contacts */}
            <motion.section
                className="flex flex-col items-center justify-center gap-6 py-16 px-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold text-center">Find me on</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl text-3xl">
                    {Object.entries(portfolioData.socials).map(([key, social]) => { 
                        const Icon = social.icon;
                        return (
                            <a 
                                key={key} 
                                href={social.url} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex items-center gap-3 text-lg text-gray-300 hover:text-[#004CD7] transition-colors"    
                            >
                                <Icon className="text-3xl"/>
                                <span>{social.username}</span>
                            </a>
                        );
                    })}
                </div>
            </motion.section>
        </>
    );
}