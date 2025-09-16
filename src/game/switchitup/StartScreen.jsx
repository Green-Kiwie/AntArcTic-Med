import { StyleSheet, Text, View } from 'react-native';
import DesignedButton from "../../components/DesignedButton"

export default function StartScreen({ setGameRunning }) {


    return (
        <View>
            <View>
                <DesignedButton
                    onPress={() => setGameRunning("SwitchItUp Game")} content={"Start Game"} size={"2xl"}>
                </DesignedButton>
            </View>
            <Text>
                Switch it Up! You are presented with a series of simple tasks; color matching, shape sorting,
                animal counting, but the rules of the game change periodically, which requires them to switch mental
                sets.

                You must stay attentive to both the task and the rule prompts that indicate a shift in activity.
                At first, tasks alternate at predictable intervals, but over time, the game introduces randomized
                switching and overlapping stimuli to encourage mental flexibility. Visual or auditory cues; a bell,
                color change, pet voiceover help indicate when the task has changed.

                Example:
                Round 1: "Tap every red object."
                Round 2: "Now tap every square."
                Round 3: "Tap red squares only."
                Round 4: "Count the number of animals shown."
                Rounds can also overlap in the images they show to make it more related to them reading and then
                consciously switching their ideas.

            </Text>
        </View>
    )
}