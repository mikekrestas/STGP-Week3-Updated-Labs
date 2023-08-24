// let counter;
// let condition;
// let iterator;

// for (counter; condition; iterator) {
//     console.log(j);
// }


let x = 2;
let loopCounter = 0;

while (x < 10000) {
    x = x ** 2 + 1;
    loopCounter++;
    console.log(`x: ${x}, loopCounter: ${loopCounter}`);
}