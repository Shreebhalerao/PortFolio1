import React from 'react';
// FIX: Replaced the unsupported local asset import with a static placeholder URL.
import photo from "../assets/photo.jpeg"

const UserIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);
const GithubIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1s-2 0-3.37 1.37a5.27 5.27 0 0 0-7.38 0C6.37 2.37 4.37 1 4.37 1s-.2 2.72.08 3.77A5.44 5.44 0 0 0 2 12.23c0 4.41 3.3 5.59 6.44 5.94A3.37 3.37 0 0 0 9 18.13V22"/></svg>
);

const Hero = () => (
    <section id="hero" className="min-h-screen flex items-center bg-gray-950 font-inter mt-16 lg:pt-24 pb-28 lg:my-0"> 
        <div className="container mx-auto px-6 md:px-12 lg:px-28 grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-12 items-center">
            
            {/* Left Column: Photo (Order 2 on mobile, Order 1 on desktop) */}
            {/* CHANGED: Removed lg:justify-end and kept justify-center for all sizes */}
            <div className="order-2 lg:order-1 flex justify-center">
                {/* Photo container */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 sm:mt-8 bg-gray-800 rounded-full border-4 border-amber-500 shadow-2xl shadow-amber-900/70 flex items-center justify-center relative overflow-hidden">
                    {/* The image should cover the space, not just contain */}
                    <img src={photo} alt="Shreeraj's Profile" className='object-cover w-full h-full' />
                    {/* UserIcon kept as fallback/style if photo fails, but hidden if image loads */}
                
                </div>
            </div>

            {/* Right Column: Information (Order 1 on mobile, Order 2 on desktop) */}
            {/* CHANGED: Removed lg:text-left to keep the text centered on desktop too */}
            <div className="order-1 lg:order-2 text-center">
                <p className="text-lg sm:text-xl text-amber-400 font-medium mb-3">Hi, I'm Shreeraj</p>
                <h1 
                    className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-6 text-gray-100 leading-tight"
                >
                    <span className="block">Building Robust</span>
                    <span className="block text-amber-400">Full-Stack Solutions</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-200 mb-8 sm:mb-10 max-w-xl lg:max-w-none mx-auto">
                    A dedicated MERN Stack Developer with a focus on scalable architecture, secure APIs, and dynamic user interfaces.
                </p>
                
                {/* Button Container */}
                {/* CHANGED: Changed lg:justify-start to lg:justify-center to center the buttons on desktop */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    {/* Button 1: Now small on mobile, large on md/desktop */}
                    <a 
                        href="#projects" 
                        className="px-6 py-2 text-base md:px-8 md:py-3 md:text-lg font-semibold text-amber-300 border border-amber-300 rounded-lg hover:bg-amber-900/20 transition duration-300 shadow-xl shadow-amber-900/50"
                    >
                        View My Projects
                    </a>
                    {/* Button 2: Now small on mobile, large on md/desktop */}
                    <a 
                        href="https://github.com/Shreebhalerao" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-6 py-2 text-base md:px-8 md:py-3 md:text-lg font-semibold text-amber-300 border border-amber-300 rounded-lg flex items-center justify-center hover:bg-amber-900/20 transition duration-300 shadow-amber-900/50 space-x-2"
                    >
                        <GithubIcon className="w-5 h-5"/>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;