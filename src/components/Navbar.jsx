import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center py-8 px-6 sm:px-12 max-w-5xl mx-auto"
        >
            <Link to="/" className="text-xl font-serif font-bold tracking-tight text-slate-900">
                AllWebServices .
            </Link>
            <div className="flex gap-8 text-sm font-medium text-slate-500">
                <Link to="/project" className="hover:text-slate-900 transition-colors">Work</Link>
                <Link to="/about" className="hover:text-slate-900 transition-colors">About</Link>
                <Link to="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
            </div>
        </motion.nav>
    );
};

export default Navbar;
