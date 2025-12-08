import React, { useRef, useState } from "react";
import { FaEnvelope, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

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
            <Icon className={`text-4xl mb-2 ${color} dark:text-gray-200`} />
            <p className="text-sm font-bold text-gray-900 dark:text-gray-200 mb-1">
                {title}
            </p>
            <a
                href={link}
                className="text-sm text-gray-500 dark:text-gray-400 mb-4 hover:underline"
            >
                {detail}
            </a>
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
    const formRef = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs
            .sendForm(
                "service_gvlj3wq",
                "template_i6zqmjp",
                formRef.current,
                "BkoSC7p4Z0I3exU1z"
            )
            .then(
                () => {
                    setStatus("Message sent successfully! ✅");
                    formRef.current.reset();
                    console.log("ok got it ");
                },
                () => {
                    setStatus("Failed to send message ❌");
                }
            );
    };

    return (
        <div id="contact">
            <section className="bg-background-light dark:bg-background-dark font-display text-gray-500 dark:text-gray-400">
                <div className="container mx-auto max-w-5xl px-4">
                    <header className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white">
                            Get in Touch
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
                            Contact Me
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 sm:gap-0">
                        {/* Left Section - Contact Cards */}
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

                        {/* Right Section - Contact Form */}
                        <div className="flex flex-col space-y-4">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center lg:text-left">
                                Write me your project
                            </h2>

                            <form
                                ref={formRef}
                                onSubmit={sendEmail}
                                className="space-y-6"
                            >
                                {/* Name */}
                                <div>
                                    <label className="text-sm text-gray-600 dark:text-gray-300">
                                        Name
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Insert your Name"
                                        required
                                        className="w-full mt-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-1 focus:ring-primary"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="text-sm text-gray-600 dark:text-gray-300">
                                        Email
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Insert your email"
                                        required
                                        className="w-full mt-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                                {/* Email */}
                                <div>
                                    <label className="text-sm text-gray-600 dark:text-gray-300">
                                        Subject
                                    </label>
                                    <input
                                        name="subject"
                                        type="text"
                                        placeholder="Subject"
                                        required
                                        className="w-full mt-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-1 focus:ring-primary"
                                    />
                                </div>

                                {/* Project message */}
                                <div>
                                    <label className="text-sm text-gray-600 dark:text-gray-300">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        placeholder="Write your project"
                                        required
                                        rows="6"
                                        className="w-full mt-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white min-h-[150px] focus:ring-1 focus:ring-primary"
                                    ></textarea>
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="px-12 py-3 rounded-xl text-white font-medium shadow-2xl bg-gray-800 dark:bg-gray-900 hover:bg-black dark:hover:bg-black transition transform hover:scale-[1.02]"
                                >
                                    Send Message
                                </button>

                                {/* Status text */}
                                {status && (
                                    <p className="pt-2 text-sm text-center text-green-500 dark:text-green-400">
                                        {status}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
