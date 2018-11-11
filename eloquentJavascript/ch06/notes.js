// Map
/*
Object in Javascript can be used as a map function as well. However, using it as that 
has some drawbacks. For example, as plain objects derive from Object.prototype, it 
contains some of the properties from the prototype.
*/

/*
The Map object holds key-value pairs and remembers the original insertion order of
the keys.
*/

let ages = new Map();
ages.set("Boris", 39); // Set method
ages.set("Liang", 22); // Set method
ages.set("Julia", 62); // Set method


console.log(`Julia is ${ages.get('Julia')}`); // Get method
console.log("Is Jack's age known?", ages.has("Jack")); // Has method
console.log(ages.has("toString")); // Has method
console.log("The size of the map: ", ages.size); // Size property
console.log("Trying out entries method: ", ages.keys().next());

// The Iterator Interface

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator);
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

// -----------------------------------------------------------------------------------
// Matrix class below creates a table with the value being set based on the (x,
// y) of the row and column being applied to the element function
class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            } 
        }
    }

    get(x, y) {
        return this.content[y * this.width + x]; 
    }

    set(x, y, value) {
       this.content[y * this.width + x] = value;
    }
}

// MatrixIterator class below provides an iterator to scan through the provided
// matrix

// To create an iterator use object[Symbol.iterator], which should return an
// object with a next function (iterables)
class MatrixIterator {
    constructor(matrix) {
        this.x = 0; 
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height) {
            return {done: true}; 
        }    
        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        };
        this.x++;
        if (this.x = this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}

Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
};
