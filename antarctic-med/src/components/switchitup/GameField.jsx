import { useState } from "react";
import  {get_color_code_from_id, get_image_str_from_id, get_hover_color_code_from_id} from "../../game/game_logic_helpers";
import Designed_Button from "../../global_helpers/Button"
import GameTimer from "../../global_helpers/GameTimer"
import {endGame, updateCorrectSelection, updateWrongSelection, resetGameState, addButtonToClickedSet, updateInvalidSelection, updateStreak, updateTimeBetweenSelection} from "./GameFieldHelpers";

export default function GameField({ setGameRunning, setMetrics }) {
    // Matrix Size 
    const rows = 3;
    const columns = 4;
    const timePerRound = 10;

    // Prompts Usestates
    const [promptMessage, setPromptMessage] = useState('');
    const [cardMatrix, setCardMatrix] = useState([]);
    const [correctCards, setCorrectCards] = useState([]);
    const [numOfCorrect, setNumOfCorrect] = useState(0);
    const [clickedButtons, setClickedButtons] = useState(new Set());

    const [currentStreak, setCurrentStreak] = useState(0);
    const [maxStreak, setMaxStreak] = useState(0);
    const [promptID, setPromptID] = useState('');

    const [startTime, setStartTime] = useState(Date.now());
    const [timePerSelection, setTimePerSelection] = useState([]);
    const [roundTimePerSelection, setRoundTimePerSelection] = useState([]);

    // Define context object to pass around to helpers
    const context = {
        setPromptMessage,
        setCardMatrix,
        setCorrectCards,
        setClickedButtons,
        setPromptID,
        setCurrentStreak,
        setMaxStreak,
        setRoundTimePerSelection,
        setTimePerSelection,
        roundTimePerSelection,
        setGameRunning,
        currentStreak,
        maxStreak,
        setMetrics,
        rows,
        columns,
        cardMatrix,
        promptID,
        startTime,
        timePerSelection
    };

    // Determines if the button pressed is a correct options and adds to metrics
    function handleButtonClick(event) {

        const clickedRow = Number(event.target.id[0]);
        const clickedCol = Number(event.target.id[2]);
        let correct = numOfCorrect;
        let clickCorrect = correctCards.some(([row, col]) => row === clickedRow && col === clickedCol)

        const clickContext = {
            clickedRow,
            clickedCol,
            correctCards,
        }

        addButtonToClickedSet(context, `${clickedRow},${clickedCol}`);
        updateTimeBetweenSelection(context);

        if (!event.target.closest("button")){
            updateInvalidSelection(context)
        }
        else if (!event.target.closest("button").id.includes(',')) {
            return;
        }
        else if (clickCorrect) {
            correct = numOfCorrect + 1;
            setNumOfCorrect(correct);
            updateCorrectSelection(context);
            console.log('Correct!');
            event.target.style.visibility = "hidden";
        }
        else{
            updateWrongSelection(context, clickContext);
            event.target.style.visibility = "hidden";
        }

        updateStreak(context, clickCorrect)

        if (correct === correctCards.length){
            resetGameState(context);
            setNumOfCorrect(0);
        }
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
        <div onClick={(e) => {
                if (e.target.closest('button')) return;
                handleButtonClick(e);
            }} >
            <h1>Game Field</h1>

            {<GameTimer timeLimitInSeconds = {60} onEnd={() => endGame(context)}/>}

            <h2>{promptMessage === '' ? resetGameState(context) : promptMessage}</h2>    

            {cardMatrix.length > 0 && <RenderCardMatrix card_matrix={cardMatrix} />}


            <Designed_Button 
                onClick={() => endGame(context)} 
                content="End Game"
                colorClass = "bg-stone-300" 
                hoverColorClass = "hover:bg-stone-600"
            >
            </Designed_Button>
        </div>
    )
}