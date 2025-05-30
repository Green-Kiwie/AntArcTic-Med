import Designed_Button from "../../global_helpers/Button"

export default function MatchStartScreen({setGameRunning}) {
    function Instructions() {
        /** Place the instructions for how to play MatchItUp here */
        return (
            <>
            <p>test!</p>
            </>
        )
    }
    return (
        <>
        {/** Create a button to start MatchItUp! */}
            <Instructions/>
            <Designed_Button id={"startMatchGame"} content={"Start Game"} onClick={() => {setGameRunning("MatchItUp Game")}}/>
            <Designed_Button id={"returnToMenu"} content={"Return to Menu"} onClick={() => {setGameRunning("menu")}}/>
        </>
    )
}