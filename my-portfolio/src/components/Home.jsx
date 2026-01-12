import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";
import work from "../assets/computer-work.svg"

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <motion.section
                className="min-h-[calc(100vh-4rem)] flex-1 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-8 md:gap-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:max-w-7xl xl:mx-auto mt-6 md:mt-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Text Area */}
                <div className="flex-1 order-2 md:order-1">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        Hi, I'm{" "}
                        <span className="bg-clip-text text-[#004CD7]">
                            Xander Jay!
                        </span>
                    </h1>
                    <h2 className="pt-4 mt-2 text-lg sm:text-xl md:text-3xl lg:text-4xl text-gray-600" >
                        <span className="text-[#2ECC71] font-bold">
                            <Typewriter 
                                words={['Computer Science Student', 'Web Developer', 'Backend Developer']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h2>

                    <p className="text-gray-300 pt-6 text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0">
                        {portfolioData.about}
                    </p>

                    <div className="pt-8 flex flex-col xs:flex-row justify-center md:justify-start gap-4">
                        <a
                            href="/about"
                            className="flex items-center justify-center gap-2 px-6 sm:px-10 py-3 border-3 border-[#004CD7] text-white rounded-lg font-semibold shadow-md hover:bg-[#004CD7] transition-colors text-sm sm:text-base"                       
                        >
                            About Me <FaExternalLinkAlt />
                        </a>
                        <a
                            href="/projects"
                            className="flex items-center justify-center gap-2 px-6 sm:px-10 py-3 border-3 border-[#2ECC71] text-white rounded-lg font-semibold shadow-md hover:bg-[#2ECC71] transition-colors text-sm sm:text-base"
                        >
                            Projects <FaCode />
                        </a>
                    </div>

                    <div className="pt-10 flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                        {Object.entries(portfolioData.socials).map(([key, social]) => {
                            const Icon = social.icon;
                            return (
                            <a
                                key={key}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full 
                                        border-2 border-[#004CD7] text-[#2ECC71] 
                                        hover:bg-[#004CD7] transition-colors"
                            >
                                <Icon className="text-xl sm:text-2xl" /> 
                            </a>
                            );
                        })}
                    </div>
                </div>

                {/* Image Area */}
                <motion.div
                    className="flex-1 flex justify-center items-center order-1 md:order-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <motion.div
                        className="p-[3px] sm:p-[4px] h-fit rounded-full bg-gradient-to-r from-[#FF4F00] to-[#FF5F00] shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.img 
                            src={portfolioData.image}
                            alt={portfolioData.name}
                            className="w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-full"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Short intro */}
            <motion.section
                className="py-16 sm:py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Text Area */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    Short introduction about me
                    </h1>
                    <div className="space-y-2 text-white pt-8 text-lg sm:text-xl lg:text-2xl mx-auto md:mx-0">
                        <p>I am currently a <span className="font-semibold text-[#004CD7]">Computer Science</span> student.</p>
                        <br/>
                        <p>I enjoy <span className="font-semibold text-[#004CD7]">web development</span> ever since I started learning it.</p>
                        <br/>
                        <p>Some of my other hobbies are <span className="font-semibold text-[#004CD7]">photography</span>, <span className="font-semibold text-[#004CD7]">music</span>, and <span className="font-semibold text-[#004CD7]">travelling</span>.</p>
                    </div>
                </div>
                
                {/* Image Area */}
                <motion.div
                    className="flex-1 flex justify-center order-first md:order-last"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <motion.img
                        src={work}
                        alt="Working Sticker"
                        className="w-40 sm:w-56 md:w-72 lg:w-96 h-auto drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                </motion.div>
            </motion.section>

            {/* Contacts */}
            <motion.section
                className="flex flex-col items-center justify-center gap-6 py-16 px-6 md:px-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold text-center">Find me on</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:max-w-4xl">
                    {Object.entries(portfolioData.socials).map(([key, social]) => { 
                        const Icon = social.icon;
                        return (
                            <a 
                                key={key} 
                                href={social.url} 
                                target="_blank" 
                                rel="noreferrer"
                                className="group flex items-center md:justify-start gap-3 text-lg text-gray-300 transition-all during-300 ml-8 md:ml-10"    
                            >
                                <Icon className="text-xl md:text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:text-[#2ECC71] text-[#2ECC71] md:text-white" />
                                <span className="text-xs md:text-xl relative group-hover:text-[#2ECC71]">
                                    {social.username}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[3px] rounded bg-[#2ECC71] transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </a>
                        );
                    })}
                </div>
            </motion.section>
        </>
    );
}