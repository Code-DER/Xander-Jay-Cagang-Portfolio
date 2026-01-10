import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaFolder, FaRegAddressBook, FaTimes, FaBars} from 'react-icons/fa';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { id: 1, name: "Home", path: "/", icon: <FaHome /> },
        { id: 2, name: "About", path: "/about", icon: <FaUser /> },
        { id: 3, name: "Projects", path: "/projects", icon: <FaFolder /> },
    ];
    
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full z-50 bg-white/4 backdrop-blur-md shadow-lg py-2 px-6"
        >
            <div className='max-w-6xl mx-auto flex items-center justify-between py-3 text-gray-700 font-medium'>
                <div className='text-xl text-[#FF5F00] font-bold ml-4'>
                    Code-DER
                </div>
                <div className='hidden md:flex gap-16'>
                    {links.map(link => (
                        <Link
                            key={link.id}
                            to={link.path}
                            className="relative text-xl text-white flex items-center gap-2 transition-colors hover:text-[#2ECC71]
                            after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[4px] after:rounded after:w-0
                            after:bg-[#2ECC71] after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.icon}
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white text-2xl focus:outline-none"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-transparent rounded-b-xl overflow-hidden border-t-1 border-gray-500"
                    >
                        <div className="flex flex-col p-2 gap-4">
                            {links.map(link => (
                                <Link
                                    key={link.id}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white flex items-center gap-4 py-2 px-2 rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    <span className="text-[#2ECC71] text-xl">{link.icon}</span>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}