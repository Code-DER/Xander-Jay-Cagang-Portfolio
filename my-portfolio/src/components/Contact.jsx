import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function About() {
    return (
        <section id="contact" className="py-20 bg-pink-50 text-gray-700">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6 text-pink-500">Contact</h2>
                <p className="mb-6">Feel free to reach out through any of my platforms below:</p>
                <div className="flex justify-center gap-6">
                    <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-pink-500">Email</a>
                    <a href={portfolioData.contact.github} target="_blank" className="hover:text-pink-500">Github</a>
                    <a href={portfolioData.contact.facebook} target="_blank" className="hover:text-pink-500">Facebook</a>
                    <a href={portfolioData.contact.instagram} target="_blank" className="hover:text-pink-500">Instagram</a>
                </div>
            </div>
        </section>
    );
}