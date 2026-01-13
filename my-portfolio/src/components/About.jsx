import { motion } from "framer-motion";
import developer from "../assets/developer.svg";
import { FaCamera, FaGamepad, FaMusic, FaPlane } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function About() {
    return (
        <>
            {/* Get to know info */}
            <motion.section
                className="min-h-[calc(100vh-4rem)] flex-1 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-8 px-3 md:px-8 lg:px-20 mt-6 md:mt-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Image Area */}
                <motion.div 
                    className="flex-1 flex justify-center basis-1/3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.img
                        src={developer}
                        alt="Developer"
                        className="w-72 md:w-80 h-auto drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                </motion.div>

                {/* Text Area */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }} 
                    className="flex-1 basis-2/3 max-w-2xl space-y-6 text-gray-200"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#004CD7] text-center mb-6">
                        Get to know me
                    </h1>
                    <div className="text-lg md:text-xl leading-relaxed text-gray-200">
                        <p className="text-lg md:text-xl leading-relaxed">
                            Hey everyone! I'm {" "}
                            <span className="font-semibold text-[#004CD7]">
                                Xander Jay C. Cagang
                            </span>, born and raised in {" "} 
                            <span className="font-semibold text-[#004CD7]">
                                Davao City, Philippines
                            </span>. You can call me 
                            "<span className="font-semibold text-[#004CD7]">
                                Der
                            </span>" for short. I am currently a {" "} 
                            <span className="font-semibold text-[#004CD7]">
                                Computer Science
                            </span> student, studying in the {" "}
                            <span className="font-semibold text-[#004CD7]">
                                University of the Philippines Mindanao
                            </span>. I am aspiring to become a {" "}
                            <span className="font-semibold text-[#004CD7]">
                                full-stack developer
                            </span> in the near future.
                        </p>
                        <br/>
                        <p className="text-lg md:text-xl">Outside of coding, I also enjoy:</p>
                        <ul className="grid sm:grid-cols-2 grid-cols-1 gap-2 pt-4 text-sm lg:text-lg sm:mx-auto">
                            <li className="flex items-center justify-center sm:justify-start gap-2">
                                <FaCamera className="text-[#2ECC71]"/> Photography
                            </li>
                            <li className="flex items-center justify-center sm:justify-start gap-2">
                                <FaMusic className="text-[#2ECC71]"/> Music
                            </li>
                            <li className="flex items-center justify-center sm:justify-start gap-2">
                                <FaPlane className="text-[#2ECC71]"/> Travelling
                            </li>
                            <li className="flex items-center justify-center sm:justify-start gap-2">
                                <FaGamepad className="text-[#2ECC71]"/> Gaming
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </motion.section>

            {/* Skillset */}
            <motion.section
                className="flex flex-col items-center justify-center gap-6 py-4 md:py-16 px-6 md:px-10 lg:px-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl font-bold text-center">
                    My {" "}
                    <span className="font-bold text-[#004CD7]">
                        Skillset
                    </span>
                </h1>
                <div className="flex flex-wrap gap-4 md:gap-8 max-w-5xl justify-center text-4xl mt-4 md:mt-10 px-4">
                    {portfolioData.skillset.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div key={index} className="group relative cursor-pointer">
                                <div 
                                    className="p-4 md:p-8 lg:p-10 rounded-full backdrop-blur-lg border border-[#FF5F00] bg-gradient-to-tr from-black/60 to-black/40
                                    shadow-lg hover:shadow-2xl hover:shadow-[#FF5F00]/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 
                                    transition-all duration-300 ease-out cursor-pointer hover:border-[#FF5F00]/30 hover:bg-gradient-to-tr hover:from-[#FF5F00]/10 
                                    hover:to-black/40 group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF5F00]/10 to-transparent -translate-x-full
                                    group-hover:translate-x-full transition-transform duration-700 ease-out">
                                    </div>
                                    <div className="relative z-10">
                                        <Icon className="w-8 h-8 md:w-12 md:h-12 fill-current transition-colors duration-300" style={{ color: skill.color }}/>
                                    </div>
                                    
                                </div>

                                <span className="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 rounded-lg border border-gray-300
                                bg-white py-1 text-xs md:text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
                                style={{ backgroundColor: skill.color, color: "#fff"}}>
                                    {skill.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </motion.section>

            {/* Tech Stack */}
            <motion.section
                className="flex flex-col items-center justify-center gap-6 py-10 md:py-16 px-6 md:px-10 lg:px-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl font-bold text-center">
                    <span className="font-bold text-[#004CD7]">
                        Tools
                    </span> {" "}
                    that I use
                </h1>
                <div className="flex flex-wrap gap-4 md:gap-8 max-w-5xl justify-center text-4xl mt-4 md:mt-10 px-4">
                    {portfolioData.tools.map((tool, index) => {
                        const Icon = tool.icon;
                        return (
                            <div key={index} className="group relative cursor-pointer">
                                <div 
                                    className="p-4 md:p-8 lg:p-10 rounded-full backdrop-blur-lg border border-[#FF5F00] bg-gradient-to-tr from-black/60 to-black/40
                                    shadow-lg hover:shadow-2xl hover:shadow-[#FF5F00]/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 
                                    transition-all duration-300 ease-out cursor-pointer hover:border-[#FF5F00]/30 hover:bg-gradient-to-tr hover:from-[#FF5F00]/10 
                                    hover:to-black/40 group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF5F00]/10 to-transparent -translate-x-full
                                    group-hover:translate-x-full transition-transform duration-700 ease-out">
                                    </div>
                                    <div className="relative z-10">
                                        <Icon className="w-8 h-8 md:w-12 md:h-12 fill-current transition-colors duration-300" style={{ color: tool.color }}/>
                                    </div>
                                    
                                </div>
                                <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 rounded-lg border border-gray-300
                                bg-white py-1 text-xs md:text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
                                style={{ backgroundColor: tool.color, color: "#fff"}}>
                                    {tool.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </motion.section>
        </>
    );
}