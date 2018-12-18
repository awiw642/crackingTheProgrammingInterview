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

let s = 'the cia and fbi';
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));
// For the code above, notice that when global argument is not being passed, it is only gonna match the first match.

let stock = '1 lemon, 2 cabbages, and 101 eggs';
function minusOne(match, amount, unit, offset) {
    /*
     * The arguments being passed to a function in the replace method are set to
     * the followings:
        * full match
        * match group 1, match group 2 (if any) ...
        * offset (the index of the start of the match)
     * */
    console.log('match: ', match);
    console.log('amount: ', amount);
    console.log('unit: ', unit);
    console.log('offset: ', offset);
    amount = Number(amount) - 1;
    if (amount === 1) {
        unit = unit.slice(0, unit.length - 1); 
    } else if (amount === 0) {
        amount = 'no'; 
    }
    return amount + ' ' + unit;
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
