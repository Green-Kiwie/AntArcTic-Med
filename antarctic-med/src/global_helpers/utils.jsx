

export function getRandomInt(min, max) { //inclusive of min, but exclusive of max
    return Math.floor(Math.random() * (max - min)) + min;
}