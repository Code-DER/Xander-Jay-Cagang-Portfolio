import { motion } from 'framer-motion';

export default function Navbar() {
    const links = [
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Education", id: "education" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50"
        >
            <div className="max-w-6xl mx-auto flex justify-center gap-8 py-3 text-gray-700 font-medium">
                {links.map(link => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        className="hover:text-pink-500 transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
}