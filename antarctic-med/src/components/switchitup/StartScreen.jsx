import Designed_Button from "../../global_helpers/Button"

export default function StartScreen({ setGameRunning }) {


    return (
        <div>
            <Designed_Button 
                onClick={() => setGameRunning("SwitchItUp Game")} content={"Start Game"}>
            </Designed_Button>
            <Designed_Button onClick={() => setGameRunning("MatchItUp Start")} content={"Switch to MatchItUp"}/>
            <p>
                Switch it Up! You are presented with a series of simple tasks; color matching, shape sorting,
                animal counting, but the rules of the game change periodically, which requires them to switch mental
                sets.<br /><br/>

                You must stay attentive to both the task and the rule prompts that indicate a shift in activity.
                At first, tasks alternate at predictable intervals, but over time, the game introduces randomized
                switching and overlapping stimuli to encourage mental flexibility. Visual or auditory cues; a bell,
                color change, pet voiceover help indicate when the task has changed.<br/><br/>

                Example:<br/>
                Round 1: "Tap every red object."<br/>
                Round 2: "Now tap every square."<br/>
                Round 3: "Tap red squares only."<br/>  
                Round 4: "Count the number of animals shown."<br/>
                Rounds can also overlap in the images they show to make it more related to them reading and then
                consciously switching their ideas.

            </p>
        </div>
    )
}
//Hello