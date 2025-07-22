import {Pressable} from "react-native-web";
import Designed_Button from "../../components/DesignedButton";

export default function Pets() {
    return (
        // Returns game field if the game is running and the start screen otherwise.
        <>
            <div className={"py-5"}>
                <Designed_Button content={"Start Pets Game"} size={"2xl"}>
                </Designed_Button>
            </div>
        </>
    )
}