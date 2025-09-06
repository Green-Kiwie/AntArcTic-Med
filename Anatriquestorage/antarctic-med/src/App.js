// Each page is rendered by a different function and routing by React Router
// This eliminates the need for multiple .js files for simple pages
// Routing is at the bottom under App(); new links must be added to the routing for a direct URL to work
// Such as inputting /about manually into the URL bar
// For new pages that have buttons in the NavBar, must also add the routers in the NavBar component

import './App.css';
import NavBar from './components/NavBar.jsx';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Home from "./pages/homepage.jsx"
import About from "./pages/about.jsx"
import Game from "./pages/game.jsx"
import DevTesting from "./pages/devTesting.jsx"
import MetricsPage from './pages/metrics.jsx';
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports.js';
import '@aws-amplify/ui-react/styles.css';
import { getCurrentUser, signOut } from "aws-amplify/auth";
import ProfilePage from './pages/profile.jsx';
import PetPage from './pages/pet.jsx';

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


function App() {
    const [ user, setUser ] = useState(null);
    const [ userLoading, setUserLoading ] = useState(true);
    useEffect(() => {
        const fetchUser = async () => {
            try{
                const userId = await getCurrentUser();
                setUser(userId);
            }
            catch(e){
                setUser(null);
            }
            finally{
                setUserLoading(false);
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
        <Router basename="/">
            <NavBar user={user} userLoading={userLoading} signOut={handleSignOut}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game user={user}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/testing" element={<DevTesting />} />
                <Route path="/metrics" element={<MetricsPage user={user}/>} />
                <Route path="/signin" element={<SignInCallback setUser={setUser} />} />
                <Route path="/profile" element={<ProfilePage user={user} signOut={handleSignOut} />} />
                {/* <Route path="/pet" element={<PetPage />} />  pet page is still in the works*/}
            </Routes>
        </Router>
  );
}


function SignInCallback({ setUser }) {
  const nav = useNavigate();

  useEffect(() => {
    getCurrentUser()
      .then(({ userId }) => {
        setUser(userId);
        nav("/profile");
      })
      .catch(() => {nav("/");});
  }, [setUser, nav]);
  return <div>Signing you in...</div>;
}

export default App;