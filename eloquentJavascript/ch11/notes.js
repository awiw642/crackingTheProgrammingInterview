setTimeout(() => console.log('tick'), 500);

let fourteen = new Promise((resolve, reject) => {
    setTimeout(() => resolve('foo'), 300);
});
console.log(fourteen.value);
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

class Timeout extends Error {}

function request(nest, target, type, content) {
    return new Promise((resolve, reject) => {
        let done = false; 
        functin attempt(n) {
            nest.send(target, type, content, () => {
                done = true; 
                if (failed) reject(failed);
                else resolve(value);
            }); 
            setTimeout(() => {
                if (done) return; 
                else if (n < 3) attempt(n + 1);
                else reject(new Timeout('Timed out'));
            }, 250);
        }
        attempt(1);
    });
}

// Seems like we can create promise by doing Promise.resolve.
// So what is the difference when we do new Promise?
// answer: Promise.resolve and Promise.reject are shortcut that we can use to create and already resolved or rejected promise.

function requestType(name, handler) {
    defineRequest(name, (nest, content, source, callback) => {
        try {
            Promise.resolve(handler(nest, content, source))
                .then(response => callback(null, response),
                      failure => callback(failure));
        } catch(exception) {
            callback(exception);
        }
    });
}

requestType('ping', () => 'pong');

function availableNeighbors(nest) {
    let requests = nest.neighbors.map(neighbor => {
        return request(nest, neighbor, 'ping') 
            .then(() => true, () => false);
    });
    return Promise.all(requests).then(result => {
        return nest.neighbors.filter((_, i) => result[i]); 
    });
}
// What arguments does then in promise take?
// answer: the first parameter is onFullfillment, the second is onRejection

/*
 
// Flooding
import { everywhere } from './crow-tech';

everywhere(nest => {
    nest.state.gossip = [];
});

function sendGossip(nest, message, exceptFor = null) {
    nest.state.gossip.push(message);
    for (let neighbor of nest.neighbors) {
        if (neighbor == exceptFor) continue;
        request(nest,neighbor, 'gossip', message);
    }
}

requestType('gossip', (nest, message, source) => {
    if (nest.state.gossip.includes(message)) return;
    console.log(
        `${nest.name} received gossip '${message}' from ${source}`
    );
    sendGossip(nest, message, source);
});
 * */

function anyStorage(nest, source, name) {
    if (source == nest.name) return storage(nest, name);
    else return routeRequest(nest, source, 'storage', name);
}

async function chicks(nest, year) {
    let list = '';
    await Promise.all(network(nest).map(async name => {
        list += `${name}: ${await anyStorage(nest, name,
            `chicks in ${year}`)}\n`; 
    }));
    return list;
}

// The code above has a flaw, that it always returns the nest that is slowest to respond.
// This is because list is initially set to ''
// re-assignment of list value involves an async task on anyStorage
// There is an async gap here 

async function chicks(nest, year) {
    let lines = network(nest).map(async name => {
        return name + ': ' + 
            await anyStorage(nest, name, `chicks in ${year}`);
    });
    return (await Promise.all(lines)).join('\n');
}
