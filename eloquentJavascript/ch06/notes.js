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

const matrixTest = new  Matrix(5, 5);
console.log('MatrixTest.get(2, 3): ', matrixTest.get(2, 3));
matrixTest.set(2, 2, 5);
console.log('MatrixTest.get(2, 2): ', matrixTest.get(2, 2));

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


// Getters, Setters, and Statics
let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100); 
    }
};

console.log(varyingSize.size);
console.log(varyingSize.size);

class Temperature {
    constructor(celcius) {
        this.celcius = celcius;
    }
    get fahrenheit() {
        return this.celcius * 1.8 + 32; 
    }
    set fahrenheit(value) {
        this.celcius = (value - 32) / 1.8; 
    }
    // static functions are called from the class itself and not on the instance of the class
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8); 
    }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
temp.fahrenheit = 86;
console.log(temp.celcius);
console.log(Temperature.fromFahrenheit(86));

class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) return element(x, y);
            else return element(x, y);
        }); 
    }

    set(x, y, value) {
        super.set(x, y, value); 
        if (x != y) {
            super.set(y, x, value); 
        }
    }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));
