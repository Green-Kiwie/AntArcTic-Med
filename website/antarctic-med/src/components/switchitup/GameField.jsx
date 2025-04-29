export default function GameField({ setGameRunning, metrics }) {
    return (
        <div>
            <h1>Game Field</h1>
            <button onClick={() => setGameRunning("metrics")}>
                Show Metrics
            </button>
        </div>
    )
}