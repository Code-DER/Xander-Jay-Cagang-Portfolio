import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaFolder, FaRegAddressBook} from 'react-icons/fa';

export default function NavBar() {
    const links = [
        { id: 1, name: "Home", path: "/", icon: <FaHome /> },
        { id: 2, name: "About", path: "/about", icon: <FaUser /> },
        { id: 3, name: "Projects", path: "/projects", icon: <FaFolder /> },
        { id: 4, name: "Resume", path: "/resume", icon: <FaRegAddressBook /> },
    ];
    
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50"
        >
            <div className='max-w-6xl mx-auto flex items-center justify-between gap-8 py-3 text-gray-700 font-medium'>
                <div className='text-xl font-bold'>
                    Code-DER
                </div>
                <div className='flex gap-8'>
                    {links.map(link => (
                        <Link
                            key={link.id}
                            to={link.path}
                            className="flex items-center gap-2 hover:text-pink-500 transition colors"
                        >
                            {link.icon}
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </motion.nav>
    )
}