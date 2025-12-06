import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTypescript, SiDocker } from "react-icons/si";

const techs = [
    // { Icon: FaHtml5, color: "#E34F26", name: "HTML5" },
    // { Icon: FaCss3, color: "#1572B6", name: "CSS3" },
    { Icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
    { Icon: FaReact, color: "#61DAFB", name: "React" },
    { Icon: RiNextjsFill, color: "#000000", name: "Next.js" },
    { Icon: FaNode, color: "#339933", name: "Node.js" },
    { Icon: RiTailwindCssFill, color: "#06B6D4", name: "Tailwind CSS" },
    { Icon: SiExpress, color: "#000000", name: "Express" },
    { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    // { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    // { Icon: SiDocker, color: "#2496ED", name: "Docker" },
];

// Floating wave animation variants
const floatVariants = {
    animate: (i) => ({
        y: [0, -15, 0],
        rotate: [0, 3, -3, 0],
        transition: {
            duration: 3 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
        },
    }),
};

const TechStack = () => {
    return (
        <section
            id="technologies"
            className=" bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
        >
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                        Technologies
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                        My Current Tech Stack
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center items-center gap-8  ">
                    {techs.map((tech, index) => {
                        const Icon = tech.Icon;
                        return (
                            <motion.div
                                key={tech.name}
                                custom={index}
                                variants={floatVariants}
                                initial="initial"
                                animate="animate"
                                whileHover={{
                                    scale: 1.3,
                                    rotate: 360,
                                    transition: { duration: 0.9 },
                                }}
                                className="relative group"
                            >
                                <div
                                    className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
                             border border-gray-200 dark:border-gray-700
                             transition-all duration-300 group-hover:shadow-2xl
                             group-hover:border-transparent"
                                    style={{
                                        background: `linear-gradient(135deg, ${tech.color}10, transparent)`,
                                    }}
                                >
                                    <Icon
                                        className="text-4xl drop-shadow-md"
                                        style={{ color: tech.color }}
                                    />
                                </div>

                                {/* Tooltip on hover */}
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                             text-sm font-medium text-gray-700 dark:text-gray-300 
                             whitespace-nowrap bg-black/70 dark:bg-white/90 
                             px-3 py-1 rounded-lg backdrop-blur-sm"
                                >
                                    {tech.name}
                                </motion.span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
