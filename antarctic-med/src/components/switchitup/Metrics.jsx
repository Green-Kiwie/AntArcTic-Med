/**
 * Sends the metrics. A comment
 */
function sendMetrics() {}

export default function Metrics({ setGameRunning, metrics }) {
    return (
        <div>

            {/* Example render of metrics... could use a helper function to format metrics display */}
            <h2 className="text-2xl font-bold mb-4">Game Metrics</h2>
            <ul className="space-y-2">
                {Object.entries(metrics).map(([key, value]) => (
                    <li key={key} className="text-lg">
                        <strong>{key}:</strong> {value}
                    </li>
                ))}
            </ul>

            {/* Example button to update game state */}
            <button onClick={() => setGameRunning("start")}>
                Show Metrics
            </button>
        </div>
    )
}