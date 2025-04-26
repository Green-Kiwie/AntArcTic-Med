/**
 * Sends the metrics.
 */
function sendMetrics() {}

export default function Metrics({ setGameRunning }) {
    return (
        <div>
            <h1>Metrics</h1>
            <button onClick={() => setGameRunning("start")}>
                Show Metrics
            </button>
        </div>
    )
}