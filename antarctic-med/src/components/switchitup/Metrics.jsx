import Designed_Button from "../../global_helpers/Button"

/**
 * Sends the metrics.
 */
function sendMetrics() {}



export default function Metrics({ setGameRunning, metrics }) {
    /*
    Need to determine 3 different types
    1. longest streak of accurate presses (measure accuracy)
    2. number of missed presses (measures motor skills)
    3. average reaction time (total time/number of presses)
    */


    const displayMetrics = {
        'Longest Streak' : metrics.longest_streak || 0,
        'Missed Presses' : metrics.wrong_selection_missed_a_selection,
        'Average Reaction Time (in ms)' : metrics.total_number_of_correct_selections ? (metrics.time_from_start_of_game_to_end_of_game / metrics.total_number_of_correct_selections) : 0,
    }


    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Game Metrics</h2>
            <ul className="space-y-2">
                {Object.entries(displayMetrics).map(([key, value]) => (
                    <li key={key} className="text-lg">
                        <strong>{key}:</strong> {value}
                    </li>
                ))}
            </ul>


            {/* Example button to update game state */}
            <Designed_Button 
                onClick={() => setGameRunning("SwitchItUp Start")}
                content="Play Again"
            >
            </Designed_Button>
        </div>
    )
}
