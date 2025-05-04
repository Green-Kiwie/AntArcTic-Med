import { useState } from "react";
import selectCurrentTask, { selectCardValues } from "../../game/game_logic_helpers";

export default function GameField({ setGameRunning, setMetrics }) {
    // Matrix Size 
    const rows = 3;
    const columns = 4;

    // Prompts Usestates
    const [promptId, setPromptId] = useState(0);
    const [promptMessage, setPromptMessage] = useState('');

    {/* example of updating metrics */}
    function handleButtonClick() {
        setMetrics(prev => ({
            ...prev,
            total_number_of_correct_selections: prev.total_number_of_correct_selections + 1
        }));
    }

    function updateGameState() {
        let currentTask = selectCurrentTask();
        setPromptId(currentTask[0]);
        setPromptMessage(currentTask[1]);
        console.log(selectCardValues(promptId, rows, columns)[0]);
        console.log(selectCardValues(promptId, rows, columns)[1]);
    }

    return (
        <div>
            <h1>Game Field</h1>
            {/* example of calling the update */}
            <button onClick={handleButtonClick}>
                add 1 to total number of correct selections
            </button>

            <button onClick={updateGameState}>Start Game</button>
            <h2>{promptMessage}</h2>

            {/* <ul className="space-y-2">
                {Object.entries(selectCardValues(promptId, rows, columns)).map(([key, value]) => (
                    <li key={key} className="text-lg">
                        <strong>{key}:</strong> {value}
                    </li>
                ))}
            </ul> */}

            <button onClick={() => setGameRunning("metrics")}>
                Show Metrics
            </button>
        </div>
    )
}