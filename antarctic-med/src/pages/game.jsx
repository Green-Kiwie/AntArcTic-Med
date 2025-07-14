import CenteredComponent from "../components/CenteredComponent";
import SwitchItUp from '../game/SwitchItUp';
import NavBar from "../components/NavBar";

export default function Game(){
    return (
        <>
            <CenteredComponent>
                <NavBar />
                <GamePart />
            </CenteredComponent>
        </>
    );
}

function GamePart(){
    return (
        <div className="h-screen w-full bg-white px-60 py-20">
            <SwitchItUp />
        </div>
    )
}