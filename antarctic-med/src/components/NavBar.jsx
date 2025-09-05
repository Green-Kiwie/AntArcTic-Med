import { Link, useLocation } from "react-router-dom";
import { signInWithRedirect } from "aws-amplify/auth";

export default function Navbar({ user, userLoading, signOut }) {
    const location = useLocation();
    const currentPath = location.pathname;

    if(userLoading) return null;

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
                        to="/game"
                        className={`hover:text-blue-600 ${currentPath === '/game' ? 'font-bold' : ''}`}
                    >
                        Game
                    </Link>
                    <Link
                        to="/about"
                        className={`hover:text-blue-600 ${currentPath === '/about' ? 'font-bold' : ''}`}
                    >
                        About
                    </Link>
                    <Link
                        to="/metrics"
                        className={`hover:text-blue-600 ${currentPath === '/metrics' ? 'font-bold' : ''}`}
                    >
                        Metrics
                    </Link>
                    {/* <Link
                        to="/pet"
                        className={`hover:text-blue-600 ${currentPath === '/metrics' ? 'font-bold' : ''}`}
                    >
                        Pet
                    </Link> */}
                    {!user && (
                        <button
                            onClick={() => signInWithRedirect()}
                            className="hover:text-blue-600"
                            style={{ background: "none", border: "none", cursor: "pointer" }}
                        >
                            Sign In
                        </button>
                    )}
                    {user && (
                        <>
                            <Link to="/profile" className="hover:text-blue-600">Profile</Link>
                            <button
                                onClick={signOut}
                                className="hover:text-blue-600"
                                style={{ background: "none", border: "none", cursor: "pointer" }}
                            >
                                Sign Out
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}