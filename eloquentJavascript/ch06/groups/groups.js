export default class Group {
    constructor() {
        this.group = {}; 
    }
    add(key) {
        if (!this.group[key]) {
            this.group[key] = true; 
        } 
    }
    delete(key) {
        if (this.group[key]) {
            delete this.group[key]; 
        } 
    }
    has(key) {
        return !!this.group[key]; 
    }
    static from(iterables) {
    // Create a new group, iterate through the iterables with for..of loop, and
        // add each element to the new group
    }
}
