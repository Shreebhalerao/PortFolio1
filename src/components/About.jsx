import resume from "../assets/Shreeraj_Bhalerao_Resume.pdf"
const GithubIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1s-2 0-3.37 1.37a5.27 5.27 0 0 0-7.38 0C6.37 2.37 4.37 1 4.37 1s-.2 2.72.08 3.77A5.44 5.44 0 0 0 2 12.23c0 4.41 3.3 5.59 6.44 5.94A3.37 3.37 0 0 0 9 18.13V22"/></svg>
);
// LinkedIn Icon
const LinkedinIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
// Instagram Icon
const InstagramIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
// Download Icon
const DownloadIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);
const LinkIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
);
 
const About = () => (
    <section id="about" className="py-10 sm:py-16 bg-gray-950"> {/* Removed -mt-10 and added generous top padding */}
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mt-10 mb-10 text-gray-100">
                About <span className="text-amber-300">Me</span>
            </h2>
            <div className="bg-gray-950 p-6 sm:p-8 rounded-xl shadow-2xl shadow-amber-900/50 border border-amber-600/50">
                
                {/* Two-Column Layout switches to single column on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                    
                    {/* Left Column: Condensed Info */}
                    <div className="space-y-4 text-gray-300 **text-base sm:text-lg**"> {/* Adjusted text size */}
                        <p>
                            I am a dedicated MERN Stack Developer building scalable, secure, and maintainable applications using JavaScript end-to-end. My focus is on the full development lifecycle, from robust REST APIs (Node/Express/MongoDB) to dynamic frontends (React/Tailwind).
                        </p>
                        <p>
                            I thrive on complex problem-solving and ensuring the delivery of clean, efficient code and exceptional user experiences.
                        </p>
                        <p className="font-semibold text-amber-400 text-base mt-4">
                            Currently seeking: Full-Stack or Backend roles.
                        </p>
                    </div>

                    {/* Right Column: Social Media Icons + Resume Link */}
                    <div className="flex flex-col items-start space-y-4 pt-8 md:pt-0 border-t border-amber-600/30 md:border-t-0 md:border-l md:pl-8">
                        <h3 className="text-xl font-semibold text-amber-300 mb-2">Connect with Me</h3>
                        
                        {/* Resume Download Link */}
                        <a 
                            href={resume} 
                            download="Shreeraj_Bhalerao_Resume.pdf" 
                            className="flex items-center space-x-3 text-gray-200 hover:text-amber-300 transition duration-300 group"
                        >
                            <DownloadIcon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 group-hover:text-amber-300"/>
                            <span className="text-base sm:text-lg font-medium">Resume (Download PDF)</span>
                        </a>
                        
                        {/* LinkedIn Link */}
                        <a href="https://www.linkedin.com/in/shreeraj-bhalerao-4bb096294/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-200 hover:text-amber-300 transition duration-300 group">
                            <LinkedinIcon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 group-hover:text-amber-300"/>
                            <span className="text-base sm:text-lg font-medium">LinkedIn (Professional)</span>
                        </a>
                        
                        {/* GitHub Link */}
                        <a href="https://github.com/Shreebhalerao" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-200 hover:text-amber-300 transition duration-300 group">
                            <GithubIcon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 group-hover:text-amber-300"/>
                            <span className="text-base sm:text-lg font-medium">GitHub (Code)</span>
                        </a>
                        
                        {/* Instagram Link */}
                        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-200 hover:text-amber-300 transition duration-300 group">
                            <InstagramIcon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 group-hover:text-amber-300"/>
                            <span className="text-base sm:text-lg font-medium">Instagram (Personal)</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;