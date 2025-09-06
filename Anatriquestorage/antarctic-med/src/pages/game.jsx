import CenteredComponent from "../components/CenteredComponent";
import SwitchItUp from '../game/SwitchItUp';
import MatchStartScreen from "../game/matchitup/StartScreen";
import DesignedButton from "../components/DesignedButton";
import {useState} from "react";

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
    const [gameSelection, setGameSelection] = useState("SwitchItUp");

    return (
        <div className="h-screen w-full bg-white px-60 py-20">
            {getGamePart({user}, gameSelection)}

            {getChangeGameButton(gameSelection, setGameSelection)}
        </div>
    )
}

function getGamePart({user}, gameSelection){
    return gameSelection === "SwitchItUp" ? (
        <SwitchItUp user={user} />
    ) : gameSelection === "MatchItUp" ? (
        <MatchStartScreen user={user} />
    ) : null;
}

function getChangeGameButton(gameSelection, setGameSelection){
    const handleGameChange = () => {
        gameSelection === "SwitchItUp" 
        ? (setGameSelection("MatchItUp")
        ): setGameSelection("SwitchItUp");
    };

    return <DesignedButton id="Change-game-btn" content="Change game!" onClick={handleGameChange} disable={false} />
}