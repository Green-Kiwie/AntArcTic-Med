import DesignedButton from "../../components/DesignedButton"
import {View, Text} from "react-native"

export default function StartScreen({ setGameRunning }) {


    return (
        <View>
            <View style={"py-5"}>
                <DesignedButton
                    onPress={() => setGameRunning("SwitchItUp Game")} content={"Start Game"} size={"2xl"}>
                </DesignedButton>
            </View>
            {/* <Designed_Button onClick={() => setGameRunning("MatchItUp Start")} content={"Switch to MatchItUp"}/> */}
            <Text>
                Switch it Up! You are presented with a series of simple tasks; color matching, shape sorting,
                animal counting, but the rules of the game change periodically, which requires them to switch mental
                sets.{"\n"}{"\n"}

                You must stay attentive to both the task and the rule prompts that indicate a shift in activity.
                At first, tasks alternate at predictable intervals, but over time, the game introduces randomized
                switching and overlapping stimuli to encourage mental flexibility. Visual or auditory cues; a bell,
                color change, pet voiceover help indicate when the task has changed.{"\n"}{"\n"}

                Example:{"\n"}
                Round 1: "Tap every red object."{"\n"}
                Round 2: "Now tap every square."{"\n"}
                Round 3: "Tap red squares only."{"\n"}
                Round 4: "Count the number of animals shown."{"\n"}
                Rounds can also overlap in the images they show to make it more related to them reading and then
                consciously switching their ideas.

            </Text>
        </View>
    )
}