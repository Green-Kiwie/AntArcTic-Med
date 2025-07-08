import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="bg-white top-0 w-full z-10">
            <div className="flex justify-center items-center p-4 max-w-screen-2xl mx-auto">
                <div className="flex space-x-6 text-xl" style={{ fontSize: "3vmin" }}>
                    <Link to="/home" className="hover:text-blue-600">Home</Link>
                    <Link to="/game" className="hover:text-blue-600">Game</Link>
                    <Link to="/about" className="hover:text-blue-600">About</Link>
                    <Link to="/metrics" className="hover:text-blue-600">Metrics</Link>
                </div>
            </div>
        </nav>
    );
}


// <Link to="/">
//     <img
//         src={`${process.env.PUBLIC_URL}/org_logo2.png`}
//         alt="Logo"
//         width={35}
//         height={35}
//         className="cursor-pointer mx-4"
//     />
// </Link>
