import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

const Footer = () => {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setIsAtTop(window.scrollY <= 5);
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTarget = () => {
        if (isAtTop) {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
            } else {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                });
            }
        } else {
            const homeSection =
                document.getElementById("home") || document.body;
            homeSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer
            className="bg-gray-100 dark:bg-gray-900 py-4 relative"
            id="footer"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="flex items-center space-x-4">
                        <a className="group" href="#">
                            <div className="w-10 h-10 border border-gray-400 dark:border-gray-500 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-gray-800 dark:group-hover:bg-gray-200">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 fill-current text-gray-600 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                </svg>
                            </div>
                        </a>

                        {/* Add other icons similarly */}
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © 2025 Copyright: Nafiz Muntasir
                    </p>
                </div>
            </div>

            {/* Correct Floating Button */}
            <button
                onClick={scrollToTarget}
                className="fixed bottom-8 right-8 hover:bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-slate-800 dark:hover:bg-slate-600 transition-all duration-300 hover:scale-110"
            >
                {isAtTop ? <FaArrowDown size={20} /> : <FaArrowUp size={20} />}
            </button>
        </footer>
    );
};

export default Footer;
