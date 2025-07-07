import { Link, useLocation } from "react-router-dom";
import { signInWithRedirect } from "aws-amplify/auth";

export default function Navbar({ user, signOut }) {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
<<<<<<< HEAD
        <nav className="absolute top-0 w-full z-10">
            <div className="flex justify-center items-center p-4 max-w-screen-2xl mx-auto">
                <div className="flex space-x-6 text-xl" style={{ fontSize: "3vmin" }}>
                    <Link
                        to="/home"
                        className={`hover:text-blue-600 ${currentPath === '/home' ? 'font-bold' : ''}`}
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
=======
        <nav className="bg-white sticky top-0 w-full z-10">
            <div className="flex items-center justify-between p-4 max-w-screen-2xl mx-auto">
                <Link to="/">
                    <img
                        src={`${process.env.PUBLIC_URL}/org_logo2.png`}
                        alt="Logo"
                        width={35}
                        height={35}
                        className="cursor-pointer mx-4"
                    />
                </Link>
                <div className="flex-grow flex justify-center relative">
                    {location.pathname !== '/' && (
                        <h1 className="heading absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                            sm:relative sm:top-auto sm:left-auto sm:transform-none sm:text-center sm:translate-x-0 sm:translate-y-0">
                            ANTArtiqc-Med
                        </h1>
                    )}
                </div>
                <div className="ml-auto flex space-x-6 text-xl" style={{ fontSize: "3vmin" }}>
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <Link to="/game" className="hover:text-blue-600">Game</Link>
                    <Link to="/about" className="hover:text-blue-600">About</Link>
                    <Link to="/metrics" className="hover:text-blue-600">Metrics</Link>
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
                            <Link to="/account" className="hover:text-blue-600">Account</Link>
                            <button
                                onClick={signOut}
                                className="hover:text-blue-600"
                                style={{ background: "none", border: "none", cursor: "pointer" }}
                            >
                                Sign Out
                            </button>
                        </>
                    )}
>>>>>>> c3b5bac (Added basic signIn functionality w/ Amplify & AWS Cognito)
                </div>
            </div>
        </nav>
    );
}