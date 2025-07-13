import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar"
import CenteredComponent from "../components/CenteredComponent";

export default function Home() {
    return (
        <>
            <NavBar />

            <CenteredComponent>
                <IntroductoryBanner />
            </CenteredComponent>

            <CenteredComponent>
                <SwitchItUpBanner />
            </CenteredComponent>
        </>
    );
}

function SwitchItUpBanner(){
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white bg-sky-950">

            <div className="flex flex-col md:flex-row gap-4 p-20 justify-center items-center">
                {/* Column 1 */}
                <SwitchItUpDescription />

                {/* Column 2 */}
                <SwitchItUpImageMockUp />
            </div>

        </div>
    )
}

function SwitchItUpDescription(){
    return (
        <div className="w-full md:w-1/2 p-6 rounded-lg">
            <h2 className="text-4xl font-bold mb-2 text-left">Switch It Up</h2>
            <p className={"text-3xl text-left"}>
                An engaging game designed to enhance mental flexibility through rapidly changing rules.
                Players are challenged with a series of simple cognitive tasks, such as color matching,
                shape sorting, and animal counting.
            </p>
            <Link><p className={"text-left text-3xl text-sky-400 my-4 hover:text-sky-200"}>Learn More</p></Link>
        </div>
    )
}

function SwitchItUpImageMockUp(){
    return (
        <div className="w-full md:w-1/2  p-6 rounded-lg ">
            <img src={`${process.env.PUBLIC_URL}/switch_it_up_mockup.png`} alt="Logo"/>
        </div>
    )
}

function LinkToGameButton(){
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate("/game")}
            target="_blank" rel="noreferrer"
            className={`text-white hover:text-sky-800 bg-sky-400
                    my-8 px-10 py-3 inline-block text-center shadow-lg
                    font-semibold text-2xl transition duration-300 ease-in-out transform hover:scale-105`}
            style={{ borderRadius: "25px" }}
        >
            Game
        </button>
    )
}

function ClubLogoAndName(){
    return (
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
    ) 
    
}

function IntroductoryContent(){
    return(
        <div className={"flex flex-col items-center"}>
            <ClubLogoAndName />

            <h1 className={"font-bold text-5xl text-sky-400"}>
                Empowering Lives Through Compassionate<br/>
                Medical Apps. Dedicated to enhancing<br/>
                cognitive well-being and patient care.</h1>

            <LinkToGameButton />
        </div>
    )
}

function IntroductoryBanner(){
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
            style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/hero-bg.png)`,
        }}>
            
        <IntroductoryContent />

        </div>
    )
}

