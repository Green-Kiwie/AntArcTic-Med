import Designed_Button from "../../global_helpers/Button"

/**
 * Sends the metrics. A comment
 */
function sendMetrics() {}



export default function Metrics({ setGameRunning, metrics, setMetrics }) {
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

    function resetMetrics() {
        setMetrics({
            total_number_of_wrong_selections: 0,
            total_number_of_correct_selections: 0,
            time_from_start_of_game_to_end_of_game: 0,
            time_from_start_of_game_to_first_selection: 0,
            wrong_selection_correct_color_wrong_shape: 0,
            wrong_selection_correct_shape_wrong_color: 0,
            wrong_selection_wrong_shape_wrong_color: 0,
            wrong_selection_missed_a_selection: 0,
            mean_time_between_selections: 0,
            median_time_between_selections: 0,
            longest_streak: 0,
        });
    }

    function resetGame(){
        setGameRunning("SwitchItUp Start");
        resetMetrics()
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
                onClick={() => resetGame()}
                content="Play Again"
            >
            </Designed_Button>
        </div>
    )
}
