import { motion } from "framer-motion";
import developer from "../assets/developer.svg";
import { FaCamera, FaGamepad, FaMusic, FaPlane } from "react-icons/fa";

export default function About() {
    return (
        <>
            {/* Get to know info */}
            <motion.section
                className="min-h-[calc(100vh-4rem)] flex-1 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-8 px-20"
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
                        <ul className="grid grid-cols-2 gap-3 pt-4 text-lg">
                            <li className="flex items-center gap-2">
                                <FaCamera className="text-[#2ECC71]"/> Photography
                            </li>
                            <li className="flex items-center gap-2">
                                <FaMusic className="text-[#2ECC71]"/> Music
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPlane className="text-[#2ECC71]"/> Travelling
                            </li>
                            <li className="flex items-center gap-2">
                                <FaGamepad className="text-[#2ECC71]"/> Gaming
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </motion.section>

            {/* Skillset */}
            <motion.section>

            </motion.section>

            {/* Tech Stack */}
            <motion.section>

            </motion.section>
        </>
    );
}