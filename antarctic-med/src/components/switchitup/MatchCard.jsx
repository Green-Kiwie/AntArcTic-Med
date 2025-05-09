import React, { useState } from 'react';

/**
 * A match card for the Switch It Up! game. The card has an image and a set of tasks it is tied to.
 * When clicked while matching the current task, the right counter is incremented and the card is disabled. 
 * Else, the wrong counter is incremented.
 * @param {string} currentTask The current task for the user to complete.
 * @param {Dispatch.SetStateAction<number>} setRightCount Setter for the amount of right matches.
 * @param {Dispatch.SetStateAction<number>} setWrongCount Setter for the amount of wrong matches.
 * @param {Object} cardValues Prop that contains the current card's image path and tasks it matches for.
 * @returns {HTMLImageElement} A clickable image that updates the right or wrong counts if it matches
 *  the current task.
 */
export default function MatchCard({ currentTask, setRightCount, setWrongCount, cardValues }) {
    const [isDisabled, makeDisabled] = useState(false);
    
    const updateCounts = () => {
        if (cardValues.tasks.includes(currentTask)) {
            setRightCount(prevRightCount => prevRightCount + 1);
            makeDisabled(true);
            return;
        }
    
        setWrongCount(prevWrongCount => prevWrongCount + 1);
    }

    return (
        <img onClick={isDisabled ? () => {} : updateCounts} src={cardValues.imgPath} 
             draggable={false}
             style={{
                opacity: isDisabled ? 0.5 : 1,
                cursor: isDisabled ? "not-allowed" : "pointer"
             }}
             alt="Card to match with current task." 
             width="5%"
             />
    );
}