import { motion } from 'framer-motion';

const links = [
    { name: "Intro", href: "#intro" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
];

export default function Navbar() {
    return (
        <motion.nav
            className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ul className="flex justify-center gap-8 py-4">
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} className="text-gray-700 hover:text-pastelBlue">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

        </motion.nav>
    );
}