import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <div>
            <section class="bg-background-light dark:bg-background-dark font-display">
                <section class="">
                    <div class=" px-4 sm:px-6 lg:px-8">
                        <div class="text-center">
                            <h2 class="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white tracking-tight">
                                Projects
                            </h2>
                            <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
                                Recent Projects
                            </p>
                        </div>
                        <div class="mt-10 space-y-6">
                            {projects.map((project) => (
                                <div class="bg-white rounded-lg dark:bg-gray-800/50 shadow-xl  grid grid-cols-1 lg:grid-cols-2">
                                    <div class="flex items-center justify-center  dark:bg-gray-900/50">
                                        <img
                                            alt="Screenshot of project"
                                            class="rounded-xl w-full max-h-70 "
                                            src={project.projectImage}
                                        />
                                    </div>
                                    <div class="p-2 sm:p-4 flex flex-col justify-center">
                                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                                            {project.projectName}
                                        </h3>
                                        <p class="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div class="mt-6 flex flex-wrap gap-2">
                                            {project.tackStack.map((el) => (
                                                <span class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full">
                                                    {el}
                                                </span>
                                            ))}
                                        </div>
                                        {project.client && (
                                            <div class="mt-4 flex flex-wrap gap-4">
                                                {project.client && (
                                                    <a
                                                        class="inline-flex items-center gap-2 px-3  bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-lg shadow-sm hover:bg-gray-900 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                                                        href={project.client}
                                                        target="blank"
                                                    >
                                                        <FaGithub></FaGithub>
                                                        Client
                                                    </a>
                                                )}
                                                {project.server && (
                                                    <a
                                                        class="inline-flex items-center gap-2 px-3 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-lg shadow-sm hover:bg-gray-900 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors "
                                                        href={project.server}
                                                        target="blank"
                                                    >
                                                        <FaGithub></FaGithub>
                                                        Server
                                                    </a>
                                                )}
                                                <a
                                                    class="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-white font-semibold rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                                                    href={project.live}
                                                    target="blank"
                                                >
                                                    Live Demo
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Projects;

const projects = [
    {
        id: 1,
        projectName: "TravelEase",
        projectImage: "./project-1.png",
        server: "https://github.com/nafiz512/Travel-Ease-Server",
        client: "https://github.com/nafiz512/Travel-Ease-Client",
        live: "https://travelease-nafiz.netlify.app/",
        description:
            "A full-stack MERN vehicle rental platform with authentication, booking, and full CRUD.",
        tackStack: [
            "React.js",
            "TailwindCSS",
            "Firebase Auth",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Axios",
            "Netlify",
            "Vercel",
        ],
    },
    {
        id: 2,
        projectName: "QuickCart",
        projectImage: "./project-2.png",
        server: "https://github.com/nafiz512/Quick-Cart-Server",
        client: "https://github.com/nafiz512/QuickCart-using-Next.js",
        live: "https://quick-cart-using-next-js.vercel.app/",
        description:
            "A Next.js-based e-commerce web app with Google login, product management, and a clean responsive UI.",
        tackStack: [
            " Next.js",
            "NextAuth",
            "React",
            "TailwindCSS",
            "Express.js",
            "MongoDB",
            "Axios",
            "Vercel",
        ],
    },
    {
        id: 3,
        projectName: "GreenNest – A UI project with Firebse Auth",
        projectImage: "./project-3.png",
        client: "https://github.com/nafiz512/GreenNest-React-firsebase-auth",
        live: "https://greennest-2d277.web.app",
        description:
            "GreenNest is a modern React.js web application designed for plant lovers to explore, learn, and purchase indoor plants.",
        tackStack: [
            "React.js",
            "TailwindCSS",
            "Firebase",
            "Framer Motion",
            "React Router",
            "DaisyUI",
        ],
    },
    {
        id: 4,
        projectName: "GreenNest – A UI project with Firebse Auth",
        projectImage: "./project-4.png",
        client: "https://github.com/nafiz512/Hero-React-App",
        live: "https://hero-app-nafiz.netlify.app/",
        description:
            "It focuses on clean UI, smooth navigation, and an engaging user experience — built with React, Tailwind CSS, DaisyUI, and React Router.",
        tackStack: ["React.js", "TailwindCSS", "React Router", "DaisyUI"],
    },
];
