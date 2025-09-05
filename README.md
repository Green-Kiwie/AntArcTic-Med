# AntArcTic-Med
MCI development assessment through gamification
Instagram: TBC

# purpose of repository
Currently in the prototying phase, we will design a website where users can are able to view information about us and test one of the games that we created.

# demo game: switch it up
Users will be given a prompt in which they will follow the prompt and tap the corresponding correct options. Upon tapping all the correct options, the user will view their metrics from their game session and be given the option to start another round to contribute more to the metrics. 

The raw metrics tracked for this game are:
1. number of wrong selections
2. number of correct selections
3. time from start of game to end of game
4. time from start of game to first selection
5. number of wrong selections: correct color but wrong shape
6. number of wrong selections: correct shape but wrong color
7. number of wrong selections: wrong shape and wrong color
8. number of wrong selections: missed a selection/did not click any button but touched a surface
9. mean time between selections
10. median time between selections

However, not all raw metrics will be shown to the user at the end of the game session. Here is the list of the aggregated metrics shown to the user at the end of their game session:
1. longest streak of accurate presses (ability to comprehend prompt)
2. number of missed presses (measures motor skills)
3. average reaction time: total time/number of presses (measures reaction time)

# demo game architecture
The demo will alternate between 3 GameRunning states: start, game, metrics.

When GameRunning is start: The start menu is displayed
When GameRunning is game: The gamefield is first displayed, 
When GameRunning is metrics: The metrics (together with the another round button) will be displayed. 

Flow of the states:
start -> game -> metrics -> start | null

The "SwitchItUp" component in the SwitchItUp.jsx file will call the corresponding components based on the gamerunning state. The components can change the GameRunning state by using the function "setGameRunning". e.g. setGameRunning("game")

# Specific information on files and functions
# GameField.jsx
Exports a function that randomly generates a prompt with corresponding 3x4 matrix of cards. Number of correct cards range from 1 - 12. To generate prompt and cards, optional to use "selectCurrentTask" and "selectCardValues" functions in the SwitchItUp.jsx or can write new functions in the GameField.jsx file. 

Both prompt and matrix will be rendered onto the screen. The correct cards must be tracked (write and use the functions in MatchCard.jsx). Flexibility is given in terms of representing which cards have been selected. Once all correct cards have been select, change gamestate to "metrics".

This function will also update metrics whenever the user attempts to select a card (i.e. when the screen is tapped or the button is clicked)

For now, cards will be letters A, B or C, each card with a random color choice between blue, red and green. E.g. red A or blue C or blue A.

prompt list:
1. select all letter A (can be any letter)
2. select all blue colors (can be any color)
3. select all blue letter A (can be any combination of color and letter) -- implementation of this is optional for now. focus on the first two.

# Metrics.jsx
Exports a function that will send the metrics to the backend and display the aggregated metrics that were stated earlier. Metrics will be sent to the backend via a POST request to an API call (not to be implemented at this stage). Flexibility is given in terms of displaying aggregated metrics. Additionally, will render a button that will set the gamestate to "start".

# StartScreen.jsx
Exports a function that renders the start screen. Start screen will display instructions on how to play the game and will have a button that will set the gamestate to "game". 

# setup instructions:
1. pull from repository (game prototype currently on the "game-component" branch)
2. move into directory: /website/antarctic-med/
3. run command: "npm start"