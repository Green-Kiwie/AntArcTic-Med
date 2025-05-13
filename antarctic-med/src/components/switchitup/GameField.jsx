import { useEffect, useState } from "react";
import  { selectCurrentTask, selectCardValues, get_color_id_from_id, get_image_id_from_id, get_color_str_from_id, get_image_str_from_id } from "../../game/game_logic_helpers";
import Designed_Button from "../../global_helpers/Button"

export default function GameField({ setGameRunning, setMetrics }) {
    // Matrix Size 
    const rows = 3;
    const columns = 4;

    // Prompts Usestates
    const [promptId, setPromptId] = useState(0);
    const [promptMessage, setPromptMessage] = useState('');
    const [cardMatrix, setCardMatrix] = useState([]);

    {/* example of updating metrics */}
    function handleButtonClick() {
        console.log('Button clicked');
        setMetrics(prev => ({
            ...prev,
            total_number_of_correct_selections: prev.total_number_of_correct_selections + 1
        }));
    }


    // Updates the GameState when the start button is clicked. Will also implement the game state working when user clicks all answers
    function updateGameState() {
        let currentTask = selectCurrentTask();
        setPromptId(currentTask[0]); // Use States do not update instantly 
        setPromptMessage(currentTask[1]);
        // console.log(promptMessage, promptId); // Prompt Message is aligned here
        renderCards(currentTask[0]);
    }

    // Updates UseState to display the card_matrix. Will also implement correct cards in future commit
    function renderCards(prompt) {
        let [card_matrix, correct_cards] = selectCardValues(prompt, rows, columns);
        setCardMatrix(card_matrix);
        
    }


    // Render the Cards by decoding matrix and adding them as buttons
    function RenderCardMatrix({card_matrix}) {
        let result = '';
        let image_id = 0;
        let color_id = 0;
        let buttonLabels = [];
        let i = 0;
        for (let row = 0; row < card_matrix.length; row++) {
            for (let col = 0; col < card_matrix[0].length; col++) {
                image_id = get_image_id_from_id(card_matrix[row][col]);
                color_id = get_color_id_from_id(card_matrix[row][col]);
                if (color_id > 0) {
                    let color_temp = get_color_str_from_id(card_matrix[row][col]);

                    result += color_temp;
                }
                if (color_id > 0 && image_id > 0) {
                    result += ' and ';
                }
                if (image_id > 0) {
                    let temp = get_image_str_from_id(card_matrix[row][col]);
                    result += temp;
                }
                // Button description
                let onClickParameters = {} //update this for metrics tracking
                const labelText = result; 
                buttonLabels.push(
                    <Designed_Button key={i} content={labelText} onClick={handleButtonClick} onClickParameters={onClickParameters}>
                    </Designed_Button>
                ); // Creates an HTML button
                i++;
                result = '';
            }
            
        }
        return (
            <div className="grid grid-cols-4 gap-4">
                {buttonLabels}
            </div>
        )

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
            {cardMatrix.length > 0 && <RenderCardMatrix card_matrix={cardMatrix} />}

            <button onClick={() => setGameRunning("metrics")}>
                Show Metrics
            </button>
        </div>
    )
}