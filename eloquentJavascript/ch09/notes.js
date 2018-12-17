let re1 = new RegExp('abc');
let re2 = /abc/;

// testing for matches
console.log(/abc/.test('abcde'));
console.log(/abc/.test('abxde'));
console.log(/abc\+/.test('abc9'));

// sets of characters
console.log(/[0123456789]/.test('in 1992'));
console.log(/[0-9]/.test('in 1992'));

// grouping subexpressions
// i is for case insensitive
console.log(/boo+(hoo+)+/i.test('Boohoooohoohoo'));

// matches and groups
// exec takes the first match
console.log(/\d+/.exec('one 234 two 100'));
console.log(/(\d)+(\w)+/.exec('2345abcd'));

/*
When running exec with parenthesis to specify the group, the return
value will be an array of [full match, first group match, last group match]
*/

function getDate(string) {
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}

console.log(getDate('1-1-2018'));

console.log(/\.\Bdate/.test('test.date'));

console.log('Borobudur'.replace(/[ou]/, 'a'));
// The above only replaces the first occurrence of the matched elements.
// To replace everything, use global.

console.log('Liskov, Barbara\nMcCarthy, John\nWaddler, Phillip'.replace(/(\w+), (\w+)/g, '$2 $1'));

console.log('barbara shevchenko'.match(/\w/g));
