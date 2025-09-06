import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bottom-0 w-full z-50 bg-white/1 backdrop-blur-sm shadow-lg py-2"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 py-3 text-white font-medium">
                <div>
                    Created by <span className="text-[#2ECC71]">Xander Jay C. Cagang</span>
                </div>
                <div>
                    Copyright © 2025
                </div>
            </div>
        </motion.footer>
    )
}