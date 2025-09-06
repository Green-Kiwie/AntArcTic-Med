import {endGame} from "./GameHelpers/EndGame";

export default function ImageMatrixGamePart(context){
    return (
        //add a timer here for 30 seconds for the user to choose the correct image
        //upon timer ending, call the endRound function

        <ImageMatrix context={context} />
    )
}

function ImageMatrix(context){
    return (
        //using the context to determine the correct images and 8 other images to get 9 images in total
        //display the 9 images in a 3 by 3 matrix
        //create another file to format 9 cards in the matrix

        //if correct card selected, call the endRound function
        //if wrong card selected, call the wrongCardSelected function
        <div/>
    )
}

function endRound(context){
    //change the gamestate in the context to "displaying correct image"

    //change the number of rounds remaining to current number -1

    //if number of rounds remaining is 0, call the EndGame function
}

function wrongCardSelected(context, cardId){
    //make the selected card invisible

    //in the future, update the metrics
}