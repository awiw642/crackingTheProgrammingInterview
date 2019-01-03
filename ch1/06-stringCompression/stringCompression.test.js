import stringCompression from './stringCompression';

test('stringCompression should always return the word with smallest numbers of characters', () => {
    const word = 'dddeedddee';
    const word2 = 'ddeeddee';
    const compressedWord = 'd3e2d3e2'
    const compressedWord2 = 'd2e2d2e2';
    expect(stringCompression(word)).toBe(compressedWord);
    expect(stringCompression(word2)).toBe(word2);
});