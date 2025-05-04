import { getRandomInt } from '../global_helpers/utils';

// Four main functions here to export and use:
// 1. selectCurrentTask: will generate a prompt with corresponding prompt id
// 2. selectCardValues: will generate the board of card values
// 3. get_color_str_from_id: given a prompt id or card id, will give the corresponding string based on get_color_list
// 4. get_image_str_from_id: given a prompt id or card id, will give the corresponding string based on get_image_list 


function get_image_list(){ //change these values to change image options
    return {1: "A", 2: "B", 3: "C"}; //0 will be reserved for if unselected
}

function get_color_list(){ //change these values to change color options
    return {1: "red", 2: "blue", 3: "green"};//0 will be reserved for if unselected
}

/**
 * Randomly selects from our pool of tasks and creates a prompt.
 * @returns a list of two elements prompt_id and prompt_message.
 */
export function selectCurrentTask(){
    const combination_options = [0, 1, 2] //0: color only, 1: image only, 2: both
    const combination_choice = combination_options[getRandomInt(0, combination_options.length)];

    const color_choice = get_random_color_option();
    const image_choice = get_random_image_option();

    return [generate_prompt_id(combination_choice, color_choice, image_choice), 
            generate_prompt_message(combination_choice, color_choice, image_choice)];
}

/**
 * Randomly selects n card values from our pool of card values.
 * @returns a 2D matrix of cards and a set that contain the correct cards.
 * each element in set of correct card has 2 elements: a list of row then column, and card_id.
 * each element in 2D matrix of card will be a card id.
 */
export function selectCardValues(prompt_id, rows, columns, number_of_correct = -1) {
    if (number_of_correct === -1){
        number_of_correct = getRandomInt(1, rows*columns+1);
    }

    const color_id = get_color_id_from_id(prompt_id);
    const image_id = get_image_id_from_id(prompt_id);

    const correct_locations = make_correct_card_locations(rows, columns, number_of_correct);
    const card_matrix = make_card_matrix(correct_locations, rows, columns, color_id, image_id);

    return [card_matrix, correct_locations];
}

export function get_color_str_from_id(card_id){
    let color_id = get_color_id_from_id(card_id);
    let colors_list = get_color_list();
    return colors_list[color_id];
}

export function get_image_str_from_id(card_id){
    let image_id = get_image_id_from_id(card_id);
    let image_list = get_image_list();
    return image_list[image_id];
}



// //testing code for selectCurrentTask
// const [prompt_id, prompt_message] = selectCurrentTask();
// console.log("Generated Prompt ID:", prompt_id);
// console.log("Generated Prompt Message:", prompt_message);

// //testing code for selectCardValues
// const [card_matrix, correct_locations] = selectCardValues(prompt_id, 4, 3);
// console.log("Card matrix:");
// console.log(card_matrix);
// console.log("Correct locations:");
// console.log(correct_locations);

function make_card_matrix(correct_card_locations, rows, columns, color_id, image_id){
    let card_matrix = []
    for (let r = 0; r < rows; r++) {
        card_matrix.push([]);
        for (let c = 0; c < columns; c++) {
            const in_correct_location = correct_card_locations.some(
                ([row, col]) => row === r && col === c
            );

            if (in_correct_location){
                card_matrix[r].push(make_acceptable_card(color_id, image_id));
            }
            else{
                card_matrix[r].push(make_incorrect_card(color_id, image_id));
            }
        }
    }
    return card_matrix;
}

function make_incorrect_card(correct_color_id, correct_image_id){
    let card_id = 0;
    if (correct_color_id === 0){ //color id can be anything, image_id cannot be one particular thing
        card_id = generate_prompt_id(2, get_random_color_option(), get_random_not_image_option(correct_image_id));
    }
    else if (correct_image_id === 0){ //image id can be anything, color id can be anything
        card_id = generate_prompt_id(2, get_random_not_color_option(correct_color_id), get_random_image_option());
    }
    else{
        card_id = generate_prompt_id(2, get_random_not_color_option(correct_color_id), get_random_not_image_option(correct_image_id));
    }
    return card_id;
}

function get_random_not_color_option(not_id){
    let color_options = Object.keys(get_color_list()).map(Number);
    const not_index = color_options.indexOf(not_id);
    color_options.splice(not_index, 1);
    return color_options[getRandomInt(0, color_options.length)];
}

function get_random_not_image_option(not_id){
    let image_options = Object.keys(get_image_list()).map(Number); 
    const not_index = image_options.indexOf(not_id);
    image_options.splice(not_index, 1);
    return image_options[getRandomInt(0, image_options.length)];
}

function make_correct_card_locations(rows, columns, number_correct){
    let possible_locations = get_possible_locations(rows, columns);

    let correct_locations = [];
    for (let i = 0; i < number_correct; i++) {
        let random_location = getRandomInt(0, possible_locations.length);
        correct_locations.push(possible_locations[random_location]);
        possible_locations.splice(random_location, 1);
    }

    return correct_locations;
}

function get_possible_locations(rows, columns){
    let possible_locations = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        possible_locations.push([r, c]);
      }
    }
    return possible_locations;
}

function make_acceptable_card(color_id, image_id){
    let card_id = 0;
    if (color_id === 0){
        card_id = generate_prompt_id(2, get_random_color_option(), image_id);
    }
    else if (image_id === 0){
        card_id = generate_prompt_id(2, color_id, get_random_image_option());
    }
    else {
        card_id = generate_prompt_id(2, color_id, image_id);
    }
    return card_id;
}

function get_random_color_option(){
    const color_options = Object.keys(get_color_list()).map(Number);
    return color_options[getRandomInt(0, color_options.length)];
}

function get_random_image_option(){
    const image_options = Object.keys(get_image_list()).map(Number); 
    return image_options[getRandomInt(0, image_options.length)];
}

/**generates prompt id, 
 * will return a 3 or 4 digi id,  right two digits for image and remaining digits on left for color
 * this means any number that is <100 means it is image only and number %100===0 is digits only.
*/
function generate_prompt_id(combination_choice, color_choice, image_choice){
    let prompt_id = 0;
    if (combination_choice === 0 || combination_choice === 2){
        prompt_id += color_choice*100;
    }

    if (combination_choice === 1 || combination_choice === 2){
        prompt_id += image_choice;
    }

    return prompt_id;
}

/**generates prompt message 
 * will return a string
*/
function generate_prompt_message(combination_choice, color_choice, image_choice){
    let prompt_msg = "Select everything that is ";
    if (combination_choice === 0){
        prompt_msg += get_color_str(color_choice);
    }
    else if (combination_choice === 1){
        prompt_msg += get_image_str(image_choice);
    }
    else if (combination_choice === 2){
        prompt_msg += get_color_str(color_choice);
        prompt_msg += " and ";
        prompt_msg += get_image_str(image_choice);
    }
    prompt_msg += ".";
    return prompt_msg;
}





function get_color_id_from_id(id){
    return Math.floor(id / 100);
}

function get_image_id_from_id(id){
    return id%100;
}

function get_color_str(color_id){
    let colors_list = get_color_list();
    return colors_list[color_id];
}

function get_image_str(image_id){
    let colors_list = get_image_list();
    return colors_list[image_id];
}

export default selectCurrentTask;