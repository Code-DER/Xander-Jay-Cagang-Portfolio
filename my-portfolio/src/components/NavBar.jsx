import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Resume", path: "/resume" },
    ]
    
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50"
        >
            <div className="max-w-6xl mx-auto flex justify-center gap-8 py-3 text-gray-700 font-medium">
                {links.map(link => (
                    <Link
                        key={link.id}
                        to={link.path}
                        className="hover:text-pink-500 transition colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </motion.nav>
    )
}