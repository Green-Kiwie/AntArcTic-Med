import { useEffect } from "react"; 
import { View, Text } from 'react-native';

import {EndGameButton, endGame} from "./GameHelpers/EndGame";
import {handleViewContainerClick, resetGameState} from "./GameHelpers/UpdateSelections";
import RenderCardMatrix from "./GameHelpers/RenderMatrix";


import GameTimer from "../globalLogicHelpers/GameTimer"; // Assuming this is also RN-Web compatible if it has UI
import gameFieldStyles from "./GameHelpers/GameFieldStyles";
import useInitializeContext from "./GameHelpers/GameFieldContext";

export default function GameField({ setGameRunning, setMetrics, user }) {

    const context = useInitializeContext(setGameRunning, setMetrics, user)
    
    useEffect(() => {
        if (context.promptMessage === '') {
            resetGameState(context);
        }
    }, [context.promptMessage, context]);

    useEffect(() => {
        if (!context.gameInitialized) {
            resetGameState(context);
            context.setGameInitialized(true);
        }
    }, [context.gameInitialized, context]);

    return (
        <View style={gameFieldStyles.mainContainer}
              onClick={(e) => handleViewContainerClick(e, context)}
        >

            <GameTitleText />

            <GameTimerWithText context={context}/>

            <PromptMessageText context={context} />

            <CardMatrix context={context} />
            
            <EndGameComponent context={context} />

        </View>
    );
}

function GameTitleText(){
    return <Text style={{fontSize: 28, fontWeight: 'bold', marginBottom: 15}}> Switch It Up! </Text> 
}

function GameTimerWithText({context}){
    return <GameTimer timeLimitInSeconds={60} onEnd={() => endGame(context)}/>
}

function EndGameComponent({context}){
    return (
        <View style={gameFieldStyles.endGameButtonContainer}>
            <EndGameButton context={context}/>
        </View>
    );
}

function PromptMessageText({context}){
    return <Text>{context.promptMessage || 'Loading...'}</Text>    
}

function CardMatrix({context}){
    return context.cardMatrix.length > 0 && <RenderCardMatrix cardMatrix={context.cardMatrix} context={context}/>
}


