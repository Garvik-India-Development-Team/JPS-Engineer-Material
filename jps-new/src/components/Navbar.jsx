import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'Products', to: 'products' },
        { name: 'Infrastructure', to: 'infrastructure' },
        { name: 'Why Us', to: 'features' },
    ];

    const moreLinks = [
        { name: 'Certificates', to: 'certificates' }, // Placeholder links
        { name: 'Careers', to: 'careers' },
        { name: 'CSR', to: 'csr' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
            {/* Glassmorphic Container */}
            <div className={`absolute inset-0 transition-all duration-500 ${scrolled ? 'bg-secondary/90 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}></div>

            {/* Top Bar Info (visible only at top) */}
            <div className={`relative z-10 transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'} border-b border-white/10`}>
                <div className="container mx-auto px-4 flex justify-between items-center h-full text-xs font-body tracking-wider text-gray-300">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2">
                            <MapPin size={12} className="text-primary" /> ISO 9001:2015 Certified
                        </span>
                    </div>
                    <div className="flex gap-6">
                        <a href="mailto:contact@jpsenggmaterials.com" className="hover:text-primary transition-colors flex items-center gap-2">
                            <Mail size={12} className="text-primary" /> contact@jpsenggmaterials.com
                        </a>
                        <a href="tel:01204818775" className="hover:text-primary transition-colors flex items-center gap-2">
                            <Phone size={12} className="text-primary" /> 0120-4818775, +91-9811131910 (Sales)
                        </a>
                    </div>
                </div>
            </div>

            <nav className="container mx-auto px-4 md:px-6 relative z-10 flex justify-between items-center transition-all duration-300 mt-2">
                {/* Logo */}
                <Link to="home" smooth={true} className="flex items-center gap-3 cursor-pointer group">
                    <div className="bg-primary/10 border border-primary/20 p-2 rounded backdrop-blur-sm group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <span className="text-primary group-hover:text-secondary font-bold text-2xl font-heading tracking-widest leading-none block">JPS</span>
                    </div>
                    <div className="flex flex-col">
                        <span className={`font-bold text-2xl font-heading tracking-tight leading-none transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>
                            ENGINEERING
                        </span>
                        <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase">Material Pvt Ltd</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            offset={-100}
                            className={`font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer relative group ${scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'}`}
                        >
                            {link.name}
                            <span className="absolute bottom-[-1px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}

                    {/* More Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setMoreOpen(true)}
                        onMouseLeave={() => setMoreOpen(false)}
                    >
                        <button className={`flex items-center gap-1 font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer ${scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'}`}>
                            More <ChevronDown size={14} />
                        </button>

                        <AnimatePresence>
                            {moreOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full right-0 mt-2 w-48 bg-secondary/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-sm overflow-hidden"
                                >
                                    {moreLinks.map((link) => (
                                        <div key={link.name} className="block px-6 py-3 text-gray-300 hover:bg-primary hover:text-secondary text-sm font-bold uppercase tracking-wider cursor-pointer border-b border-white/5 last:border-0 transition-colors">
                                            {link.name}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link to="contact" smooth={true} offset={-100}>
                        <button className="bg-primary hover:bg-yellow-400 text-secondary font-heading font-bold uppercase tracking-widest px-8 py-3 clip-path-slant transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)]">
                            Get a Quote
                        </button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-secondary border-t border-white/10 absolute w-full left-0 top-full px-6 py-8 shadow-2xl overflow-hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    offset={-80}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/80 font-heading font-bold text-xl uppercase tracking-wider border-b border-white/5 pb-2 hover:text-primary hover:pl-2 transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            {moreLinks.map((link) => (
                                <div key={link.name} className="text-white/60 font-heading font-bold text-lg uppercase tracking-wider pb-2 pl-4 hover:text-primary cursor-pointer">
                                    {link.name}
                                </div>
                            ))}
                            <Link to="contact" smooth={true} offset={-80} onClick={() => setIsOpen(false)}>
                                <button className="w-full bg-primary text-secondary font-bold uppercase py-4 hover:bg-white transition-colors">
                                    Get a Quote
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
