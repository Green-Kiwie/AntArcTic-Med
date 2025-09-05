

export function getRandomInt(min, max) { //inclusive of min, but exclusive of max
    return Math.floor(Math.random() * (max - min)) + min;
}

export function getMedian(arr) {
    if (arr.length === 0) return null;

    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        // even length, average two middle values
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        // odd length, return the middle value
        return sorted[mid];
    }
}