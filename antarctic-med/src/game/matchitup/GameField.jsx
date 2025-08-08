import useInitializeContext from "./GameHelpers/GameFieldContext";
import SingleImageGamePart from "./GameHelpers/SingleImageGamePart";
import ImageMatrixGamePart from "./GameHelpers/ImageMatrixGamePart";
import {EndGameButton} from "./GameHelpers/EndGame";
import gameFieldStyles from "./GameHelpers/GameFieldStyles.jsx";

export default function GameField({setGameRunning}) {
    /**In this game a image will appear for a random amount of seconds (3-10). The image will then disappear and the GameTimer
     * will be activated (Already Implemented! in global_helper) and 4 options choices will be displayed. Out of the four, one image 
     * will be identical to the image displayed earlier. This will be the correct answer and the GameState is updated. This game ends
     * once 10 images are shown.
     */

    // Number of rounds in the game
    const maxRounds = 10; //move this to GameFieldContext file

    const context = useInitializeContext(setGameRunning, setMetrics, user)

    return (
        <View style={gameFieldStyles.mainContainer}>

            <GameTitleText />

            <GamePart context={context} />
            
            <EndGameComponent context={context} />

        </View>
    )
}

function GamePart(context){
    //depending on the gamestate, either returning component showing the correct image,
    //or return component that shows a matix of images that the user can select
    //so either return "SingleImage" or "MatrixImage" component
}

function GameTitleText(){
    return <Text style={{fontSize: 28, fontWeight: 'bold', marginBottom: 15}}> Match It Up! Coming Soon!</Text> 
}

function EndGameComponent({context}){
    return (
        <View style={gameFieldStyles.endGameButtonContainer}>
            <EndGameButton context={context}/>
        </View>
    );
}