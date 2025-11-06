const Footer = () => (
	// Removed border-t
	<footer className="bg-gray-950 py-8">
		<div className="container mx-auto px-4 text-center text-gray-500">
			<p>&copy; {new Date().getFullYear()} Shreeraj Bhalerao. Built with MERN Stack & Tailwind CSS.</p>
		</div>
	</footer>
);

export default Footer
