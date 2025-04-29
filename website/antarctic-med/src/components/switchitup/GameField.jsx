export default function GameField({ setGameRunning, setMetrics }) {

    {/* example of updating metrics */}
    function handleButtonClick() {
        setMetrics(prev => ({
            ...prev,
            total_number_of_correct_selections: prev.total_number_of_correct_selections + 1
        }));
    }

    return (
        <div>
            <h1>Game Field</h1>
            {/* example of calling the update */}
            <button onClick={handleButtonClick}>
                add 1 to total number of correct selections
            </button>

            <button onClick={() => setGameRunning("metrics")}>
                Show Metrics
            </button>
        </div>
    )
}