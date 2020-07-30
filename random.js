const randojs = require('@nastyox/rando.js'), rando = randojs.rando, randoSequence = randojs.randoSequence;

console.log("Floating point between 0 and 1", rando());
console.log("Floating point between 0 and 8, can be 0 but never 8", rando(8, "float")); //returns false
console.log("Number between 5 and 10", rando(5, 10));  //return false
console.log("Number between 0 and 5", rando(5)); // return false
console.log("Number between 0 and 1", rando(1));    //returns false
console.log("Number between 0 and 500", rando(500)); //returns false

console.log("Sequence array", randoSequence(1));
