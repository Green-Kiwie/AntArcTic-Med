import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;


    return (
        <nav className="absolute top-0 w-full z-10">
            <div className="flex justify-center items-center p-4 max-w-screen-2xl mx-auto">
                <div className="flex space-x-6 text-xl" style={{ fontSize: "3vmin" }}>
                    <Link
                        to="/"
                        className={`hover:text-blue-600 ${currentPath === '/' ? 'font-bold' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/projects"
                        className={`hover:text-blue-600 ${currentPath === '/projects' ? 'font-bold' : ''}`}
                    >
                        Projects and Partnerships
                    </Link>
                    <Link
                        to="/about"
                        className={`hover:text-blue-600 ${currentPath === '/about' ? 'font-bold' : ''}`}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className={`hover:text-blue-600 ${currentPath === '/contact' ? 'font-bold' : ''}`}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}