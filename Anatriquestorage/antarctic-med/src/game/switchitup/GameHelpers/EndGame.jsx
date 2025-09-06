import DesignedButton from "../../../components/DesignedButton";
import {getMedian} from "../../globalLogicHelpers/MathUtils" 

export function EndGameButton({context}){
    return (
        <DesignedButton
            onClick={handleEndGameClick(context)}
            content="End Game"
            colorClass="bg-stone-300"
            hoverColorClass="hover:bg-stone-600"
        />
    );
}

export function endGame(context){
    const { setMetrics, startTime, timePerSelection, setGameRunning, maxStreak, isGameEnded, setIsGameEnded, setPromptMessage, setCardMatrix, setCorrectCards, setClickedButtons, setPromptID, setCurrentStreak, setMaxStreak, setRoundTimePerSelection, setTimePerSelection } = context;

    const gameDuration = Date.now() - startTime;

    if(isGameEnded) return;
    setIsGameEnded(true);

    setMetrics(prev => updateMetricsForEndgame(
        prev, {
            gameDuration,
            timePerSelection,
            maxStreak}
        )
    );

    setGameRunning("metrics");
}

function handleEndGameClick(context){
    return () => {
        if (!context.isGameEnded) endGame(context);
    }
}

function updateMetricsForEndgame(prev, {
    gameDuration,
    timePerSelection,
    maxStreak
}) {
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
            (totalNumWrong + total_number_of_correct_selections) > 0
                ? gameDuration / (totalNumWrong + total_number_of_correct_selections)
                : 0,
        total_number_of_wrong_selections: totalNumWrong,
        median_time_between_selections: getMedian(timePerSelection),
        longest_streak: maxStreak,
    };
}
