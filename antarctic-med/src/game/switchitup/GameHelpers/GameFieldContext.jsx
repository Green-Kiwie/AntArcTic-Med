import { useState, useMemo } from "react"; // Import useEffect

export default function useInitializeContext(setGameRunning, setMetrics, user){
    const rows = 3;
    const columns = 4;
    const timePerRound = 10;

    const [promptMessage, setPromptMessage] = useState('');
    const [cardMatrix, setCardMatrix] = useState([]);
    const [correctCards, setCorrectCards] = useState([]);
    const [numOfCorrect, setNumOfCorrect] = useState(0);
    const [hiddenButtons, setHiddenButtons] = useState(new Set());

    const [currentStreak, setCurrentStreak] = useState(0);
    const [maxStreak, setMaxStreak] = useState(0);
    const [promptID, setPromptID] = useState('');

    const [startTime, setStartTime] = useState(Date.now());
    const [timePerSelection, setTimePerSelection] = useState([]);
    const [roundTimePerSelection, setRoundTimePerSelection] = useState([]);

    const [isGameEnded, setIsGameEnded] = useState(false);
    const [gameInitialized, setGameInitialized] = useState(false);

    const context = useMemo(() => ({
        cardMatrix,
        columns,
        correctCards,
        currentStreak,
        gameInitialized,
        hiddenButtons,
        isGameEnded,
        maxStreak,
        numOfCorrect,
        promptID,
        promptMessage,
        timePerRound,
        rows,
        roundTimePerSelection,
        setCardMatrix,
        setClickedButtons: setHiddenButtons,
        setCorrectCards,
        setCurrentStreak,
        setGameInitialized,
        setGameRunning,
        setHiddenButtons,
        setIsGameEnded,
        setMaxStreak,
        setMetrics,
        setNumOfCorrect,
        setPromptID,
        setPromptMessage,
        setRoundTimePerSelection,
        setStartTime,
        setTimePerSelection,
        startTime,
        timePerSelection,
        user,
    }), [
        cardMatrix,
        columns,
        correctCards,
        currentStreak,
        gameInitialized,
        hiddenButtons,
        isGameEnded,
        maxStreak,
        numOfCorrect,
        promptID,
        promptMessage,
        timePerRound,
        rows,
        roundTimePerSelection,
        setCardMatrix,
        setHiddenButtons,
        setCorrectCards,
        setCurrentStreak,
        setGameInitialized,
        setGameRunning,
        setIsGameEnded,
        setMaxStreak,
        setMetrics,
        setNumOfCorrect,
        setPromptID,
        setPromptMessage,
        setRoundTimePerSelection,
        setStartTime,
        setTimePerSelection,
        startTime,
        timePerSelection,
        user,
    ]);

    return context;
}