import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-green-50 text-gray-700">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6 text-green-500">Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {portfolioData.projects.map((proj, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                        >
                            <h3 className="font-semibold text-lg">{proj.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{proj.description}</p>
                            <div className="mt-2 text-xs text-gray-500">{proj.tech.join(", ")}</div>
                            <a href={proj.link} target="_blank" rel="noreferrer" className="mt-3 inline-block text-green-500 hover:underline">
                                View Project →
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}