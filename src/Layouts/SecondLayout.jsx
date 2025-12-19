
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Menu from '@mui/icons-material/Menu';
import Download from '@mui/icons-material/Download';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Send from '@mui/icons-material/Send';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import Phone from '@mui/icons-material/Phone';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import AlternateEmail from '@mui/icons-material/AlternateEmail';
import PlayArrow from '@mui/icons-material/PlayArrow';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


const SecondLayout = () => {
    const [darkMode, setDarkMode] = useState(false);
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

    return (
        <>
            <div className={`min-h-screen bg-gray-50 dark:bg-[#161b22] text-gray-800 dark:text-gray-200 transition-colors duration-500 font-sans`}>
                {/* Background Pattern */}
                <div className="fixed inset-0 pointer-events-none opacity-10 dark:opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

                {/* Navbar */}
                <nav className="fixed top-0 left-0 w-full z-50 bg-gray-50/90 dark:bg-[#161b22]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-20">
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center">
                                <button onClick={() => scrollToSection('home')} className="font-bold text-xl">
                                    Saul<span className="text-gray-500 dark:text-gray-400 font-normal">Design</span>
                                </button>
                            </motion.div>

                            <div className="hidden md:flex items-center space-x-8">
                                <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-teal-500 transition-colors">Home</button>
                                <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-teal-500 transition-colors">About Me</button>
                                <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-teal-500 transition-colors">Contact</button>
                                <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition">
                                    {darkMode ? (
                                        <LightModeIcon className="text-yellow-400" />
                                    ) : (
                                        <DarkModeIcon />
                                    )}
                                </button>
                            </div>

                            <div className="md:hidden flex items-center gap-4">
                                <button onClick={toggleDarkMode} className="p-2">
                                    {darkMode ? (
                                        <LightModeIcon className="text-yellow-400" />
                                    ) : (
                                        <DarkModeIcon />
                                    )}
                                </button>
                                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                    <Menu className="text-3xl" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-gray-50 dark:bg-[#161b22] border-t border-gray-200 dark:border-gray-800">
                            <div className="px-4 py-6 space-y-4">
                                <button onClick={() => scrollToSection('home')} className="block w-full text-left text-lg font-medium hover:text-teal-500">Home</button>
                                <button onClick={() => scrollToSection('about')} className="block w-full text-left text-lg font-medium hover:text-teal-500">About Me</button>
                                <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-lg font-medium hover:text-teal-500">Contact</button>
                            </div>
                        </motion.div>
                    )}
                </nav>

                {/* Hero Section */}
                <section id="home" className="min-h-screen flex items-center justify-center py-12 px-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-teal-500/5 blur-3xl" />
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center md:text-left">
                            <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-4">
                                CREATIVE UI <br />
                                <span className="text-teal-500 relative inline-block">
                                    DESIGNER
                                    <svg className="absolute -bottom-3 left-0 w-full h-4 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 0 100 5" fill="none" stroke="currentColor" strokeWidth="4" className="text-teal-500" />
                                    </svg>
                                </span>
                            </h1>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition">
                                    Hire me
                                </motion.button>
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                                    Download CV <Download fontSize="small" />
                                </motion.button>
                            </div>

                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 2 }} className="mt-20 hidden md:block mx-auto md:mx-0">
                                <div className="w-10 h-16 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                                    <ArrowDownward className="text-gray-400 dark:text-gray-600 animate-bounce" />
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative flex justify-center">
                            <div className="absolute inset-0 bg-teal-500/10 blur-3xl rounded-full scale-75" />
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFhNAUMLsajGbbb7bVFDk5ldqa8Gs0USeNmKawW3wjxru1HHPLiPrwo9PwGnNfFgMECUgom24ER7T330wAMNIjgWjablR-UzbVgxqSTLOe1J43UVfVhxm5a0-6fqpV5_YDvhaCRJ0hvFRKAxPJ1PIrl9lvGchc0wOH0_SWaaOchzdD9LHQ7UK3_hBi6gGeNik_9wWPqigiAgSw8Rk5ZmQNVn4f4p5heTcNERyNxvDwvlCMVi1uQfWi3Px7Iy0vJVfAV1giIthgWg"
                                alt="Creative Designer Illustration"
                                className="relative z-10 max-w-md rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-800/20">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <h2 className="text-4xl font-bold mb-6">
                                About <span className="text-teal-500">me</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                            </p>
                            <button className="flex items-center font-semibold hover:text-teal-500 transition">
                                Read more <ArrowForward className="ml-1" />
                            </button>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex justify-center md:justify-end">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCFzQEVe5R3Xw5WWsHJnI5vjcW11qGMl9oRSFUSaw1GEsmvvrUglNItH0uKOBm-2Pwc8jgOWoDoMrYOCUCoSu0i_k6y4fIIgDkOzyyVhOwV9d2OeYTQhQqaYZnxjRMTdf8Fh35LEPrSvpKeeW-lGSzjCc4CxgAzGa1ddxJVj4hptaE5nQVHsm2u_w2BZifgAZ86wf6QoqE6EDnXC8x57uo3wpU9-z9X-TuiXpfdANJ2JcQC8Tf8FPHBQ-dkr5e-Ohip3s6_CGWNg"
                                alt="Working Freelancer Illustration"
                                className="max-w-md rounded-3xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Works Section */}
                <section id="works" className="py-20 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold mb-12">
                            My recent <span className="text-teal-500">works</span>
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Music App Dashboard", category: "UI / UX Design", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaxLR4pl4Sy-3lkz7eJhVHb6A8s-g42yVP1gQULIUs6J_GpbX9EmxamlJTpv7np6UJ18HSAwGUVbCvVxgtvSetz_djJgz4U3rTgr8-EtpqP4HdpoLrMHTZ41hi0PqZ9aOcczOe6aPZXR3bXcDGFJEPYq8nEF5_EQZtt6lA3Ym6koYInQnGcCHW9wvaRHOW1onMUjIbrVF66I0gUP3tUrLOA6oi1u6ClrOECLHRsn8hsRTLRVvO5rWu_qQ4ZybFvxTT8la8u_by-A" },
                                { title: "Agency Landing Page", category: "Web Design", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_mvfyOeP8TIAFTfXTnSw8cFe822B2hOE75sCMduWJlyNy2kgPdgP9tAV8CH5oU8HPe9wP3-ok_U96xtFRetgcUdLgRcScLCEiTDmSvjhMqGyo5T9kuvq3OAX7PuXkFKl-BKDZadozSfZm9h0Yn8zrPrAEOXjVqqhBpvaPaEC0Dgeh9_c41yB9tb6xzf4QKKY3jR1mfZAjazODUxGzslkAaurzoLO6e8HiCPWpTDu0stdGyWLdJ0PIzbVPYJjF4dKEbYhiIxl97Q" },
                                { title: "Finance Mobile App", category: "Mobile UI", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrVy0-Ev-AqK-yWzPpBlKFfqlcHFINIJn4VsZQupRBmeV_byijG0dEytT_WZRDrqBBKBpLuUYR6EOtTOvtehViqIQtkjUiYvkcaOSqVDJfGTs_Uw92fixnJVtWr-nYlG8LommgDv34OCBXaGhV54QysmlF8wcxyIf_OK6DcrvJEO3rlo9bSf1_UbcYOXOwa0to24J6FSUpJVcA_wIUMguXFEYcMWsIfaVpOMPGe6TTHkKVZiL1OLBpFnbo3eurdhi2PDb0tlbsKQ" },
                            ].map((work, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    whileHover={{ y: -10 }}
                                    className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
                                >
                                    <div className="overflow-hidden">
                                        <img src={work.img} alt={work.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur">
                                        <span className="text-white text-lg font-semibold">View Case Study</span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{work.category}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-800/20">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                Got a project in <br />
                                <span className="text-teal-500">mind?</span>
                            </h2>
                            <div className="mt-12 hidden lg:block">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKUSnAv0_BmYvKLbC91U-YZDg_Hg63bVJo8iGPZ6lNmDWLnkC5KoDXnY6oebsrRYxLcDZaL1DiSE5J4CRDakbzXEXQUFkSzBnHFGQUoUtu5VYJUkCXfluJcM5Oxv5Y8mVB6UODqUp7FboUqSVJfPobJdBCPYI3xF_COxIrRNtf-gm6Cud4ku8D8QxZNJUVb5qb67PJ37kIqv38c6EqL2beJ64aUnqIjLzVSXUbEbPyF1LiAnXyVlVTBGwZNgqGEhjnll-OIEycXA"
                                    alt="Project Discussion Illustration"
                                    className="w-3/4 rounded-3xl shadow-2xl"
                                />
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Your name</label>
                                        <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Your email</label>
                                        <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Your Message</label>
                                    <textarea rows={5} placeholder="Message" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition resize-none" />
                                </div>
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="button" className="px-8 py-3 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition flex items-center">
                                    Send Message <Send className="ml-2 text-sm" />
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        <div className="flex justify-center md:justify-start space-x-6">
                            <button onClick={() => scrollToSection('home')} className="flex items-center text-sm hover:text-teal-500 transition"><Home className="mr-1" /> Home</button>
                            <button onClick={() => scrollToSection('about')} className="flex items-center text-sm hover:text-teal-500 transition"><Person className="mr-1" /> About me</button>
                            <button onClick={() => scrollToSection('contact')} className="flex items-center text-sm hover:text-teal-500 transition"><Phone className="mr-1" /> Contact</button>
                        </div>

                        <div className="flex justify-center space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition"><Facebook /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition"><Instagram /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition"><AlternateEmail /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition"><PlayArrow /></a>
                        </div>

                        <div className="text-center md:text-right text-xs text-gray-500">
                            Terms of Service - Privacy Policy
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}


export default SecondLayout;