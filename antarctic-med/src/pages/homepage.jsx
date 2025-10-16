import { Link, useNavigate } from "react-router-dom";
import CenteredComponent from "../components/CenteredComponent";
import DesignedButton from "../components/DesignedButton";

export default function Home() {
    return (
        <>
            <CenteredComponent>
                <IntroductoryBanner />
            </CenteredComponent>

            <CenteredComponent>
                <ResearchBasedGameText />
            </CenteredComponent>

            <CenteredComponent>
                <SwitchItUpBanner />
            </CenteredComponent>
        </>
    );
}

function ResearchBasedGameText(){
    return (
        <div
            className="relative w-full min-h-screen p-6 text-white bg-sky-950 flex justify-center items-center">
            
            <div className="flex flex-col lg:flex-row gap-14 p-4 lg:p-20 justify-center items-center w-full">
                <ResearchBasedDescription />
                <ResearchBasedImage />
            </div>

        </div>
    )
}

function ResearchBasedDescription(){
    return (
        <div className="w-full md:w-7/12 p-6 rounded-lg">
            <h2 className="text-4xl font-bold mb-2 text-left">Research Backed Games</h2>
            <p className={"text-3xl text-left"}>
            We're developing targeted games to engage the main domains affected by Alzheimer's and Mild Cognitive Impairment (MCI). 
            Our games focus on the core cognitive skills assessed by the <strong>Mini-Mental State Examination (MMSE)</strong>, 
            which include memory, attention, language, executive function and visuospatial skills, 
            to provide an effective tool for patient engagement.
            </p>
        </div>
    )
}

function ResearchBasedImage(){
    return (
        <div>
            <div className="w-full p-6 rounded-lg ">
            
                <div className="flex items-center relative">
                    <img className={"w-20"} src={`${process.env.PUBLIC_URL}/icons/compass.png`} alt="Logo"/>
                    <p className="px-10 text-3xl font-bold">Orientation</p>
                </div>


                <div className="flex items-center">
                    <img className={"w-20"} src={`${process.env.PUBLIC_URL}/icons/card.png`} alt="Logo"/>
                    <p className="px-10 text-3xl font-bold">Registration</p>
                </div>

                <div className="flex items-center">
                    <img className={"w-20"} src={`${process.env.PUBLIC_URL}/icons/warning.png`} alt="Logo"/>
                    <p className="px-10 text-3xl font-bold">Attention</p>
                </div>

                <div className="flex items-center">
                    <img className={"w-20"} src={`${process.env.PUBLIC_URL}/icons/clock.png`} alt="Logo"/>
                    <p className="px-10 text-3xl font-bold">Recall</p>
                </div>

                <div className="flex items-center">
                    <img className={"w-20"} src={`${process.env.PUBLIC_URL}/icons/textbubble.png`} alt="Logo"/>
                    <p className="px-10 text-3xl font-bold">Language</p>
                </div>

            </div>
        </div>
    )
}

function SwitchItUpBanner(){
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white bg-sky-950">

            <div className="flex flex-col md:flex-row gap-4 p-20 justify-center items-center">
                {/* Column 1 */}
                <SwitchItUpImageMockUp />
                {/* Column 2 */}
                <SwitchItUpDescription />
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
        <DesignedButton
            onClick={() => navigate("/game")}
            className={`text-white hover:text-sky-800 bg-sky-400
                    my-8 px-10 py-3 inline-block text-center shadow-lg
                    font-semibold text-2xl transition duration-300 ease-in-out transform hover:scale-105`}
            content="Game"
        />
        
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
            MedTech @ UCI</h1>
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

