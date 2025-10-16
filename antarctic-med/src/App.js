// Each page is rendered by a different function and routing by React Router
// This eliminates the need for multiple .js files for simple pages
// Routing is at the bottom under App(); new links must be added to the routing for a direct URL to work
// Such as inputting /about manually into the URL bar
// For new pages that have buttons in the NavBar, must also add the routers in the NavBar component

import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/homepage"
import About from "./pages/about"
import DevTesting from "./pages/devTesting"
import Contact from './pages/contact';
import Projects from './pages/projects';




function App() {


    return (
        <Router basename="/">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/testing" element={<DevTesting />} />
                <Route path='/contact' element ={<Contact/>}/>
                <Route path='/projects' element = {<Projects/>}/>
            </Routes>
        </Router>
  );
}


export default App;