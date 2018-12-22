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
