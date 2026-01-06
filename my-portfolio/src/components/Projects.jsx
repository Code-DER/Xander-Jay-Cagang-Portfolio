import { motion } from "framer-motion";

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
            </motion.section>
            <section>
                <h1 className="text-3xl font-bold text-center">
                    School {" "}
                    <span className="font-bold text-[#004CD7]">
                        Activities
                    </span>
                </h1>
            </section>
        </>
    );
}