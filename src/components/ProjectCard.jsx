import React from "react";

// SVG Icons
const LinkIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
);
const GithubIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1s-2 0-3.37 1.37a5.27 5.27 0 0 0-7.38 0C6.37 2.37 4.37 1 4.37 1s-.2 2.72.08 3.77A5.44 5.44 0 0 0 2 12.23c0 4.41 3.3 5.59 6.44 5.94A3.37 3.37 0 0 0 9 18.13V22"/></svg>
);

const ProjectCard = ({ project }) => (
    <div
        // 1. Reduced the minimum height to 250px for max vertical compression
        className="relative overflow-hidden w-[76%] ml-12 sm:ml-8 min-h-[250px] 
                   border-b border-l border-amber-800 hover:border-amber-600 hover:border-l-2 hover:border-b-2 
                   rounded-xl shadow-2xl shadow-amber-900/50 group transition duration-500 hover:shadow-amber-800/80 cursor-pointer"
    >
        {/* Image filling the card section */}
        <img
            src={project.imageUrl}
            alt={project.title}
            // Use w-full h-full to fit the container
            className="w-full h-full object-cover transition duration-500 ease-in-out opacity-100 transform group-hover:scale-[1.05]"
            // Placeholder image fallback (matching dark theme colors)
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/374151/ffffff?text=Image+Missing"; }}
        />

        {/* Dark Gradient Overlay for Readability */}
        <div 
            className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/70 to-transparent 
                        transition duration-500 group-hover:from-gray-900/95"
        ></div>

        {/* Text Content floating on the image - Flex is crucial for layout */}
        {/* 2. Reduced inner padding from p-4 to p-3 */}
        <div className="absolute inset-0 p-3 flex flex-col justify-end text-white">
            
            {/* Title */}
            {/* 3. Reduced title size to text-base and minimized margin */}
            <h3 className="text-[20px] font-extrabold mb-2 text-amber-500 z-10 truncate">{project.title}</h3>
            
            {/* Description: Reduced text size to text-xs and kept line-clamp-3 */}
            <p className="text-[15px] text-gray-300 mb-6 z-10 line-clamp-3">
                {project.description}
            </p>
            
            {/* Links: Changed py-1.5 to py-1 for minimum button height */}
            <div className="flex space-x-3 mb-2.5 z-10">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-1/2 py-2 text-center text-xs font-semibold rounded-lg bg-gray-950-500 text-amber-400 border border-amber-600 transition duration-300 flex items-center justify-center">
                    <LinkIcon className="w-3.5 h-3.5 mr-1"/>
                    Live Demo
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-1/2 py-2 text-center text-xs font-semibold rounded-lg border border-amber-500 text-amber-500 hover:bg-amber-900/50 transition duration-300 flex items-center justify-center">
                    <GithubIcon className="w-3.5 h-3.5 mr-1"/>
                    Code
                </a>
            </div>
        </div>
    </div>
);


export default ProjectCard;