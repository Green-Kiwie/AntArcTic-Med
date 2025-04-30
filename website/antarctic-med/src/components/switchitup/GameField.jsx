import { useState } from "react"

/* Tasks and Prompts */
const prompts = ['Click A', 'Click B', 'Click C'];
const tasks = ['Click', 'A', 'B', 'C'];

/* Use States */
const [task, setTask] = useState('');
const [prompt, setPrompt] = useState(prompts[0]);

// Needs the parameters for list of tasks and prompts from app
export default function GameField() {
    const updateGameState = (userAnswer) => {
    /*
    * Updates the game state by modifying the task and prompt
    * Determines if the user's answers are correct or incorrect and stores it
    */
        index = Math.floor((Math.random() * 4) + 1);
        setPrompt(prompts[index]);
    }

    return (
        <div>
            <h1>{prompt}</h1>
            <button onClick={updateGameState}>Sample Button</button>
        </div>
    )
}