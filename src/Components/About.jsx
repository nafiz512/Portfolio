import React from "react";
import { AiOutlineBulb } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";
import { MdOutlineWorkHistory } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaArrowUp } from "react-icons/fa";
const About = () => {
    return (
        <div>
            <div class=" bg-background-light dark:bg-background-dark font-display text-slate-700 dark:text-slate-300">
                <div class="container mx-auto px-4 ">
                    <div class="text-center mb-12">
                        <h1 class="text-4xl font-bold text-slate-900 dark:text-white">
                            About
                        </h1>
                        <p class="text-sm text-slate-500 dark:text-slate-400">
                            My Introduction
                        </p>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div class="flex justify-center">
                            <img
                                alt="Illustration of a person with green hair and a cap working on a laptop at a small table."
                                class="max-w-sm w-full"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqyVXhPO3GrRP1R0SpyTtGj_spIc7SuR8zXwa-lE4SXbp3H71bFCInpK9LDiDjpatvNG_Frzo0aemrBHXHGK6j4-buZyjsM7DWMeN99y87cxQLPNVDGyF4CNKiFdtLwDWg8m_E7R8rY9glTnaCBLkRUPZa9yc0w5bOyEtmndfH880oLne605XG2zuYWJK_-tjy8SlPteq_Hm0DqHeK3-DirFW7xI9ceddY14U-Sn1A66kMKL0MdLvCJzv6_JKUoRFG-uK0v2G9gNWG"
                            />
                        </div>
                        <div class="flex flex-col space-y-8">
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                                <div class="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <span class="material-symbols-outlined flex justify-center text-lg">
                                        <AiOutlineBulb></AiOutlineBulb>
                                    </span>

                                    <h3 class="font-semibold text-slate-900 dark:text-white">
                                        Experience
                                    </h3>
                                    <p class="text-sm text-slate-500 mt-2 dark:text-slate-400">
                                        6 month of hands on Experience
                                    </p>
                                </div>
                                <div class="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <span class="material-symbols-outlined flex justify-center text-lg">
                                        <MdOutlineWorkHistory></MdOutlineWorkHistory>
                                    </span>
                                    <h3 class="font-semibold text-slate-900 dark:text-white">
                                        Completed
                                    </h3>
                                    <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">
                                        150+ Projects
                                    </p>
                                </div>
                                <div class="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <span class="material-symbols-outlined flex justify-center text-lg">
                                        <TfiHeadphoneAlt></TfiHeadphoneAlt>
                                    </span>
                                    <h3 class="font-semibold text-slate-900 dark:text-white">
                                        Support
                                    </h3>
                                    <p class="text-sm mt-2 text-slate-500 dark:text-slate-400">
                                        Online 24/7
                                    </p>
                                </div>
                            </div>
                            <p class="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                                Proficient in React.js,Node.js,Express.js,
                                Tailwindcss, I build scalable, high-performance
                                applications. I deliver innovative real-time
                                systems and impactful solutions.
                            </p>
                            {/* Buttons */}
                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <a
                                    download="Nafiz Muntasir Resume.pdf"
                                    href="./Nafiz_Muntasir_Resume.pdf"
                                >
                                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-slate-400 dark:border-slate-500 rounded-full font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                        <span>Get Resume</span>
                                        <FaDownload></FaDownload>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
