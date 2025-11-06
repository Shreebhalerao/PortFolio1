 import photo from "../assets/photo.jpeg"

 const UserIcon = (props) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);
const GithubIcon = (props) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1s-2 0-3.37 1.37a5.27 5.27 0 0 0-7.38 0C6.37 2.37 4.37 1 4.37 1s-.2 2.72.08 3.77A5.44 5.44 0 0 0 2 12.23c0 4.41 3.3 5.59 6.44 5.94A3.37 3.37 0 0 0 9 18.13V22"/></svg>
);
 const Hero = () => (
    // min-h-screen and flex items-center ensures content is vertically centered on the page
    <section id="hero" className="min-h-screen  flex items-center bg-gray-950 mt-32 font-inter">
        <div className="container mx-auto px-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Photo Placeholder (Order 2 on mobile, Order 1 on desktop) */}
            {/* We change lg:justify-end to lg:justify-center here to center the photo on desktop */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-center">
                {/* Placeholder for Photo with border and shadow */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gray-800 rounded-full border-4 border-amber-500 shadow-2xl shadow-amber-900/70 flex items-center justify-center relative overflow-hidden">
                    {/* Mock profile image or initials text can go here. Using icon for now. */}
                    <UserIcon className="w-24 h-24 text-amber-400 opacity-20"/>
                    <img src={photo} alt="" className='object-contain' />
                </div>
            </div>
 
            {/* Right Column: Information (Order 1 on mobile, Order 2 on desktop) */}
            {/* We change lg:text-left to lg:text-center here to center all text on desktop */}
            <div className="order-1 lg:order-2 text-center lg:text-center">
                <p className="text-xl text-amber-400 font-medium mb-3">Hi, I'm Shreeraj</p>
                <h1 
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-gray-100 leading-tight"
                >
                    <span className="block">Building Robust</span>
                    <span className="block text-amber-400">Full-Stack Solutions</span>
                </h1>
                <p className="text-xl sm:text-xl text-gray-200 mb-10">
                    A dedicated MERN Stack Developer with a focus on scalable architecture, secure APIs, and dynamic user interfaces.
                </p>
                
                {/* We change lg:justify-start to lg:justify-center here to center the buttons on desktop */}
                <div className="flex justify-center lg:justify-center space-x-4">
                    <a href="#projects" className="px-8 py-3 text-lg font-semibold text-amber-300 border rounded-lg shadow-xl shadow-amber-900/50">
                        View My Projects
                    </a>
                    <a href="https://github.com/Shreebhalerao" target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold text-amber-300 border border-amber-300 rounded-lg flex items-center shadow-amber-900/50 space-x-2">
                        <GithubIcon className="w-5 h-5"/>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
 );

export default Hero;