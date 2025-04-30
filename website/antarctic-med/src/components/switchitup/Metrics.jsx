import { useEffect } from "react";

/**
 * Sends the metrics.
 */
function sendMetrics() {}

const formatMetrics = ( metrics, setMetrics ) => {
    /*
    Need to determine 3 different types
    1. longest streak of accurate presses (measure accuracy)
    2. number of missed presses (measures motor skills)
    3. average reaction time (total time/number of presses)
    */
    setMetrics(prev => ({
        ...prev,
        /*Will need a the longest_streak metric to be tracked in the GameField component for the longest streak*/
        longest_streak: 0,
        num_missed_presses: metrics.wrong_selection_missed_a_selection,
        average_reaction_time: metrics.total_number_of_correct_selections ? (metrics.time_from_start_of_game_to_end_of_game / metrics.total_number_of_correct_selections) : 0,
    }));
}

export default function Metrics({ setGameRunning, metrics, setMetrics }) {

    useEffect(() => {
        formatMetrics( metrics, setMetrics );
    }, []);

    return (
        <div>
            {/* Example render of metrics... could use a helper function to format metrics display */}
            <h2 className="text-2xl font-bold mb-4">Game Metrics</h2>
            <ul className="space-y-2">
                {Object.entries(metrics).map(([key, value]) => (
                    <li key={key} className="text-lg">
                        <strong>{key}:</strong> {value}
                    </li>
                ))}
            </ul>

            {/* Example button to update game state */}
            <button onClick={() => setGameRunning("start")}>
                Play Again
            </button>
        </div>
    )
}