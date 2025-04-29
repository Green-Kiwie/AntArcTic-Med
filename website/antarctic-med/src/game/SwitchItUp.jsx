
// Should have a const array of tasks to pull from

// Should have a const array of card values to pull from
// card values is a list of arrays that contains predetermined cards with props that match task.
// [["red", "square", imgPath], ["blue", "circle", imgPath]] example
//    ^                          ^
//   Card 1                     Card 2

import {useState} from "react";
import StartScreen from "../components/switchitup/StartScreen";
import GameField from "../components/switchitup/GameField";
import Metrics from "../components/switchitup/Metrics";


const metrics = {
    "total_number_of_wrong_selections": 0,
    "total_number_of_correct_selections": 0,
    "time_from_start_of_game_to_end_of_game": 0,
    "time_from_start_of_game_to_first_selection": 0,
    "wrong_selection_correct_color_wrong_shape": 0,
    "wrong_selection_correct_shape_wrong_color": 0,
    "wrong_selection_wrong_shape_wrong_color": 0,
    "wrong_selection_missed_a_selection": 0,
    "mean_time_between_selections": 0,
    "median_time_between_selections": 0,
}

/**
 * Randomly selects from our pool of tasks and creates a prompt.
 * @returns an array with those tasks and prompt.
 */
function selectCurrentTask() {}


/**
 * Randomly selects n card values from our pool of card values.
 * @returns an array of the selected card values.
 */
function selectCardValues() {}


/**
 * Main component for the game Switch It Up!
 * Will display different component/"screen" depending on GameRunning.
 * Three different main "screens": <StartScreen>, <GameField>, <Metrics>
 */
export default function SwitchItUp() {
    // Should have metrics...
    // and then pass those metrics to the sendMetrics function when needed.
    const [gameRunning, setGameRunning] = useState("start");

    return (
        // Returns game field if the game is running and the start screen otherwise.
        <>
            {gameRunning === "start" ? (
                <StartScreen setGameRunning={setGameRunning} />
            ) : gameRunning === "game" ? (
                <GameField setGameRunning={setGameRunning} metrics={metrics} />
            ) : gameRunning === "metrics" ? (
                <Metrics setGameRunning={setGameRunning} metrics={metrics} />
            ) : null}
        </>


        // Should return a different component depending on the GameRunning
        // false: <StartScreen>
        // true: <GameField> if rounds is less than MAX_ROUNDS

        // if rounds are equal to MAX_ROUNDS display <Metrics>
        // Can reset everything (set GameRunning back to false and rounds back to 0).
    )
}