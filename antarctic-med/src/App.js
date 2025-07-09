// Each page is rendered by a different function and routing by React Router
// This eliminates the need for multiple .js files for simple pages
// Routing is at the bottom under App(); new links must be added to the routing for a direct URL to work
// Such as inputting /about manually into the URL bar
// For new pages that have buttons in the NavBar, must also add the routers in the NavBar component

import './App.css';
import NavBar from './components/NavBar';
import PageLayout from "./components/PageLayout";
import Button from "./components/Button";
import CenteredComponent from "./components/CenteredComponent";
import TextDisplay from "./components/TextDisplay";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import SwitchItUp from './game/SwitchItUp';
import TeamSection from "./components/TeamSection";





function Home() {
    return (
        <>
            <NavBar />
            <CenteredComponent>
                <div
                    className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
                    style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/hero-bg.png)`,
                }}>
                    <div className={"flex flex-col items-center"}>
                        <div className={"flex items-center"}>
                            <Link to="/">
                                     <img
                                        src={`${process.env.PUBLIC_URL}/org_logo2.png`}
                                        alt="Logo"
                                        width={35}
                                        height={35}
                                        className="cursor-pointer mx-4"
                                     />
                            </Link>
                            <h1 className={"font-bold text-4xl text-black my-8"}>
                                ANTArtiqc-Med @ UCI</h1>
                        </div>

                        <h1 className={"font-bold text-5xl text-sky-400"}>
                            Empowering Lives Through Compassionate<br/>
                            Medical Apps. Dedicated to enhancing<br/>
                            cognitive well-being and patient care.</h1>

                        <button
                            // href={link}
                            target="_blank" rel="noreferrer"
                            className={`text-white hover:text-sky-800 bg-sky-400
                                    my-8 px-10 py-3 inline-block text-center shadow-lg
                                    font-semibold text-2xl transition duration-300 ease-in-out transform hover:scale-105`}
                            style={{ borderRadius: "25px" }}
                        >
                            Game
                        </button>
                    </div>


                </div>

            </CenteredComponent>



            <CenteredComponent>
                <div
                    className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white bg-sky-950">


                    <div className="flex flex-col md:flex-row gap-4 p-20 justify-center items-center">
                        {/* Column 1 */}
                        <div className="w-full md:w-1/2 p-6 rounded-lg">
                            <h2 className="text-4xl font-bold mb-2 text-left">Switch It Up</h2>
                            <p className={"text-3xl text-left"}>
                                An engaging game designed to enhance mental flexibility through rapidly changing rules.
                                Players are challenged with a series of simple cognitive tasks, such as color matching,
                                shape sorting, and animal counting.
                            </p>
                            <Link><p className={"text-left text-3xl text-sky-400 my-4 hover:text-sky-200"}>Learn More</p></Link>
                        </div>

                        {/* Column 2 */}
                        <div className="w-full md:w-1/2  p-6 rounded-lg ">
                            <img src={`${process.env.PUBLIC_URL}/switch_it_up_mockup.png`} alt="Logo"/>
                        </div>
                    </div>

                </div>

            </CenteredComponent>
        </>
    );
}

// <div>
//     <div className="object-cover">
//
//         <img src={`${process.env.PUBLIC_URL}/group_photo1.jpg`} alt = "ANTarctiqc Med" style={{width: '100%'}} />
//         <img src={`${process.env.PUBLIC_URL}/sample_1.jpg`} alt = "ANTarctiqc Med" style={{width: '100%'}} />
//         <img src={`${process.env.PUBLIC_URL}/sample_2.jpg`} alt = "ANTarctiqc Med" style={{width: '100%'}} />
//         <img src={`${process.env.PUBLIC_URL}/sample_3.jpg`} alt = "ANTarctiqc Med" style={{width: '100%'}} />
//
//     </div>
// </div>

function Game() {
    return (
        <>
            <CenteredComponent>
                <NavBar />
                    <div className="h-screen w-full bg-white px-60 py-20">
                        <SwitchItUp />
                    </div>
            </CenteredComponent>
        </>
    );
}

function About() {
    return (
        <>
            <NavBar />
            <CenteredComponent>

                <div
                    className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/group_photo1.jpg)`,
                    }}>
                    <div className={"flex flex-col items-center"}>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-white opacity-85"></div>


                        <div className="absolute inset-0bg-black opacity-20"></div>
                        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-white to-transparent"></div>


                        <h1 className={"font-bold text-5xl text-white z-10"}>
                            Anteaters for Artificial Intelligence and <br/>
                            Quantum Computing in Medicine is a student-run <br/>organization
                            made for students with an interest in <br/>the field of healthcare.</h1>


                    </div>


                </div>

                <div className="flex flex-col md:flex-row gap-4 p-12 justify-center items-center">
                    {/* Column 1 */}
                    <div className="w-full md:w-1/2 p-12 rounded-lg">
                        <p className="indent-8 text-xl">Our purpose is to integrate artificial intelligence
                            with medicine and pathology to transform customized medicine and diagnostic accuracy.
                            <strong> ANTartiqc Med</strong> strives to close healthcare disparities by democratizing access to professional medical
                            services worldwide in order to enhance patient outcomes and accelerate innovation in global healthcare
                            delivery. We are committed to building AI-driven tools that are ethical, inclusive, and clinically validated,
                            while also enabling equitable care across diverse populations and health systems.
                        </p>
                        <br/>
                        <p className="indent-8 text-xl">Our team is currently developing a program called the <strong>Alois Machine-Memory Assisted Initiative</strong>, an
                            AI-driven system that leverages targeted gamification techniques to monitor and enhance patient
                            progression in Alzheimer’s care. Alois MMAI’s platform uniquely integrates cognitive science, machine
                            learning, and user-optimized design to deliver interventions that are effective, engaging, and accessible.
                            Together, we envision a future where artificial intelligence drives breakthroughs in medical progression,
                            revolutionizing the field of healthcare.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="w-full md:w-1/2 p-6 rounded-lg ">
                        <img src={`${process.env.PUBLIC_URL}/sample_3.jpg`} alt="Logo"/>
                    </div>
                </div>
                <div className={"bg-white w-full"}>

                        <TeamSection></TeamSection>

                </div>

            </CenteredComponent>
        </>
    );
}

function DevTesting() {
    return (
        <PageLayout heading="Testing">
            <CenteredComponent>
                <Button content="Go to Homepage" link="/" />
            </CenteredComponent>
        </PageLayout>
    );
}

///GURNOOR MESSING AROUND
function MetricsPage() {
	return (
		<PageLayout>
			<CenteredComponent>
                <NavBar />
				<TextDisplay>
					<p>The average metrics will go here when we get them from AWS. 
                        The individual metrics will be shown on the game page after the game. 
                    </p>
				</TextDisplay>
			</CenteredComponent>
		</PageLayout>
	);
}
///GURNOOR MESSING AROUNG
// function App() {
//     return (
//         <Router>
//             <NavBar />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/game" element={<Game />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/testing" element={<DevTesting />} />
//                 <Route path="/metrics" element={<MetricsPage />} />

//             </Routes>
//         </Router>
//     );
// }


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