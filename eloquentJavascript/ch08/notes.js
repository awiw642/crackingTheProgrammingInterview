function canYouSpotTheProblem() {
    "use strict";
    for (counter = 0; counter < 10; counter++) {
        console.log("Happy happy"); 
    }
}

// the above will error out: "counter is not defined" as we are using strict mode. Without strict mode,
// Javascript will quietly creates a global binding of counter

function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand"); // Calling a constructor without new keyword bind the value to the global object namespace
console.log(name);
// -> Ferdinand


"use strict";
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand");
// -> TypeError: Cannot set property 'name' of undefined. This is because the
// binding of 'this' in the function is set to undefined.

class InputError extends Error {}

function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction " + result);
}

for (;;) {
    try {
        let dir = promptDirection("Where?"); 
        console.log("you chose: ", dir);
        break;
    } catch (e) {
        if (e instanceof InputError) {
            console.log("Not a valid direction. Try again.");  
        } else {
            throw e; 
        }
    }
}
