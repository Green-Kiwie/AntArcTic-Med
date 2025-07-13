// Each page is rendered by a different function and routing by React Router
// This eliminates the need for multiple .js files for simple pages
// Routing is at the bottom under App(); new links must be added to the routing for a direct URL to work
// Such as inputting /about manually into the URL bar
// For new pages that have buttons in the NavBar, must also add the routers in the NavBar component

import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from "./pages/homepage"
import About from "./pages/about"
import Game from "./pages/game"
import DevTesting from "./pages/devTesting"
import MetricsPage from './pages/metrics';


function App() {
    return (
        <Router basename="/">
            <Routes>
                {/* Redirect root '/' to '/about' */}
                <Route path="/" element={<Navigate to="/about" replace />} />
                
                <Route path="/game" element={<Game />} />
                <Route path="/about" element={<About />} />
                <Route path="/testing" element={<DevTesting />} />
                <Route path="/home" element={<Home />} />
                <Route path="/metrics" element={<MetricsPage />} />
            </Routes>
        </Router>
    );
}

export default App;