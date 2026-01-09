import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import Card from "./Card";

export default function Projects() {
    return (
        <>
            <motion.section
                className="flex-1 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-8 px-20 pt-15 pb-5"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0}}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 basis-2/3 max-2-2xl space-y-6 text-gray-200"
                >
                    <h1 className="text-3xl font-bold text-center">
                        What have I made?
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed text-justify">
                        These are the projects that I've made to improve my coding skills.
                        These projects are self-made projects based on learnings and interests. 
                        I've also included activities and projects that I've made in school.
                    </p>
                </motion.div>
                
            </motion.section>
            <motion.section
                className="flex flex-col items-center justify-center gap-6 px-20 py-10"
            >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0}}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl font-bold text-center">
                        My Own {" "}
                        <span className="font-bold text-[#004CD7]">
                            Projects
                        </span>
                    </h1>
                </motion.div>
                <motion.div
                    className="flex flex-wrap w-full justify-center gap-12 max-w-7xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0}}
                    transition={{ duration: 0.5 }}
                >
                    {portfolioData.ownProjects.map((project, index) => {
                        return (
                            <Card data={portfolioData.ownProjects[index]}/> 
                        )
                    })}
                </motion.div>
            </motion.section>
            <motion.section
                className="flex flex-col items-center justify-center gap-6 px-20 py-10 "
            >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0}}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl font-bold text-center">
                        School {" "}
                        <span className="font-bold text-[#004CD7]">
                            Activities
                        </span>
                    </h1>
                </motion.div>
                <motion.div
                    className="flex flex-wrap w-full justify-center gap-12 max-w-7xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0}}
                    transition={{ duration: 0.5 }}
                >
                    {portfolioData.schoolActivities.map((activity, index) => {
                        return (
                            <Card data={portfolioData.schoolActivities[index]}/>
                        )
                    })}
                </motion.div>
            </motion.section>
        </>
    );
}