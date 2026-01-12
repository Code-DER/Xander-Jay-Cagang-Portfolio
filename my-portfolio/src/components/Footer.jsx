import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bottom-0 w-full z-50 bg-white/1 backdrop-blur-sm shadow-lg py-2"
        >
            <div className="mx-auto flex items-center justify-between flex-col gap-4 py-3 text-white font-medium
                            xl:max-w-7xl sm:flex-row md:px-8"
            >
                <div>
                    Created by <span className="text-[#FF5F00]">Xander Jay C. Cagang</span>
                </div>
                <div>
                    Copyright © 2025
                </div>
            </div>
        </motion.footer>
    )
}