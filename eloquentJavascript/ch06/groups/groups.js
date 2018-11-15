export default class Group {
    constructor() {
        this.group = []; 
    }
    add(key) {
        if (!this.group.includes(key)) {
            this.group.push(key);
        } 
    }
    delete(key) {
        this.group = this.group.filter((element) => {
            return element !== key;  
        });
    }
    has(key) {
        return this.group.includes(key); 
    }
    static from(iterables) {
        const newGroup = new Group();
        for (let element of iterables) {
            newGroup.add(element); 
        }
        return newGroup;
    }
}


class GroupIterator {
    constructor(group) {
        this.group = group; 
        this.count = 0;
    }

    next() {
        if (this.count <= this.group.length) {
            const result = { value: this.group[this.count], done: false  }; 
            this.count++;
            return result;
        } 
        return ({
            value: this.group[this.count], 
            done: true
        });
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}
