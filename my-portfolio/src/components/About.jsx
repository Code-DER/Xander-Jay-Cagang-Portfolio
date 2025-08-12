import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white text-gray-700">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-6 text-pink-500"
                >
                    About Me
                </motion.h2>
                <p className="text-lg leading-relaxed">
                    {portfolioData.about}
                </p>
            </div>
        </section>
    );
}