// --- Component: Header / Navigation ---
const Header = () => {
	const scrollToSection = (id) => {
		document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<nav className="fixed top-0 z-50 w-full bg-gray-950 bg-opacity-95 shadow-xl backdrop-blur-sm">
			<div className="container w-[80%] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
				<div className="text-2xl font-bold tracking-wider text-amber-300">
					Developer<span className="text-gray-200">/MERN</span>
				</div>
				<div className="flex space-x-6 text-gray-200">
					<button onClick={() => scrollToSection('hero')} className="text-amber-400 transition duration-300">Home</button>
					<button onClick={() => scrollToSection('about')} className="text-amber-400 transition duration-300">About</button>
          <button onClick={() => scrollToSection('projects')} className="text-amber-400 transition duration-300">Projects</button>
					<button onClick={() => scrollToSection('skills')} className="text-amber-400 transition duration-300">Skills</button>
					<button onClick={() => scrollToSection('contact')} className="text-amber-400 transition duration-300">Contact</button>
				</div>
			</div>
		</nav>
	);
};

export default Header;