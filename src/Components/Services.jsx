import React from "react";
import { FaCode } from "react-icons/fa6";
import { RiLayout3Fill } from "react-icons/ri";
import { PiNotePencilBold } from "react-icons/pi";

const Services = () => {
    return (
        <div class="bg-background-light dark:bg-background-dark font-display">
            <section class="">
                <div class="">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary">
                            Services
                        </h2>
                        <p class="mt-2 text-lg text-text-light-secondary dark:text-text-dark-secondary">
                            What I offer
                        </p>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="group bg-card-light dark:bg-card-dark p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div class="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 dark:bg-slate-700 mb-6">
                                <RiLayout3Fill className="scale-150"></RiLayout3Fill>
                            </div>
                            <h3 class="text-xl font-semibold text-text-light-primary dark:text-text-dark-primary mb-3">
                                Frontend Development
                            </h3>
                            {/* <a
                                class="inline-flex items-center text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary group-hover:text-primary dark:group-hover:text-primary transition-colors"
                                href="#"
                            >
                                View More
                                <span class="material-symbols-outlined ml-1 text-base transition-transform duration-300 group-hover:translate-x-1">
                                    arrow_forward
                                </span>
                            </a> */}
                        </div>
                        <div class="group bg-card-light dark:bg-card-dark p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div class="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 dark:bg-slate-700 mb-6">
                                <FaCode className="scale-150"></FaCode>
                            </div>
                            <h3 class="text-xl font-semibold text-text-light-primary dark:text-text-dark-primary mb-3">
                                Backend Development
                            </h3>
                            {/* <a
                                class="inline-flex items-center text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary group-hover:text-primary dark:group-hover:text-primary transition-colors"
                                href="#"
                            >
                                View More
                                <span class="material-symbols-outlined ml-1 text-base transition-transform duration-300 group-hover:translate-x-1">
                                    arrow_forward
                                </span>
                            </a> */}
                        </div>
                        <div class="group bg-card-light dark:bg-card-dark p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div class="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 dark:bg-slate-700 mb-6">
                                <PiNotePencilBold></PiNotePencilBold>
                            </div>
                            <h3 class="text-xl font-semibold text-text-light-primary dark:text-text-dark-primary mb-3">
                                Full Stack Development
                            </h3>
                            {/* <a
                                class="inline-flex items-center text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary group-hover:text-primary dark:group-hover:text-primary transition-colors"
                                href="#"
                            >
                                View More
                                <span class="material-symbols-outlined ml-1 text-base transition-transform duration-300 group-hover:translate-x-1">
                                    arrow_forward
                                </span>
                            </a> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
