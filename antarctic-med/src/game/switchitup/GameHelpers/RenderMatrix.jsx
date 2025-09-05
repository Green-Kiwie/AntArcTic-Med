import { View } from 'react-native';

import { get_color_code_from_id, get_image_str_from_id, get_hover_color_code_from_id } from "./GameLogicHelpers";
import SwitchItUpCard from "./SwitchItUpCard";
import { handleButtonClick } from './UpdateSelections';
import gameFieldStyles from './GameFieldStyles';


export default function RenderCardMatrix({cardMatrix, context}) {

    let buttonElements = [];
    for (let row = 0; row < cardMatrix.length; row++) {
        renderCol(cardMatrix, row, buttonElements, context);
    }
    
    return (
        <View style={gameFieldStyles.buttonGridContainer}>
            {buttonElements}
        </View>
    );
}

function renderCol(cardMatrix, row, buttonElements, context){
    for (let col = 0; col < cardMatrix[0].length; col++) {
        const buttonId = `${row},${col}`;
        const isHidden = context.hiddenButtons.has(buttonId);

        if (isHidden) {
            addHiddenCard(buttonElements, buttonId)
            continue;
        }

        addNormalCard(cardMatrix, row, col, buttonElements, buttonId, context, isHidden)
    }
}

function addHiddenCard(buttonElements, buttonId){
    buttonElements.push(
        <View key={buttonId} style={gameFieldStyles.buttonWrapper}>
            <View style={[
                // Apply the base button dimensions/border radius here to match the actual button
                {width: 60, height: 60, borderRadius: 8},
                // Apply a transparent background to actually "see" the space it occupies during debug
                {backgroundColor: 'transparent'} // Or 'rgba(0,0,0,0.05)' for debugging
            ]}/>
        </View>
    );
}

function addNormalCard(cardMatrix, row, col, buttonElements, buttonId, context, isHidden){
    const labelText = get_image_str_from_id(cardMatrix[row][col]);
    const isTemporarilyClicked = false;
    const buttonColorClass = isTemporarilyClicked ? "bg-white text-white" : get_color_code_from_id(cardMatrix[row][col]);
    const buttonHoverClass = isTemporarilyClicked ? null : get_hover_color_code_from_id(cardMatrix[row][col]);
    const buttonContent = isTemporarilyClicked ? "" : labelText;
    const isDisabled = isTemporarilyClicked || isHidden;

    buttonElements.push(
        <View key={buttonId} style={gameFieldStyles.buttonWrapper}>
            <SwitchItUpCard
                id={buttonId}
                content={buttonContent}
                onClick={handleButtonClick}
                onClickParameters={{id: buttonId, row: row, col: col, context: context}}
                disable={isDisabled}
                colorClass={buttonColorClass}
                hoverColorClass={buttonHoverClass}
                size={'4xl'}
            />
        </View>
    );
}


