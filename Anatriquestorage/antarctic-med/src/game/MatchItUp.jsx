
import {useState} from "react";
import StartScreen from "./matchitup/StartScreen";
import GameField from "./matchitup/GameField";
import Metrics from "./matchitup/Metrics";

export default function MatchItUp({ user }) {

    const [metrics, setMetrics] = useState(getMetrics);
    const [gameRunning, setGameRunning] = useState("MatchItUp Start");

    return getCorrespondingGameComponent(gameRunning, user, metrics, setMetrics, setGameRunning);
}

function getCorrespondingGameComponent(gameRunning, user, metrics, setMetrics, setGameRunning) {
    if (gameRunning === "MatchItUp Start") {
        return <StartScreen setGameRunning={setGameRunning} />;
    } else if (gameRunning === "MatchItUp Game") {
        return (
            <div className="border-2 border-solid">
                <GameField setGameRunning={setGameRunning} metrics={metrics} setMetrics={setMetrics} user={user}/>
            </div>
        );
    } else if (gameRunning === "metrics") {
        return (
            <Metrics setGameRunning={setGameRunning} metrics={metrics} setMetrics={setMetrics} user={user} />
        );
    } else {
        return null;
    }
}

function getMetrics(){
    return {
        //list of all metrics needed to be tracked here
    }
}