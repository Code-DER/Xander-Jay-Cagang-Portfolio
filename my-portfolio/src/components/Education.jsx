import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
    return (
        <section id="education" className="py-20 bg-blue-50 text-gray-700">
            <div className="max-2-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6 text-blue-500">Education</h2>
                <div className="space-y-4">
                    {portfolioData.education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="p-4 bg-white rounded-lg shadow"
                        >
                            <h3 className="font-semibold">{edu.school}</h3>
                            <p className="text-sm text-gray-600">{edu.degree}</p>
                            <span className="text-xs text-gray-500">{edu.year}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}