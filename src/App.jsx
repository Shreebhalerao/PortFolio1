import React, { useState } from 'react';
import "./App.css"
 
import Header from "./components/Header"
import Skills from "./components/Skills"
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import About from "./components/About"

 
const App = () => {
	return (
		// Ensure the entire app uses the dark theme and Inter font (default for Tailwind)
		<div className="min-h-screen bg-gray-950 font-sans">
			<Header />
			<main className="pt-16">
				<Hero />
				<About />
				<Projects />
				<Skills />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

export default App;
