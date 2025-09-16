import DesignedButton from "../../components/DesignedButton"

export default function MatchStartScreen({setGameRunning}) {

    return (
        <>
            <Instructions/>
            <DesignedButton id={"startMatchGame"} content={"Start Game"} onClick={() => {setGameRunning("MatchItUp Game")}}/>
        </>
    )
}

function Instructions(){
    //write all instructions on how to play MatchItUp in the text below
    return (
            <>
            <p>This game is still under developement!</p>
            </>
        )
}