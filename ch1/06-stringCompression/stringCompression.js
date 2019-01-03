
/*
string compression of repeated chars. If the compressed string is not shorter than the original, return the original.
*/
export default function stringCompression(string) {
    const collectedWords = [];
    const current = {letter: '', count: 0};

    for (let char of string) {
        if (current.letter === '') {
            current.letter = char;
            current.count++;
        } else if (current.letter === char) {
            current.count++;
        } else if (current.letter !== char) {
            collectedWords.push(current.letter.concat(current.count));
            current.letter = '';
            current.count = 1;
        }
    }
    collectedWords.push(current.letter.concat(current.count));
    
    const shortestString = collectedWords.join('').length < string.length ? collectedWords.join('') : string;
    
    return shortestString;
}