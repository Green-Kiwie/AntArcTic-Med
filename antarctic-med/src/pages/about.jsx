
import TeamSection from "../components/TeamSection";
import CenteredComponent from "../components/CenteredComponent";

export default function About(){
    return (
        <>
            <CenteredComponent>
                <IntroductoryBanner />
                
                <TeamDescriptionBanner />

                <TeamSectionBanner />
            </CenteredComponent>
        </>
    );
}

function IntroductoryText(){
    return (
        <h1 className={"font-bold text-5xl text-white z-10"}>
        Anteaters for Artificial Intelligence and <br/>
        Quantum Computing in Medicine is a student-run <br/>organization
        made for students with an interest in <br/>the field of healthcare.</h1>
    )
}

function IntroductoryTextWithStyling(){
    return (
        <div className={"flex flex-col items-center"}>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-white opacity-85"></div>
            <div className="absolute inset-0bg-black opacity-20"></div>
            <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-white to-transparent"></div>

            <div className="absolute top-[25%] w-full">
                <IntroductoryText />
            </div>
        </div>
    )
}

function IntroductoryBanner(){
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/group_photo1.jpg)`,
            }}>
                
            <IntroductoryTextWithStyling />

        </div>
    )
}


function PurposeStatement(){
    return (
        <p className="indent-8 text-xl">Our purpose is to integrate artificial intelligence
            with medicine and pathology to transform customized medicine and diagnostic accuracy.
            <strong> ANTartiqc Med</strong> strives to close healthcare disparities by democratizing access to professional medical
            services worldwide in order to enhance patient outcomes and accelerate innovation in global healthcare
            delivery. We are committed to building AI-driven tools that are ethical, inclusive, and clinically validated,
            while also enabling equitable care across diverse populations and health systems.
        </p>
    )
}

function LatestUpdateStatement(){
    return (
        <p className="indent-8 text-xl">Our team is currently developing a program called the <strong>Alois Machine-Memory Assisted Initiative</strong>, an
            AI-driven system that leverages targeted gamification techniques to monitor and enhance patient
            progression in Alzheimer’s care. Alois MMAI’s platform uniquely integrates cognitive science, machine
            learning, and user-optimized design to deliver interventions that are effective, engaging, and accessible.
            Together, we envision a future where artificial intelligence drives breakthroughs in medical progression,
            revolutionizing the field of healthcare.
        </p>
    )
}

function TeamDescriptionText(){
    return (
        <div className="w-full md:w-1/2 p-12 rounded-lg">
            <PurposeStatement />
            <br/>
            <LatestUpdateStatement />
        </div>
    )
}

function TeamDescriptionImage(){
    return (
        <div className="w-full md:w-1/2 p-6 rounded-lg ">
            <img src={`${process.env.PUBLIC_URL}/sample_3.jpg`} alt="Logo"/>
        </div>
    )
}

function TeamDescriptionBanner(){
    return (
        <div className="flex flex-col md:flex-row gap-4 p-12 justify-center items-center">
            {/* Column 1 */}
            <TeamDescriptionText />

            {/* Column 2 */}
            <TeamDescriptionImage />
        </div>
    )
}

function TeamSectionBanner(){
    return (
        <div className={"bg-white w-full"}>
            <TeamSection></TeamSection>
        </div>
    )
}

