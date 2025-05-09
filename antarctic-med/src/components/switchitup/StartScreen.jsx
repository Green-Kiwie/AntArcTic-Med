export default function StartScreen({ setGameRunning }) {
    return (
        <div>
            <h1>Start Screen</h1>
            <button onClick={() => setGameRunning("game")}>
                Start Game
            </button>
        </div>
    )
}
//Hello