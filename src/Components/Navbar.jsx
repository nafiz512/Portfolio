import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navLinks = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
    ];

    const links = navLinks.map((link) => (
        <li key={link.id}>
            <a
                onClick={() => scrollToSection(link.id)}
                className="cursor-pointer hover:text-primary transition-colors"
            >
                {link.name}
            </a>
        </li>
    ));

    return (
        <div className="sticky top-0 z-50 w-full px-0 sm:px-[12.5%] navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-3 ml-4"
                >
                    <img
                        src="./logo.jpg"
                        alt="Logo"
                        className="h-12 rounded-full"
                    />
                </motion.div>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            {/* Hire Me Button - also scrolls to contact */}
            <div className="navbar-end">
                <motion.button
                    onClick={() => scrollToSection("contact")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 border border-gray-400 dark:border-gray-600 rounded-full text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                    Hire Me
                </motion.button>
            </div>
        </div>
    );
};

export default Navbar;
