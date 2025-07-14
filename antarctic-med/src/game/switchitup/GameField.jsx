import React, { useState, useEffect } from "react"; // Import useEffect
import { View, Text, StyleSheet } from 'react-native';
import { get_color_code_from_id, get_image_str_from_id, get_hover_color_code_from_id } from "./GameLogicHelpers";
import Designed_Button from "./SwitchItUpButton"; // Your converted button
import GameTimer from "../globalLogicHelpers/GameTimer"; // Assuming this is also RN-Web compatible if it has UI
import { endGame, updateCorrectSelection, updateWrongSelection, resetGameState, addButtonToClickedSet, updateInvalidSelection, updateStreak, updateTimeBetweenSelection } from "./GameFieldHelpers";

export default function GameField({ setGameRunning, setMetrics }) {
    // Matrix Size
    const rows = 3;
    const columns = 4;
    const timePerRound = 10;

    // Prompts UseStates
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

    // Function to hide a button by its ID
    const hideButton = (buttonId) => {
        setHiddenButtons(prev => {
            const newSet = new Set(prev);
            newSet.add(buttonId);
            return newSet;
        });
    };

    const context = {
        setPromptMessage,
        setCardMatrix,
        setCorrectCards,
        setClickedButtons: setHiddenButtons,
        setPromptID,
        setCurrentStreak,
        setMaxStreak,
        setRoundTimePerSelection,
        setTimePerSelection,
        setIsGameEnded,
        roundTimePerSelection,
        setGameRunning,
        currentStreak,
        maxStreak,
        setMetrics,
        rows,
        columns,
        cardMatrix,
        promptID,
        startTime,
        timePerSelection,
        isGameEnded,
    };

    // Call resetGameState on initial render or when dependencies change
    useEffect(() => {
        // Only call resetGameState once on mount, or when specific game state changes dictate a reset.
        // The original code `promptMessage === '' ? resetGameState(context) : promptMessage`
        // in JSX is an anti-pattern as it causes side effects on render.
        if (promptMessage === '') {
            resetGameState(context);
        }
    }, [promptMessage, context]); // Add context as a dependency if its contents change and trigger effects

    // Determines if the button pressed is a correct option and adds to metrics
    // It now receives a 'parameters' object instead of a DOM 'event'
    function handleButtonClick(parameters) {
        // Destructure the parameters object received from the button
        const {id: buttonId, row: clickedRow, col: clickedCol} = parameters;

        // Old checks like `event.target.closest("button")` are now redundant
        // because `onPress` means the `Pressable` itself was clicked.
        // We only need to check if the `buttonId` itself is valid, if that's a concern.
        if (!buttonId || !buttonId.includes(',')) {
            updateInvalidSelection(context); // Call this if invalid ID is an invalid selection
            return; // Stop if the ID format is unexpected
        }

        let currentCorrectCount = numOfCorrect; // Get current state value
        let isClickCorrect = correctCards.some(([row, col]) => row === clickedRow && col === clickedCol);

        const clickContext = {
            clickedRow,
            clickedCol,
            correctCards,
        };

        // Update global context/state
        addButtonToClickedSet(context, buttonId); // Use 'buttonId' (e.g., "0,0")
        updateTimeBetweenSelection(context);

        if (isClickCorrect) {
            currentCorrectCount++;
            setNumOfCorrect(currentCorrectCount); // Update state
            updateCorrectSelection(context);
            console.log('Correct!');
            hideButton(buttonId); // Hide the button by updating parent state
        } else {
            updateWrongSelection(context, clickContext);
            hideButton(buttonId); // Hide the button by updating parent state
        }

        updateStreak(context, isClickCorrect);

        if (currentCorrectCount === correctCards.length) {
            resetGameState(context);
            setNumOfCorrect(0); // Reset correct count for next round
        }
    }

    // Render the Cards by decoding matrix and adding them as buttons
    function RenderCardMatrix({card_matrix}) {
        let buttonElements = [];
        for (let row = 0; row < card_matrix.length; row++) {
            for (let col = 0; col < card_matrix[0].length; col++) {
                const buttonId = `${row},${col}`;
                const isHidden = hiddenButtons.has(buttonId);

                if (isHidden) {
                    // When hidden, we still need a placeholder to maintain layout
                    // This placeholder will occupy the same space as the button
                    buttonElements.push(
                        <View key={buttonId} style={gameFieldStyles.buttonWrapper}>
                            <View style={[
                                // Apply the base button dimensions/border radius here to match the actual button
                                {width: 60, height: 60, borderRadius: 8},
                                // Apply a transparent background to actually "see" the space it occupies during debug
                                {backgroundColor: 'transparent'} // Or 'rgba(0,0,0,0.05)' for debugging
                            ]}/>
                        </View>
                    );
                    continue;
                }

                // ... (rest of your logic for buttonContent, colors, etc.)
                const labelText = get_image_str_from_id(card_matrix[row][col]);
                const isTemporarilyClicked = false;
                const buttonColorClass = isTemporarilyClicked ? "bg-white text-white" : get_color_code_from_id(card_matrix[row][col]);
                const buttonHoverClass = isTemporarilyClicked ? null : get_hover_color_code_from_id(card_matrix[row][col]);
                const buttonContent = isTemporarilyClicked ? "" : labelText;
                const isDisabled = isTemporarilyClicked || isHidden;


                buttonElements.push(
                    // Wrap each button in a View to apply margin for spacing
                    <View key={buttonId} style={gameFieldStyles.buttonWrapper}>
                        <Designed_Button
                            id={buttonId}
                            content={buttonContent}
                            onClick={handleButtonClick}
                            onClickParameters={{id: buttonId, row: row, col: col}}
                            disable={isDisabled}
                            colorClass={buttonColorClass}
                            hoverColorClass={buttonHoverClass}
                            size={'4xl'}
                        />
                    </View>
                );
            }
        }
        return (
                <View style={gameFieldStyles.buttonGridContainer}>
                    {buttonElements}
                </View>
        );
    }

    return (
        // Apply the main container styles to the outermost View
        <View style={gameFieldStyles.mainContainer}
              onClick={(e) => {
                  // This onClick handler is still for the web DOM event
                  if (e.target.closest('button')) return;
                  updateInvalidSelection(context);
              }}>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginBottom: 15}}>Game
                Field</Text> {/* Use Text component */}

            {<GameTimer timeLimitInSeconds={60} onEnd={() => endGame(context)}/>}

            <Text style={gameFieldStyles.promptMessageText}>
                {promptMessage === '' ? resetGameState(context) : promptMessage}
            </Text>

            {cardMatrix.length > 0 && <RenderCardMatrix card_matrix={cardMatrix}/>}

            <View style={gameFieldStyles.endGameButtonContainer}>
                <Designed_Button
                    onClick={() => {
                        if (!isGameEnded) endGame(context);
                    }}
                    content="End Game"
                    colorClass="bg-stone-300"
                    hoverColorClass="hover:bg-stone-600"
                />
            </View>
        </View>
    );
}

const gameFieldStyles = StyleSheet.create({
    // Style for the main container of your GameField component
    mainContainer: {
        flex: 1, // Make it take up all available vertical space in its parent
        alignItems: 'center', // Center content (like the grid) horizontally
        // backgroundColor: 'lightblue', // For debugging: see its bounds
        paddingHorizontal: 0, // Ensure no default horizontal padding
        marginHorizontal: 0,  // Ensure no default horizontal margin
        width: '100%', // Ensure it expands to full width
    },
    // Style for the container that holds the grid of buttons
    buttonGridContainer: {
        // Flexbox properties to simulate a grid layout with 4 columns
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center', // Center items horizontally within this container

        // Calculate the exact width needed for 4 buttons + 3 gaps
        // Button width: 60px (from Designed_Button)
        // Gap-4 (Tailwind) typically means 16px. So 3 gaps = 3 * 16px = 48px
        // Total width = (4 * 60px) + (3 * 16px) = 240px + 48px = 288px
        width: 288, // Set an explicit width for the grid container

        // React Native way to handle 'gap' using margins on children
        // We will apply a margin to each button in Designed_Button or here
        // If applying margin to children, this container might need negative margins
        // to prevent outer gaps.
        // Let's assume buttons will handle their own margins, and this container is fixed.
    },
    // Style for each individual button wrapper to handle spacing
    buttonWrapper: {
        margin: 8, // Half of 16px gap, creates 16px gap between buttons
        // backgroundColor: 'lightcoral', // For debugging: see button wrapper bounds
    },
    // Styles for other elements like prompt message if needed
    promptMessageText: {
        fontSize: 20, // Example font size
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    // Styles for the End Game button's container if needed
    endGameButtonContainer: {
        marginTop: 20,
    }
});