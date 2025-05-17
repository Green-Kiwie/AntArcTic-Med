import { useState } from "react";
import  { selectCurrentTask, selectCardValues, get_color_code_from_id, get_image_str_from_id, get_hover_color_code_from_id} from "../../game/game_logic_helpers";
import Designed_Button from "../../global_helpers/Button"
import GameTimer from "../../global_helpers/GameTimer"

export default function GameField({ setGameRunning, setMetrics }) {
    const GAME_TIME_LIMIT = 20;
    // Matrix Size 
    const rows = 3;
    const columns = 4;

    // Prompts Usestates
    const [promptMessage, setPromptMessage] = useState('');
    const [cardMatrix, setCardMatrix] = useState([]);
    const [correctCards, setCorrectCards] = useState([]);
    const [numOfCorrect, setNumOfCorrect] = useState(0);
    const [clickedButtons, setClickedButtons] = useState(new Set());

    const [currentStreak, setCurrentStreak] = useState(0);
    const [maxStreak, setMaxStreak] = useState(0);
    const [roundHasMistake, setRoundHasMistake] = useState(false);

    /* example of updating metrics */
    function update_metrics() {
        console.log('Button clicked');
        setMetrics(prev => ({
            ...prev,
            total_number_of_correct_selections: prev.total_number_of_correct_selections + 1,
        }));
    }

    function update_wrong_selection(clickedRow, clickedCol){
        const ClickedID = cardMatrix[clickedRow][clickedCol];
        console.log('Wrong button clicked');
        let wrong_correct_color_wrong_shape = 0;
        let wrong_incorrect_color_right_shape = 0;
        let wrong = 0;
        if (correctDetails.some(card => card.color === get_color_code_from_id(ClickedID)) && correctDetails.some(card => card.shape !== get_image_str_from_id(ClickedID))){
            wrong_correct_color_wrong_shape=1;
        }
        if (correctDetails.some(card => card.color !== get_color_code_from_id(ClickedID)) && correctDetails.some(card => card.shape !== get_image_str_from_id(ClickedID))){
            wrong=1;
        }
        if (correctDetails.some(card => card.color !== get_color_code_from_id(ClickedID)) && correctDetails.some(card => card.shape === get_image_str_from_id(ClickedID))){
            wrong_incorrect_color_right_shape=1;
        }
        setMetrics(prev => ({
            ...prev,
            total_number_of_wrong_selections : prev.total_number_of_wrong_selections + 1,
            wrong_selection_missed_a_selection : prev.wrong_selection_missed_a_selection + 1,
            wrong_selection_correct_color_wrong_shape : prev.wrong_selection_correct_color_wrong_shape + wrong_correct_color_wrong_shape,
            wrong_selection_correct_shape_wrong_color : prev.wrong_selection_correct_shape_wrong_color + wrong_incorrect_color_right_shape,
            wrong_selection_wrong_shape_wrong_color : prev.wrong_selection_wrong_shape_wrong_color + wrong
        }));
    };

    const correctDetails = correctCards.map(([row, col]) => {
        const id = cardMatrix[row][col];
        return {
            color: get_color_code_from_id(id),
            shape: get_image_str_from_id(id)
        };
    });

    function addButtonToClickedSet(buttonId){
        setClickedButtons(prev => new Set(prev).add(buttonId));
    }

    // Determines if the button pressed is a correct options and adds to metrics
    function handleButtonClick(event) {
        const clickedRow = Number(event.target.id[0]);
        const clickedCol = Number(event.target.id[2]);
        let correct = numOfCorrect;

        addButtonToClickedSet(`${clickedRow},${clickedCol}`);
        
        if (correctCards.some(
            ([row, col]) => row === clickedRow && col === clickedCol)) {
            correct = numOfCorrect + 1;
            setNumOfCorrect(correct);
            update_metrics();
            console.log('Correct!');
        }
        else{
            setRoundHasMistake(true);
            update_wrong_selection(clickedRow, clickedCol);
        }

        if (correct === correctCards.length) {
            if(roundHasMistake){ setCurrentStreak(0); }
            else{
                setCurrentStreak(prev => {
                const newStreak = prev + 1;
                setMaxStreak(max => Math.max(max, newStreak));
                return newStreak;
                });
            }
            console.log("Done!");
            resetGameState();
            setNumOfCorrect(0);
        }

        event.target.style.visibility = "hidden";

        
    }


    // Updates the GameState when the start button is clicked. Will also implement the game state working when user clicks all answers
    function resetGameState() {
        let currentTask = selectCurrentTask();
        // Use States do not update instantly 
        setPromptMessage(currentTask[1]);
        renderCards(currentTask[0]);
        setRoundHasMistake(false);
    }

    // Updates UseState to display the card_matrix. Will also implement correct cards in future commit
    function renderCards(prompt) {
        let [card_matrix, correct_cards] = selectCardValues(prompt, rows, columns);
        setCardMatrix(card_matrix);
        setCorrectCards(correct_cards);
        setClickedButtons(new Set())
    }


    // Render the Cards by decoding matrix and adding them as buttons
    function RenderCardMatrix({card_matrix}) {
        let buttonLabels = [];
        for (let row = 0; row < card_matrix.length; row++) {
            for (let col = 0; col < card_matrix[0].length; col++) {

                const buttonId = `${row},${col}`;
                const isClicked = clickedButtons.has(buttonId);


                let onClickParameters = {} //update this for metrics tracking
                const labelText = get_image_str_from_id(card_matrix[row][col]);
                buttonLabels.push(
                    <Designed_Button id = {[row, col]} key={row + ' ' + col} 
                                    content={labelText} onClick={handleButtonClick}
                                    onClickParameters={onClickParameters}
                                    disable = {isClicked ? true : false}
                                    colorClass={isClicked ? "bg-white text-white" : get_color_code_from_id(card_matrix[row][col])}
                                    hoverColorClass={isClicked ? null : get_hover_color_code_from_id(card_matrix[row][col])}
                    >
                    </Designed_Button>
                ); // Creates an HTML button
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
            {/* example of calling the update
            <button id = 'update-metrics' onClick={handleButtonClick}>
                add 1 to total number of correct selections
            </button> */}
            {<GameTimer timeLimitInSeconds = {GAME_TIME_LIMIT} onEnd={() => {setGameRunning("metrics")}}/>}

            <h2>{promptMessage === '' ? resetGameState() : promptMessage}</h2>    

            {cardMatrix.length > 0 && <RenderCardMatrix card_matrix={cardMatrix} />}
            <button onClick={() => {
                setMetrics(prev => ({
                    ...prev,
                    longest_streak: maxStreak,
                    time_from_start_of_game_to_end_of_game: GAME_TIME_LIMIT
                }));
                setGameRunning("metrics");
            }}>
                Show Metrics
            </button>

        </div>
    )
}