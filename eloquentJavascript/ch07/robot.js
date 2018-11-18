const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketpace-Town Hall", "Shop-Town Hall"
];


function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];   
        } else {
            graph[from].push(to); 
        } 
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}


class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this; 
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p; 
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address); 
            return new VillageState(destination, parcels);
        } 
    }

    static random(parcelCount = 5) {
        let parcels = []; 
        for (let i = 0; i < parcelCount; i++) {
            let address = randomPick(Object.keys(roadGraph)); 
            let place;
            do {
                place = randomPick(Object.keys(roadGraph)); 
            } while(place == address);
            parcels.push({place, address});
        }
        return new VillageState("Post Office", parcels);
    }
}

let first = new VillageState(
    "Post Office", 
    [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");

function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`); 
            break;
        } 
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

console.log(next.place);

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

















// console.log(next.place);
// console.log(next.parcels);
// console.log(first.place);

// Side Notes
let object = Object.freeze({value: 5});
// object.value = 10;  This throws an error on strict mode
console.log('Object if frozen: ', Object.isFrozen(object));


export { roadGraph };
