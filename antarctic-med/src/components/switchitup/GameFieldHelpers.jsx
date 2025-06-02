import  { selectCurrentTask, selectCardValues, get_color_id_from_id, get_image_id_from_id} from "../../game/game_logic_helpers";
import {getMedian} from "../../global_helpers/utils" 

export function updateCorrectSelection(context) {
    const {setMetrics} = context;
    console.log('Button clicked');
    setMetrics(prev => ({
        ...prev,
        total_number_of_correct_selections: prev.total_number_of_correct_selections + 1,
    }));
}

export const updateWrongSelection = (context, clickContext) => {
    const {setMetrics, cardMatrix, promptID} = context;
    const {clickedRow, clickedCol} = clickContext;
    const clickedID = cardMatrix[clickedRow][clickedCol];
    console.log('Wrong button clicked');
    if (get_color_id_from_id(clickedID) === get_color_id_from_id(promptID)){
        setMetrics(prev => ({
            ...prev,
            wrong_selection_correct_color_wrong_shape: prev.wrong_selection_correct_color_wrong_shape + 1,
        }));
    }
    else if (get_image_id_from_id(clickedID) === get_image_id_from_id(promptID)){
        setMetrics(prev => ({
            ...prev,
            wrong_selection_correct_shape_wrong_color: prev.wrong_selection_correct_shape_wrong_color + 1,
        }));
    }
    else{
        setMetrics(prev => ({
            ...prev,
            wrong_selection_wrong_shape_wrong_color: prev.wrong_selection_wrong_shape_wrong_color + 1,
        }));
    }
};

function renderCards(context, prompt) {
    const { setCardMatrix, setCorrectCards, setClickedButtons, rows, columns, setPromptID } = context;
    let [card_matrix, correct_cards] = selectCardValues(prompt, rows, columns);
    setCardMatrix(card_matrix);
    setCorrectCards(correct_cards);
    setClickedButtons(new Set());
    setPromptID(prompt)
}

function updateEndRoundMetrics(context){
    const {roundTimePerSelection, setMetrics, setTimePerSelection, setRoundTimePerSelection} = context;

    setMetrics(prev => ({
        ...prev,
        time_from_start_of_game_to_first_selection: [
            ...prev.time_from_start_of_game_to_first_selection,
            ...(roundTimePerSelection[0] != null ? [roundTimePerSelection[0]] : []),
        ],
    }))
    setTimePerSelection(prev => [...prev, ...roundTimePerSelection]);

    setRoundTimePerSelection([]);
}

export function resetGameState(context) {
    const { setPromptMessage} = context;
    let currentTask = selectCurrentTask();
    setPromptMessage(currentTask[1]);
    renderCards(context, currentTask[0]);
    updateEndRoundMetrics(context);
}

export function addButtonToClickedSet(context, buttonId){
    const {setClickedButtons} = context
    setClickedButtons(prev => new Set(prev).add(buttonId));
};

export function updateInvalidSelection(context){
    const {setMetrics} = context;
    console.log('Invalid click');
    setMetrics(prev => ({
        ...prev,
        wrong_selection_missed_a_selection: prev.wrong_selection_missed_a_selection + 1,
    }));
}

export function updateStreak(context, clickCorrect){
    const {setCurrentStreak, currentStreak, maxStreak, setMaxStreak} = context;

    if (clickCorrect){
        const newStreak = currentStreak + 1;

        setCurrentStreak(newStreak);
        if (newStreak > maxStreak) {
            setMaxStreak(newStreak);
        }
    }
    else{
        setCurrentStreak(0);
    }
    
}

export function endGame(context){
    const {setMetrics, startTime, timePerSelection, setGameRunning, maxStreak} = context;

    const gameDuration = Date.now() - startTime;

    // console.log(gameDuration);
    setMetrics(prev => {
        const {
            wrong_selection_correct_color_wrong_shape = 0,
            wrong_selection_correct_shape_wrong_color = 0,
            wrong_selection_wrong_shape_wrong_color = 0,
            wrong_selection_missed_a_selection = 0,
            total_number_of_correct_selections = 0,
        } = prev;

        const totalNumWrong =
            wrong_selection_correct_color_wrong_shape +
            wrong_selection_correct_shape_wrong_color +
            wrong_selection_wrong_shape_wrong_color +
            wrong_selection_missed_a_selection;

        return {
            ...prev,
            time_from_start_of_game_to_end_of_game: gameDuration,
            mean_time_between_selections:
                gameDuration / (totalNumWrong + total_number_of_correct_selections),
            total_number_of_wrong_selections: totalNumWrong,
            median_time_between_selections: getMedian(timePerSelection),
            longest_streak: maxStreak,
        };
    });

    resetGameState(context);

    setGameRunning("metrics");
}


export function updateTimeBetweenSelection(context){
    const {startTime, roundTimePerSelection, setRoundTimePerSelection} = context;
    const now = Date.now();  
    const totalElapsed = now - startTime;
    const totalPreviousSelections = roundTimePerSelection.reduce((sum, t) => sum + t, 0);
    const adjustedTime = totalElapsed - totalPreviousSelections;

    setRoundTimePerSelection(prev => [...prev, adjustedTime]);
}