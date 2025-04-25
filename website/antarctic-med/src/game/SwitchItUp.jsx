
// Should have a const array of tasks to pull from

// Should have a const array of card values to pull from
// card values is a list of arrays that contains predetermined cards with props that match task.
// [["red", "square", imgPath], ["blue", "circle", imgPath]] example
//    ^                          ^
//   Card 1                     Card 2

/**
 * Randomly selects from our pool of tasks and creates a prompt.
 * @returns an array with those tasks and prompt.
 */
function selectCurrentTask() {}


/**
 * Randomly selects n card values from our pool of card values.
 * @returns an array of the selected card values.
 */
function selectCardValues() {}


/**
 * Main component for the game Switch It Up!
 * Will display different component/"screen" depending on GameRunning.
 * Three different main "screens": <StartScreen>, <GameField>, <Metrics>
 */
export default function SwitchItUp() {

    // Should have metrics...
    // and then pass those metrics to the sendMetrics function when needed.

    return (

        // Should return a different component depending on the GameRunning
        // false: <StartScreen>
        // true: <GameField> if rounds is less than MAX_ROUNDS

        // if rounds are equal to MAX_ROUNDS display <Metrics>
        // Can reset everything (set GameRunning back to false and rounds back to 0).
        <div></div>
    )
}