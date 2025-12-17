import {
    FaDownload,
    FaDownLong,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa6";

const SocialLink = ({ className, href = "#", children }) => (
    <a
        className={`social-link absolute w-12 h-12 border border-slate-400 dark:border-slate-600 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-200 transition-all duration-200 ease-in-out hover:scale-110 hover:bg-slate-200 dark:hover:bg-slate-700 ${className}`}
        href={href}
    >
        {children}
    </a>
);

const Hero = () => {
    return (
        <div className=" dark:bg-background-dark font-sans text-slate-700 dark:text-slate-300 antialiased">
            <div className="relative">
                {/* Main Content (Hero Section) */}
                <div className="relative container mx-auto pt-10 lg:pt-0 lg:pb-0 mt-5 sm:mt-20 ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-8 w-full px-4 sm:px-6 lg:px-8">
                        {/* Text Content */}
                        <div className="text-center lg:text-left z-10">
                            <h2 className="text-2xl sm:text-3xl font-display text-slate-800 dark:text-slate-100">
                                Hello! I'm
                            </h2>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mt-2">
                                <span className="underline-doodle">
                                    Nafiz Muntasir
                                </span>
                            </h1>
                            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
                                MERN stack Developer
                            </p>

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

                        {/* Image/Visuals Section */}
                        <div className="relative flex justify-center items-center h-[450px] lg:h-auto">
                            {/* Circular Overlays (Background) */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full max-w-[500px] aspect-square">
                                    {/* <div className="absolute inset-0 border border-slate-300 dark:border-slate-700 rounded-full transform scale-100"></div> */}
                                    <div className="absolute inset-0 border border-slate-300 dark:border-slate-700 rounded-full transform scale-[0.75]"></div>
                                </div>
                            </div>

                            {/* Portrait Image */}
                            <img
                                alt="profile image"
                                className="relative object-center rounded-full z-10 max-w-[75%] sm:max-w-[80%] lg:max-w-full max-h-[380px] object-contain"
                                src="./6.jpg"
                            />

                            {/* Social Links using the new SocialLink component */}
                            <div className="absolute z-20 w-full h-full">
                                <SocialLink className="top-[12%] right-[15%] sm:right-[10%] lg:right-[2%]">
                                    <a
                                        href="https://www.facebook.com/nafiz.muntasir.245464"
                                        target="blank"
                                    >
                                        <FaFacebook className="text-2xl"></FaFacebook>
                                    </a>
                                </SocialLink>

                                <SocialLink className="top-[35%] right-[-4%] lg:right-[-6%]">
                                    <a
                                        href="https://github.com/nafiz512"
                                        target="blank"
                                    >
                                        <FaGithub className="text-2xl"></FaGithub>
                                    </a>
                                </SocialLink>

                                <SocialLink className="top-[60%] right-[-1%] lg:right-[-5%]">
                                    <a
                                        href="https://www.linkedin.com/in/nafiz-muntasir/"
                                        target="blank"
                                    >
                                        <FaLinkedin className="text-2xl"></FaLinkedin>
                                    </a>
                                </SocialLink>

                                <SocialLink className="top-[77%]  right-[14%] lg:right-[5%]">
                                    <a href="https://www.instagram.com/nafizmuntasir512/">
                                        <FaInstagram className="text-2xl"></FaInstagram>
                                    </a>
                                </SocialLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
