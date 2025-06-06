import { useEffect, useRef } from "react";
import Designed_Button from "../../global_helpers/Button"

/**
 * Sends the metrics.
 */
async function sendMetrics(metrics){
    const apiUrl = process.env.REACT_APP_AWS_API_GATEWAY_URL;

    const validatedMetrics = {
        total_number_of_wrong_selections: metrics.total_number_of_wrong_selections || 0,
        total_number_of_correct_selections: metrics.total_number_of_correct_selections || 0,
        time_from_start_of_game_to_end_of_game: metrics.time_from_start_of_game_to_end_of_game || 0,
        time_from_start_of_game_to_first_selection: metrics.time_from_start_of_game_to_first_selection || [],
        wrong_selection_correct_color_wrong_shape: metrics.wrong_selection_correct_color_wrong_shape || 0,
        wrong_selection_correct_shape_wrong_color: metrics.wrong_selection_correct_shape_wrong_color || 0,
        wrong_selection_wrong_shape_wrong_color: metrics.wrong_selection_wrong_shape_wrong_color || 0,
        wrong_selection_missed_a_selection: metrics.wrong_selection_missed_a_selection || 0,
        mean_time_between_selections: metrics.mean_time_between_selections || 0,
        median_time_between_selections: metrics.median_time_between_selections || 0,
        longest_streak: metrics.longest_streak || 0,
    };

    try{
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' },
            body: JSON.stringify(validatedMetrics),
        });
        
        console.log("Response:", response);

        if(response.ok){
            console.log("Metrics sent!");
        }
        else{
            console.log("Error sending metrics: ", response.statusText);
        }
    }
    catch(error){
        console.log("Error sending metrics: ", error);
    }
}

export default function Metrics({ setGameRunning, metrics, setMetrics }) {
    /*
    Need to determine 3 different types
    1. longest streak of accurate presses (measure accuracy)
    2. number of missed presses (measures motor skills)
    3. average reaction time (total time/number of presses)
    */


    const displayMetrics = {
        'Longest Streak' : metrics.longest_streak,
        'Wrong presses' : metrics.wrong_selection_missed_a_selection + metrics.wrong_selection_correct_color_wrong_shape + metrics.wrong_selection_correct_shape_wrong_color + metrics.wrong_selection_wrong_shape_wrong_color,
        'Average Reaction Time' : metrics.total_number_of_correct_selections ? (metrics.mean_time_between_selections/1000).toPrecision(3)+'s' : 0,
    }

    const metricsSent = useRef(false);

    useEffect(() => {
        // console.log("useEffect triggered. Metrics:", metrics);
        // console.log("metricsSent:", metricsSent.current);
        if(metrics && metrics.time_from_start_of_game_to_end_of_game > 0 && !metricsSent.current){
            sendMetrics(metrics);
            metricsSent.current = true;
        }
    }, [metrics]);

    function resetMetrics() {
        setMetrics({
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
            longest_streak: 0,
        });
    }

    function resetGame(){
        setGameRunning("SwitchItUp Start");
        resetMetrics()
    }

    console.log(metrics);

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
