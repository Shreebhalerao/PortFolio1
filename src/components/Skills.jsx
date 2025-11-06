const CodeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
// Backend Icon (Server/Lightning)
const ServerIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
);
// Database Icon (Storage Container)
const DatabaseIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path></svg>
);
// Tool Icon (Settings/Gear)
const ToolIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1.51-1V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
);
// Icon for Core Competencies
const StarIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);

const SKILLS = {
    frontend: ["React.js", "JavaScript (ES6+)", "HTML5/CSS3", "Tailwind CSS", "Redux/Context API"],
    backend: ["Node.js", "Express.js", "RESTful APIs","JWT Authentication"],
    database: ["MongoDB", "Mongoose", "SQL", "MongoDB Atlas"],
    tools: ["Git & GitHub", "Postman", "VS Code", "Vercel","Render"],
    Core_Competencies: ["Java", "Object-Oriented Programming", "Data Structures & Algorithms", "Problem Solving",],
};

const Skills = () => (
    <section id="skills" className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 sm:mb-20 lg:mb-28 text-gray-100">
                My <span className="text-amber-300">Core Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 lg:gap-3">
                {Object.entries(SKILLS).map(([category, skills]) => (
                    <div key={category}
                        // Added group class for more sophisticated hover effects
                        className="p-6 rounded-xl bg-transparent shadow-2xl shadow-amber-900/50 hover:shadow-amber-700/80 transition duration-500 border border-amber-500/50 hover:border-amber-400 hover:border-2 group"
                    >
                        <h3 className="text-[20px] font-semibold mb-4 capitalize flex items-center text-amber-300 group-hover:text-amber-200 transition">
                            {/* Used specific icons for each category */}
                            {category === 'frontend' && <CodeIcon className="w-6 h-6 mr-2"/>}
                            {category === 'backend' && <ServerIcon className="w-6 h-6 mr-2"/>}
                            {category === 'database' && <DatabaseIcon className="w-6 h-6 mr-2"/>}
                            {category === 'tools' && <ToolIcon className="w-6 h-6 mr-2"/>}
                            {category === 'Core_Competencies' && <StarIcon className="w-6 h-6 mr-2"/>}
                            {/* Replaces underscores with space for better display */}
                            {category.replace('_', ' ')}
                        </h3>
                        <ul className="space-y-2 text-gray-200">
                            {skills.map((skill, index) => (
                                <li key={index} className="flex items-center text-sm sm:text-base">
                                    <span className="text-amber-400 mr-2">&bull;</span> {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;