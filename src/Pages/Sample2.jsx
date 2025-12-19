import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Menu from '@mui/icons-material/Menu';
import Download from '@mui/icons-material/Download';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Send from '@mui/icons-material/Send';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


export default function Sample() {
    const [darkMode, setDarkMode] = useState(true); // Default to dark to match screenshot
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    // Hand-drawn doodle background (teal icons on dark)
    const doodleBg = "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 50 Q 30 20 50 50 T 90 50' stroke='%2300C9C8' stroke-width='1' fill='none' opacity='0.1'/%3E%3Ccircle cx='20' cy='20' r='3' fill='%2300C9C8' opacity='0.1'/%3E%3Cpath d='M70 30 l10 10 m-10 0 l10 -10' stroke='%2300C9C8' opacity='0.1'/%3E%3Crect x='40' y='60' width='20' height='15' stroke='%2300C9C8' opacity='0.1' fill='none'/%3E%3C/svg%3E\")";

    return (
        <>
            <div className="min-h-screen bg-gray-900 text-white font-sans">
                {/* Doodle Background Overlay */}
                <div className="fixed inset-0 pointer-events-none opacity-20" style={{ backgroundImage: doodleBg }} />

                {/* Navbar */}
                <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-20">
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                                <button onClick={() => scrollToSection('home')} className="font-bold text-xl">
                                    Saul<span className="text-gray-500 font-normal">Design</span>
                                </button>
                            </motion.div>

                            <div className="hidden md:flex items-center space-x-8">
                                <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-teal-400 transition">Home</button>
                                <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-400 hover:text-teal-400 transition">About Me</button>
                                <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-gray-400 hover:text-teal-400 transition">Contact</button>
                                <button onClick={toggleDarkMode}>
                                    {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                                </button>

                            </div>

                            <div className="md:hidden flex items-center gap-4">
                                <button onClick={toggleDarkMode}>
                                    {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                                </button>

                                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><Menu className="text-3xl" /></button>
                            </div>
                        </div>
                    </div>

                    {mobileMenuOpen && (
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-gray-900 border-t border-gray-800">
                            <div className="px-4 py-6 space-y-4">
                                <button onClick={() => scrollToSection('home')} className="block w-full text-left text-lg hover:text-teal-400">Home</button>
                                <button onClick={() => scrollToSection('about')} className="block w-full text-left text-lg hover:text-teal-400">About Me</button>
                                <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-lg hover:text-teal-400">Contact</button>
                            </div>
                        </motion.div>
                    )}
                </nav>

                {/* Hero */}
                <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 relative">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center md:text-left">
                            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                                CREATIVE UI <br />
                                <span className="text-teal-400">DESIGNER</span>
                            </h1>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-3 bg-teal-400 text-gray-900 rounded-full font-bold">
                                    Hire me
                                </motion.button>
                                <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-3 border border-gray-600 rounded-full flex items-center justify-center gap-2">
                                    Download CV <Download />
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-center">
                            {/* Illustration - relaxed designer */}
                            <img src="https://thumbs.dreamstime.com/b/graphic-designer-working-computer-creative-process-digital-art-vector-design-generative-ai-modern-illustration-417667094.jpg" alt="Creative Designer" className="max-w-md rounded-2xl" />
                        </motion.div>
                    </div>
                </section>

                {/* About */}
                <section id="about" className="py-20 px-4 relative" style={{ backgroundImage: doodleBg, backgroundSize: '200px' }}>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-5xl font-bold mb-6">About <span className="text-teal-400">me</span></h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra...
                            </p>
                            <button className="flex items-center font-semibold hover:text-teal-400 transition">
                                Read more <ArrowForward className="ml-2" />
                            </button>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex justify-center">
                            {/* Freelancer illustration */}
                            <img src="https://thumbs.dreamstime.com/b/graphic-designer-work-vibrant-illustration-working-cozy-home-office-engrossed-their-using-digital-drawing-tablet-405144266.jpg" alt="About Me" className="max-w-md" />
                        </motion.div>
                    </div>
                </section>

                {/* Works */}
                <section id="works" className="py-20 px-4 relative" style={{ backgroundImage: doodleBg }}>
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-5xl font-bold mb-12">
                            My recent <span className="text-teal-400">works</span>
                        </motion.h2>

                        <div className="flex justify-center gap-4 mb-12">
                            <button className="px-8 py-3 bg-teal-400 text-gray-900 rounded-full font-bold">All</button>
                            <button className="px-8 py-3 border border-gray-600 rounded-full">UI</button>
                            <button className="px-8 py-3 border border-gray-600 rounded-full">UX</button>
                            <button className="px-8 py-3 border border-gray-600 rounded-full">Web Design</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Mockup examples - using gradient cards */}
                            <motion.div whileHover={{ y: -10 }} className="bg-linear-to-br from-purple-600 to-teal-500 p-8 rounded-3xl shadow-2xl">
                                <div className="bg-white/20 backdrop-blur rounded-2xl h-64" />
                                <p className="mt-4 text-lg">Dashboard Design</p>
                            </motion.div>
                            <motion.div whileHover={{ y: -10 }} className="bg-linear-to-br from-purple-500 to-pink-500 p-8 rounded-3xl shadow-2xl">
                                <div className="bg-white/20 backdrop-blur rounded-2xl h-64" />
                                <p className="mt-4 text-lg">Landing Page</p>
                            </motion.div>
                            <motion.div whileHover={{ y: -10 }} className="bg-linear-to-br from-teal-400 to-blue-600 p-8 rounded-3xl shadow-2xl">
                                <div className="bg-white/20 backdrop-blur rounded-2xl h-64" />
                                <p className="mt-4 text-lg">Mobile App</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="py-20 px-4">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
                            <h2 className="text-5xl font-bold mb-8">
                                Got a project in <br />
                                <span className="text-teal-400">mind?</span>
                            </h2>
                            <img src="https://www.shutterstock.com/image-vector/happy-man-drawing-on-tablet-260nw-2606754777.jpg" alt="Project Idea" className="max-w-sm" />
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="bg-gray-800/50 backdrop-blur p-10 rounded-3xl">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Your name" className="px-6 py-4 bg-gray-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-400" />
                                    <input type="email" placeholder="Your email" className="px-6 py-4 bg-gray-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-400" />
                                </div>
                                <textarea rows={6} placeholder="Your Message" className="w-full px-6 py-4 bg-gray-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none" />
                                <motion.button whileHover={{ scale: 1.05 }} className="px-10 py-4 bg-teal-400 text-gray-900 rounded-full font-bold flex items-center gap-2">
                                    Send Message <Send />
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 py-12 border-t border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <div className="flex justify-center gap-8 mb-8">
                            <button className="hover:text-teal-400">Home</button>
                            <button className="hover:text-teal-400">About me</button>
                            <button className="hover:text-teal-400">Contact</button>
                        </div>
                        <div className="flex justify-center gap-6">
                            {/* Social icons */}
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-400 transition" />
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-400 transition" />
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-400 transition" />
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-400 transition" />
                        </div>
                        <p className="text-xs text-gray-500 mt-8">Terms of Service - Privacy Policy</p>
                    </div>
                </footer>
            </div>
        </>
    );
}