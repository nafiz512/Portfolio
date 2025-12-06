import React from "react";
// Import icons for Email, LinkedIn, and Twitter
import { FaEnvelope, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const contactCards = [
    {
        Icon: FaEnvelope,
        title: "Email",
        detail: "nafizmuntasir512@gmail.com",
        color: "text-gray-400",
        link: "mailto:nafizmuntasir512@gmail.com",
    },
    {
        Icon: FaLinkedinIn,
        title: "LinkedIn",
        detail: "nafiz-muntasir",
        color: "text-blue-500",
        link: "https://www.linkedin.com/in/nafiz-muntasir",
    },
    {
        Icon: FaFacebook,
        title: "Facebook",
        detail: "Nafiz Muntasir",
        color: "text-blue-700",
        link: "https://www.facebook.com/nafiz.muntasir.245464",
    },
];

const ContactCard = ({ Icon, title, detail, color, link }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition duration-300 hover:shadow-lg">
        <div className="flex flex-col items-center text-center">
            {/* Icon */}
            <Icon className={`text-4xl mb-2 ${color} dark:text-gray-200`} />

            {/* Title */}
            <p className="text-sm font-bold text-gray-900 dark:text-gray-200 mb-1">
                {title}
            </p>

            {/* Detail */}
            <a
                href={link}
                className="text-sm text-gray-500 dark:text-gray-400 mb-4 hover:underline"
            >
                {detail}
            </a>

            {/* Write Me link */}
            <a
                href={link}
                className="text-sm font-semibold text-gray-800 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
                Write me →
            </a>
        </div>
    </div>
);

const Contact = () => {
    return (
        <div id="contact">
            <section className="bg-background-light dark:bg-background-dark font-display text-gray-500 dark:text-gray-400 ">
                <div className="container mx-auto max-w-5xl px-4">
                    {/* Header */}
                    <header className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white">
                            Get in Touch
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
                            Contact Me
                        </p>
                    </header>

                    {/* Main Content: Cards and Form */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 sm:gap-0">
                        {/* 1. Talk to me (Cards) */}
                        <div className="flex flex-col space-y-4">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center lg:text-left">
                                Talk to me
                            </h2>
                            <div className="space-y-4 max-w-sm">
                                {contactCards.map((card) => (
                                    <ContactCard key={card.title} {...card} />
                                ))}
                            </div>
                        </div>

                        {/* 2. Write me your project (Form) */}
                        <div className="flex flex-col space-y-4">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center lg:text-left">
                                Write me your project
                            </h2>
                            <form action="#" className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label
                                        className="text-sm text-gray-600 dark:text-gray-300"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        className="w-full mt-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-white focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                                        id="name"
                                        name="name"
                                        placeholder="Insert your Name"
                                        type="text"
                                    />
                                </div>
                                {/* Email Input */}
                                <div>
                                    <label
                                        className="text-sm text-gray-600 dark:text-gray-300"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="w-full mt-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-white focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                                        id="email"
                                        name="email"
                                        placeholder="Insert your email"
                                        type="email"
                                    />
                                </div>
                                {/* Project Textarea */}
                                <div>
                                    <label
                                        className="text-sm text-gray-600 dark:text-gray-300"
                                        htmlFor="project"
                                    >
                                        Project
                                    </label>
                                    <textarea
                                        className="w-full mt-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-white focus:ring-1 focus:ring-primary focus:border-primary transition-colors min-h-[150px]"
                                        id="project"
                                        name="project"
                                        placeholder="Write your project"
                                        rows="6"
                                    ></textarea>
                                </div>

                                {/* Send Message Button (Styled to match image) */}
                                <div className="pt-2">
                                    <button
                                        className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-3 rounded-xl text-white font-medium shadow-2xl transition duration-300 
                                            bg-gray-800 dark:bg-gray-900
                                            shadow-gray-600/50 dark:shadow-black/70
                                            hover:bg-gray-900 dark:hover:bg-black 
                                            transform hover:scale-[1.02]
                                            "
                                        type="submit"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
