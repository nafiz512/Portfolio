import React from "react";
import Navbar from "../Components/Navbar";

import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import TackStack from "../Components/TackStack";
import Services from "../Components/Services";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const RootLayout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="w-full space-y-24 sm:space-y-28 sm:w-9/12 mx-auto mb-20 sm:mb-36">
                <Hero></Hero>
                <About></About>
                <TackStack></TackStack>
                <Skills></Skills>
                <Services></Services>
                <Projects></Projects>
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;
