import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import Card from "./Card";

export default function Projects() {
    return (
        <>
            <motion.section
                className="flex-1 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-8 px-20 py-10"
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
                    <p>
                        These are the projects that I've worked on to work on my coding skills.
                        These projects are self-made projects based on interests. I've also included
                        activities and projects that I've made in school.
                    </p>
                </motion.div>
                
            </motion.section>
            <motion.section
                className="flex flex-col items-center justify-center gap-6 py-16 px-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl font-bold text-center">
                    My Own {" "}
                    <span className="font-bold text-[#004CD7]">
                        Projects
                    </span>
                </h1>
                <div>
                    {portfolioData.ownProjects.map((project, index) => {
                        return (
                            <Card data={portfolioData.ownProjects[index]}/> 
                        )
                    })}
                </div>
                {/* <div>
                    {portfolioData.ownProjects.map((project, index) => {
                        return (
                            <div 
                                key={index}
                                className="w-[190px] h-[254px] group relative bg-[#171717] flex justify-center items-center cursor-pointer overflow-hidden shadow-[0px_0px_3px_1px_#00000088]"
                            >
                                <div
                                    className="z-[1] h-[250px] w-[186px] flex items-center justify-center rounded-[5px] bg-[#171717] p-5 text-white"
                                >
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div>
                                        {project.tech.map((tech, index) => {
                                            return (
                                                <p>{tech}</p>
                                            )
                                        })}
                                    </div>
                                    <a href={project.link} target="_blank">
                                        <div>link</div>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div> */}
            </motion.section>
            <section>
                <h1 className="text-3xl font-bold text-center">
                    School {" "}
                    <span className="font-bold text-[#004CD7]">
                        Activities
                    </span>
                </h1>
                <div>
                    {portfolioData.schoolActivities.map((activity, index) => {
                        return (
                            <Card data={portfolioData.schoolActivities[index]}/>
                        )
                    })}
                </div>
                {/* <div>
                    {portfolioData.schoolActivities.map((activity, index) => {
                        return (
                            <div 
                                key={index}
                                
                            >
                                <div>
                                <h3>{activity.title}</h3>
                                <p>{activity.description}</p>
                                <div>
                                    {activity.tech.map((tech, index) => {
                                        return (
                                            <p>{tech}</p>
                                        )
                                    })}
                                </div>
                                <a href={activity.link} target="_blank">
                                    <div>link</div>
                                </a>
                                </div>
                            </div>
                        )
                    })}
                </div> */}
            </section>
        </>
    );
}