// Mock Data for Projects and Skills
import Skilloria from "../assets/skilloria.png"
import Taskify from "../assets/taskify.png"
import product from "../assets/product.png"
import ProjectCard from "./ProjectCard";

const PROJECTS = [
    {
        id: 1,
        title: "Skilloria",
        imageUrl:Skilloria, 
        description: "Skilloria is a fully functional ed-tech platform developed using the MERN stack. It allows users to create, access, and rate educational content through a seamless and interactive interface. Implemented secure authentication and authorization using JWT, with passwords encrypted via Bcrypt. Integrated Razorpay for smooth and secure payment transactions and Cloudinary for efficient file and media storage",
        features: ["User Authentication (JWT)", "Stripe Payment Gateway", "Admin CRUD operations", "State Management (Redux)"],
        stack: {
            frontend: "React, Tailwind CSS, Redux",
            backend: "Node.js, Express.js (REST API)",
            database: "MongoDB, Mongoose",
        },
        liveUrl: "https://skilloria-1.vercel.app/",
        githubUrl: "https://github.com/Shreebhalerao/Skilloria.1",
    },
    {
        id: 2,
        title: "taskify",
        imageUrl:Taskify,
        description: "full-stack task management application featuring secure registration/login and comprehensive task management via full CRUD operations",
        features: ["Real-time messaging (Socket.io)", "Group and Private Rooms", "User Status (Online/Offline)"],
        stack: {
            frontend: "React, Custom Hooks",
            backend: "Node.js, Express.js (Socket.io)",
            database: "MongoDB (Chat History)",
        },
        liveUrl: "https://taskify-gilt-mu.vercel.app/",
        githubUrl: "https://github.com/Shreebhalerao/Taskify",
    },
    {
        id: 3,
        title: "Product picker",
        imageUrl:product,
        description: "Built with the latest technologies such as Next.js 14, TypeScript, Express.js, MongoDB and Redux,it offers a seamless user experience for both team members and admins.",
        features: ["Drag-and-Drop functionality", "Role-based access control", "Task Tracking and Filtering"],
        stack: {
            frontend: "React, DND Kit",
            backend: "Node.js, Express.js",
            database: "MongoDB (Complex Schema)",
        },
        liveUrl: "https://product-picker.vercel.app/",
        githubUrl: "*",
    },
];

const Projects = () => (
    <section id="projects" className="py-20 sm:py-24 md:py-28 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6"> {/* Added sm:px-6 for better padding on small screens */}
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16 md:mb-20 text-gray-100">
                Featured <span className="text-amber-300">MERN Projects</span>
            </h2>
            {/* 🔑 Key Change for Responsiveness */}
            <div className="grid **grid-cols-1** md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Added grid-cols-1 and increased gap */}
                {PROJECTS.map(project => (
                    // Assuming ProjectCard is already built to be fluid (width: 100%)
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    </section>
);

export default Projects;