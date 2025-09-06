
export default function SingleImageGamePart(context){

    return (
        //add a timer here for the 10 seconds the user gets to see the correct image 
        //upon timer ending, call the "endRound" function

        <SingleImage context={context}/>
    )
}

function SingleImage(context){
    return (
        //using the context to retrive and display the correct image
        <div/>
    )
}

function endRound(context){
    //change the gamestate in the context to "selecting image"
}