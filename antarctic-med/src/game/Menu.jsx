import Designed_Button from "../global_helpers/Button";

export default function Menu({setGameRunning}) {
    return (
        <div>
            {/** Create a button for every game in menu */}
            <Designed_Button id={"switchitup"} content={"SwitchItUp!"} onClick={()=>{setGameRunning("SwitchItUp Start")}}/>
            <Designed_Button id={"matchitup"} content={"MatchItUp!"} onClick ={()=>{setGameRunning("MatchItUp Start")}}/>
        </div>
    )
}