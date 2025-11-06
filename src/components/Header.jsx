import React, { useState } from 'react';

// Hamburger Icon for mobile menu
const MenuIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);
// Close Icon for mobile menu
const XIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const Header = () => {
    // 🔑 State to manage mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        // Close the menu after clicking a link on mobile
        setIsMenuOpen(false);
    };

    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full bg-gray-950 bg-opacity-95 shadow-xl backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                
                {/* Logo */}
                <div className="text-2xl font-bold tracking-wider text-amber-300">
                    Developer<span className="text-gray-200">/MERN</span>
                </div>

                {/* Desktop Menu (Visible on Medium screens and up) */}
                <div className="hidden md:flex space-x-6 text-gray-200">
                    {navItems.map(item => (
                        <button 
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-amber-400 hover:text-amber-300 transition duration-300 font-medium"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button (Visible on Small screens only) */}
                <button 
                    className="md:hidden text-amber-400 p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown (Toggled by state) */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-900 border-t border-amber-800`}>
                <div className="flex flex-col space-y-2 p-4">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-amber-400 hover:text-amber-300 transition duration-300 w-full text-left py-2 px-3 rounded-md font-medium"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Header;