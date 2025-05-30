import Designed_Button from "../../global_helpers/Button";

export default function MatchItUpGame({setGameRunning}) {
    /**In this game a image will appear for a random amount of seconds (3-10). The image will then disappear and the GameTimer
     * will be activated (Already Implemented! in global_helper) and 4 options choices will be displayed. Out of the four, one image 
     * will be identical to the image displayed earlier. This will be the correct answer and the GameState is updated. This game ends
     * once 10 images are shown.
     */

    // Number of rounds in the game
    const maxRounds = 10;

    function updateGameState() {
        /**Display the starting images */
        

        /**The image then disapears when the timer ends */
        
        /**Display option choices */

        /**Update metrics based on user answers */

        /**Repeat this process 10 times */
    }

    function startingImage(){
        /**Create helper functions in global_helper to randomly choose from images */
        return;
    }
    return (
        <>
        <p>Insert Game Here</p>
        <Designed_Button id={"returnToMatchStart"} content={"End Game"} onClick={()=>{setGameRunning("MatchItUp Start");}}/>
        </>
    )
}