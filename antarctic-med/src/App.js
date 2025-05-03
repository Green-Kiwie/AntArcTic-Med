import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
    return (
        <div className="page">
            <h1 className="heading">ANTArtiqc-Med</h1>
            <p>MCI development assessment through gamification</p>

            <div className="container">Photos here</div>
        </div>
    );
}

function Game() {
    return (
        <div className="page">
            <h1 className="heading">Game</h1>

            <div className="relative" style={{ width: '80%', paddingBottom: '50%', marginTop: '20px' }}>
                <div className="absolute top-0 left-0 w-full h-full bg-white" style={{
                    padding:'40px', textAlign:'center', borderRadius: '25px'
                }}>
                    App coming soon!
                </div>
            </div>
        </div>
    );
}

function About() {
    return (
        <div className="page">
            <h1 className="heading">About Us</h1>
            <div className="container">

                <p className="indent-8">Our purpose is to integrate artificial intelligence with medicine and pathology that seeks to transform
                research, customized medicine, and diagnostic accuracy. We hope to close healthcare disparities by
                democratizing access to professional medical services worldwide in order to enhance patient outcomes and
                accelerate innovation in global healthcare delivery. We are committed to building AI-driven tools that are
                ethical, inclusive, and clinically validated, while also enabling equitable care across diverse populations
                and health systems.</p><br/>

                <p className="indent-8">We are currently developing an AI-driven system that leverages targeted gamification techniques to monitor and
                enhance patient progression in Alzheimer’s care. Our platform uniquely integrates cognitive science, machine
                learning, and user-optimized design to deliver interventions that are effective, engaging and accessible.
                Together, we envision a future where artificial intelligence drives breakthrough medical progress,
                revolutionizing the field of healthcare.</p>

                <div className="text-center mt-20">
                    <h1 className="heading">Our Team</h1>

                    Arnav Chandan (President)<br/>
                    Rigel de Souza (Treasurer)<br/>
                    Emma Chen (Social Media)<br/><br/>

                    Project<br/>
                    Kierann (Project lead)<br/><br/>

                    Website Team<br/>
                    Ashley Yee (Lead)<br/>
                    Rigel de Souza<br/><br/>

                    Game Team<br/>
                    Jeremiah Lillion (Lead)<br/>
                    Anish Venkatesalu<br/>
                    Logan Mifflin<br/>
                    Siddharth Sundar<br/>
                    Vaibhav Satish<br/>
                </div>


            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;