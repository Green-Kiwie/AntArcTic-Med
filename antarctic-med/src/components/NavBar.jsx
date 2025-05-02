import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="bg-white sticky top-0 w-full z-10">
            <div className="flex items-center justify-between p-4 max-w-screen-2xl mx-auto">
                <Link to="/">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="cursor-pointer"
                    />
                </Link>
                <div className="flex-grow flex justify-center">
                    {location.pathname !== '/' && (
                        <h1 className="heading absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            AntArcTic-Med
                        </h1>
                    )}
                </div>
                <div className="ml-auto flex space-x-6 text-xl font-medium">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <Link to="/about" className="hover:text-blue-600">About</Link>
                </div>
            </div>
        </nav>
    );
}
