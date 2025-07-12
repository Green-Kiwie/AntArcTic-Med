// Each page is rendered by a different function and routing by React Router
// This eliminates the need for multiple .js files for simple pages
// Routing is at the bottom under App(); new links must be added to the routing for a direct URL to work
// Such as inputting /about manually into the URL bar
// For new pages that have buttons in the NavBar, must also add the routers in the NavBar component

import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
=======
import NavBar from './components/NavBar';
import PageLayout from "./components/PageLayout";
import Button from "./components/Button";
import CenteredComponent from "./components/CenteredComponent";
import TextDisplay from "./components/TextDisplay";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SwitchItUp from './game/SwitchItUp';
>>>>>>> 5d840fc (Sign in and oauth logic is finally working)

<<<<<<< HEAD
import Home from "./pages/homepage"
import About from "./pages/about"
import Game from "./pages/game"
import DevTesting from "./pages/devTesting"
import MetricsPage from './pages/metrics';
=======
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports.js';
import '@aws-amplify/ui-react/styles.css';
import { getCurrentUser, signOut } from "aws-amplify/auth";


// console.log("Amplify config:", awsmobile);
Amplify.configure({
  Auth: {
    Cognito: {
        region: awsmobile.aws_project_region,
        userPoolId: awsmobile.aws_user_pools_id,
        userPoolClientId: awsmobile.aws_user_pools_web_client_id,
        loginWith: {
            oauth: {
                domain: awsmobile.oauth.domain,
                scopes: awsmobile.oauth.scopes,
                redirectSignIn: awsmobile.oauth.redirectSignIn,
                redirectSignOut: awsmobile.oauth.redirectSignOut,
                responseType: awsmobile.oauth.responseType
            },
            username: true,
            email: true,
            }
        }
    }
});

function Home() {
    return (
        <PageLayout heading="ANTArtiqc-Med">
            <CenteredComponent>
                <TextDisplay>
                    <p>An artificial intelligence-based medicine platform</p>
                    <p>MCI development assessment through gamification</p>
                </TextDisplay>
>>>>>>> c3b5bac (Added basic signIn functionality w/ Amplify & AWS Cognito)


<<<<<<< HEAD
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
<<<<<<< HEAD
=======
function Game() {
=======
}

function Game({ user }) {
>>>>>>> ce898ae (Got authentication to work with DynamoDB & the metrics lambda)
    return (
        <PageLayout heading="Game">
            <CenteredComponent>
                <div className="relative" style={{ width: '80%', paddingBottom: '50%', marginTop: '20px' }}>
                    <div className="absolute top-0 left-0 w-full h-full bg-white" style={{
                        padding:'40px', textAlign:'center', borderRadius: '25px', overflowY: 'auto',
                    }}>
                        <SwitchItUp user={user} />
                    </div>
                </div>
            </CenteredComponent>
        </PageLayout>
    );
}

function About() {
    return (
        <PageLayout heading="About Us">
            <CenteredComponent>
                <TextDisplay>

                    <p className="indent-8">Anteaters for Artificial Intelligence and Quantum Computing in Medicine is a student-run organization 
                                            made for students with interest in the field of healthcare. Our purpose is to integrate artificial intelligence 
                                            with medicine and pathology to transform customized medicine and diagnostic accuracy. 
                                            ANTartiqc Med strives to close healthcare disparities by democratizing access to professional medical 
                                            services worldwide in order to enhance patient outcomes and accelerate innovation in global healthcare 
                                            delivery. We are committed to building AI-driven tools that are ethical, inclusive, and clinically validated, 
                                            while also enabling equitable care across diverse populations and health systems.
</p><br/>

                    <p className="indent-8">Our team is currently developing a program called the Alois Machine-Memory Assisted Initiative, an 
                                            AI-driven system that leverages targeted gamification techniques to monitor and enhance patient 
                                            progression in Alzheimer’s care. Alois MMAI’s platform uniquely integrates cognitive science, machine 
                                            learning, and user-optimized design to deliver interventions that are effective, engaging, and accessible. 
                                            Together, we envision a future where artificial intelligence drives breakthroughs in medical progression, 
                                            revolutionizing the field of healthcare. 
</p>

                    <div className="text-center mt-20">
                        <h1 className="heading">Our Team</h1>

                        Arnav Chandan (President)<br/>
                        Rigel de Souza (Treasurer)<br/>
                        Emma Chen (Social Media)<br/><br/>

                        Project<br/>
                        Kierann (Project Lead)<br/><br/>

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
                </TextDisplay>

            </CenteredComponent>
        </PageLayout>
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


function MetricsPage() {
	return (
		<PageLayout heading="Metrics">
			<CenteredComponent>
				<TextDisplay>
					<p>The average metrics will go here when we get them from AWS. 
                        The individual metrics will be shown on the game page after the game. 
                    </p>
				</TextDisplay>
			</CenteredComponent>
		</PageLayout>
	);
}

<<<<<<< HEAD
function SignInPage() {
  return (
    <button onClick={() => signInWithRedirect()}>
      Sign In
    </button>
  );
>>>>>>> c3b5bac (Added basic signIn functionality w/ Amplify & AWS Cognito)
}

=======
>>>>>>> 5d840fc (Sign in and oauth logic is finally working)
function App() {
    const [ user, setUser ] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            try{
                const { userId } = await getCurrentUser();
                setUser(userId);
            }
            catch(e){
                setUser(null);
            }
        };
        fetchUser();
    }, []);

    // useEffect(() => {
    //     console.log("userId changed:", user);
    // }, [user]);

    const handleSignOut = async () => {
        await signOut();
        setUser(null);
    }

    return (
        <Router>
            <NavBar user={user} signOut={handleSignOut}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game user={user}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/testing" element={<DevTesting />} />
                <Route path="/metrics" element={<MetricsPage />} />
                <Route path="/signin" element={<SignInCallback setUser={setUser} />} />
                <Route path="/account" element={<AccountPage user={user} />} />
            </Routes>
        </Router>
  );
}

function AccountPage({ user }){
    return (
        <PageLayout heading="Account">
            <CenteredComponent>
                <TextDisplay>
                    {user ? <h2>Welcome.</h2> : <p>Sign in to save progress and manage sessions.</p>}
                </TextDisplay>
            </CenteredComponent>
        </PageLayout>
    )
}

function SignInCallback({ setUser }) {
  const nav = useNavigate();

  useEffect(() => {
    getCurrentUser()
      .then(({ userId }) => {
        setUser(userId);
        nav("/account");
      })
      .catch(() => {nav("/");});
  }, [setUser, nav]);
  return <div>Signing you in...</div>;
}

export default App;