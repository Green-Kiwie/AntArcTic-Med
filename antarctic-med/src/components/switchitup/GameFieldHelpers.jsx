import  { selectCurrentTask, selectCardValues} from "../../game/game_logic_helpers";

export function updateCorrectSelection(context) {
    const {setMetrics} = context;
    console.log('Button clicked');
    setMetrics(prev => ({
        ...prev,
        total_number_of_correct_selections: prev.total_number_of_correct_selections + 1,
    }));
}

export const updateWrongSelection = (context) => {
    const {setMetrics} = context;
    console.log('Wrong button clicked');
    setMetrics(prev => ({
        ...prev,
        wrong_selection_missed_a_selection : prev.wrong_selection_missed_a_selection + 1,
    }));
};

function renderCards(context, prompt) {
    const { setCardMatrix, setCorrectCards, setClickedButtons, rows, columns } = context;
    let [card_matrix, correct_cards] = selectCardValues(prompt, rows, columns);
    setCardMatrix(card_matrix);
    setCorrectCards(correct_cards);
    setClickedButtons(new Set());
}

export function resetGameState(context) {
    const { setPromptMessage, setRoundHasMistake } = context;
    let currentTask = selectCurrentTask();
    setPromptMessage(currentTask[1]);
    renderCards(context, currentTask[0]);
    setRoundHasMistake(false);
}
export function addButtonToClickedSet(context, buttonId){
    const {setClickedButtons} = context
    setClickedButtons(prev => new Set(prev).add(buttonId));
};