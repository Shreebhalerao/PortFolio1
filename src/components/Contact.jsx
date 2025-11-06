import React, { useState } from "react";

// SVG Icons for use in the component
const MailIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const UserIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setStatusMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage('');

        // --- MOCK API CALL FOR DEMO ---
        console.log('Form Submitted (Mock API):', formData);

        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

        setIsSubmitting(false);
        setStatusMessage('Thanks for reaching out! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        // Aggressive reduction in section padding: py-8 sm:py-12 -> py-6 sm:py-8
        <section id="contact" className="py-6 mt-24 sm:py-8 bg-gray-950 flex items-center justify-center">
            <div className="container mx-auto px-6 max-w-md"> 
                {/* Reduced title margin: mb-6 -> mb-4 */}
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-100">
                    Get In <span className="text-amber-300">Touch</span>
                </h2>
                <div 
                    // Reduced card padding: p-5 sm:p-8 -> p-4 sm:p-6
                    className="bg-gray-950 p-4 sm:p-6 rounded-xl shadow-2xl shadow-amber-900/70 border border-amber-900 hover:border-amber-500 duration-300"
                >
                    <p className="text-gray-300 mb-6 text-center">
                        Have a project idea or a job opportunity? Send me a message directly!
                    </p>

                    {/* Reduced space between form elements: space-y-4 -> space-y-3 */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-amber-300 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-gray-900 border border-amber-800 rounded-lg text-gray-100 placeholder-gray-400 focus:border-amber-400 focus:ring-amber-400 transition duration-300"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-amber-300 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-gray-900 border border-amber-800 rounded-lg text-gray-100 placeholder-gray-400 focus:border-amber-400 focus:ring-amber-400 transition duration-300"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-amber-300 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="3" 
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-gray-900 border border-amber-800 rounded-lg text-gray-100 placeholder-gray-400 focus:border-amber-400 focus:ring-amber-400 transition duration-300"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-2 text-lg font-semibold rounded-lg bg-amber-500 text-gray-950 hover:bg-amber-400 transition duration-300 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <MailIcon className="w-5 h-5"/>
                                    <span>Send Message</span>
                                </>
                            )}
                        </button>
                        {statusMessage && (
                            <p className="text-center text-sm font-medium text-amber-300 pt-2">{statusMessage}</p>
                        )}
                    </form>

                    {/* Reduced spacing on the contact links section: mt-8 pt-5 -> mt-5 pt-4 */}
                    <div className="mt-5 pt-4 border-t border-gray-700 text-center">
                            <p className="text-gray-300 mb-3">Or connect with me directly:</p>
                            <div className="flex justify-center space-x-6">
                                <a href="mailto:shreerajbhalerao08@gmail.com" className="text-amber-300 hover:text-amber-100 transition duration-300 flex items-center space-x-1">
                                    <MailIcon className="w-5 h-5"/>
                                    <span>Email</span>
                                </a>
                                <a href="https://www.linkedin.com/in/shreeraj-bhalerao-4bb096294/" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-100 transition duration-300 flex items-center space-x-1">
                                    <UserIcon className="w-5 h-5"/>
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                    </div>

                </div>
            </div>
        </section>
    );
};


export default ContactForm;