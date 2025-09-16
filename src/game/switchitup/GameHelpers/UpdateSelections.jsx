import {selectCurrentTask, ColorIdEqual, ImageIdEqual, selectCardValues} from "./GameLogicHelpers"; 

export function handleViewContainerClick(e, context){
    if (e.target.closest('button')) return;
    updateInvalidSelection(context);
}

export function handleButtonClick(parameters) {
    const {id: buttonId, row: clickedRow, col: clickedCol, context} = parameters;

    //handle invalid button clicks
    if (isInvalidButtonClick(buttonId)) {
        updateInvalidSelection(context); // Call this if invalid ID is an invalid selection
        return; // Stop if the ID format is unexpected
    }

    let isClickCorrect = context.correctCards.some(([row, col]) => row === clickedRow && col === clickedCol);

    addButtonToClickedSet(context, buttonId); 
    updateTimeBetweenSelection(context);
    updateStreak(context, isClickCorrect);

    if (isClickCorrect) {
        updateCorrectSelection(context, buttonId);

    } else {
        const clickContext = {
            clickedRow,
            clickedCol,
            correctCards: context.correctCards,
        };
        updateWrongSelection(context, clickContext, buttonId);
    }
}

export function resetGameState(context) {
    const { setPromptMessage } = context;
    let currentTask = selectCurrentTask();
    setPromptMessage(currentTask[1]);
    updateCards(context, currentTask[0]);
    updateEndRoundMetrics(context);
}

function isInvalidButtonClick(buttonId) {
    return !buttonId || !buttonId.includes(',');
}

function addButtonToClickedSet(context, buttonId){
    const {setClickedButtons} = context
    setClickedButtons(prev => new Set(prev).add(buttonId));
};

function updateTimeBetweenSelection(context){
    const {startTime, roundTimePerSelection, setRoundTimePerSelection} = context;
    const now = Date.now();  
    const totalElapsed = now - startTime;
    const totalPreviousSelections = roundTimePerSelection.reduce((sum, t) => sum + t, 0);
    const adjustedTime = totalElapsed - totalPreviousSelections;

    setRoundTimePerSelection(prev => [...prev, adjustedTime]);
}

function updateStreak(context, clickCorrect){
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

function updateCorrectSelection(context, buttonId) {
    const { setMetrics, setNumOfCorrect, numOfCorrect } = context;

    hideButton(buttonId, context);

    const newCount = numOfCorrect + 1;
    setNumOfCorrect(newCount);

    setMetrics(prev => ({
        ...prev,
        total_number_of_correct_selections: prev.total_number_of_correct_selections + 1,
    }));

    if (isRoundComplete(newCount, context)) {
        resetGameState(context);
        context.setNumOfCorrect(0);
    }
}

function isRoundComplete(newCount, context){
    return newCount === context.correctCards.length
}

function updateWrongSelection(context, clickContext, buttonId) {
    const { setMetrics, cardMatrix, promptID } = context;
    const { clickedRow, clickedCol } = clickContext;
    const clickedID = cardMatrix[clickedRow][clickedCol];

    hideButton(buttonId, context);

    let metricKey;

    if (ColorIdEqual(clickedID, promptID)) {
        metricKey = 'wrong_selection_correct_color_wrong_shape';
    } else if (ImageIdEqual(clickedID, promptID)) {
        metricKey = 'wrong_selection_correct_shape_wrong_color';
    } else {
        metricKey = 'wrong_selection_wrong_shape_wrong_color';
    }

    setMetrics(prev => ({
        ...prev,
        [metricKey]: (prev[metricKey] || 0) + 1,
    }));
}

function updateInvalidSelection(context){
    const {setMetrics} = context;
    setMetrics(prev => ({
        ...prev,
        wrong_selection_missed_a_selection: prev.wrong_selection_missed_a_selection + 1,
    }));
}

function updateEndRoundMetrics(context){
    const {roundTimePerSelection, setMetrics, setTimePerSelection, setRoundTimePerSelection, isGameEnded } = context;

    if(isGameEnded) return;

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

function updateCards(context, prompt) {
    const { setCardMatrix, setCorrectCards, setClickedButtons, rows, columns, setPromptID } = context;
    let [card_matrix, correct_cards] = selectCardValues(prompt, rows, columns);
    setCardMatrix(card_matrix);
    setCorrectCards(correct_cards);
    setClickedButtons(new Set());
    setPromptID(prompt)
}

const hideButton = (buttonId, context) => {
    context.setHiddenButtons(prev => {
        const newSet = new Set(prev);
        newSet.add(buttonId);
        return newSet;
    });
};