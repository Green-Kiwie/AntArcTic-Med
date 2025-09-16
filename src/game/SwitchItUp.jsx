
import {useState} from "react";
import StartScreen from "./switchitup/StartScreen";
import GameField from "./switchitup/GameField";
import Metrics from "./switchitup/Metrics";

import { View } from "react-native"

export default function SwitchItUp({ user }) {

    const [metrics, setMetrics] = useState(getMetrics);
    const [gameRunning, setGameRunning] = useState("SwitchItUp Start");

    // Returns game field if the game is running and the start screen otherwise.
    return getCorrespondingGameComponent(gameRunning, user, metrics, setMetrics, setGameRunning);
}

function getCorrespondingGameComponent(gameRunning, user, metrics, setMetrics, setGameRunning) {
    if (gameRunning === "SwitchItUp Start") {
        return <StartScreen setGameRunning={setGameRunning} />;
    } else if (gameRunning === "SwitchItUp Game") {
        return (
            <View style={{flex: 1 }}>
                <GameField setGameRunning={setGameRunning} metrics={metrics} setMetrics={setMetrics} user={user}/>
            </View>
        );
    } else if (gameRunning === "metrics") {
        return (
            <Metrics setGameRunning={setGameRunning} metrics={metrics} setMetrics={setMetrics} user={user} />
        );
    } else {
        return null;
    }
}

function getMetrics() {
    return {
        total_number_of_wrong_selections: 0,
        total_number_of_correct_selections: 0,
        time_from_start_of_game_to_end_of_game: 0,
        time_from_start_of_game_to_first_selection: [],
        wrong_selection_correct_color_wrong_shape: 0,
        wrong_selection_correct_shape_wrong_color: 0,
        wrong_selection_wrong_shape_wrong_color: 0,
        wrong_selection_missed_a_selection: 0,
        mean_time_between_selections: 0,
        median_time_between_selections: 0,
        longest_streak: 0
    };
}