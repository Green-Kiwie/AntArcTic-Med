import CenteredComponent from "../components/CenteredComponent";
import SwitchItUp from '../game/switchitup/SwitchItUp';

export default function Game({ user }){
    return (
        <>
            <CenteredComponent>
                <GamePart user={user}/>
            </CenteredComponent>
        </>
    );
}

function GamePart({ user }){
    return (
        <div className="h-screen w-full bg-white px-60 py-20">
            <SwitchItUp user={user}/>
        </div>
    )
}