/*
for (start; condition; step) {
    loop body
}*/


for ( let num = 0; num < 5; num++) {
    console.log(num);
}

// toze samoe
let num = 0
for (; num < 5; num++) {
    console.log(num);
}

let number1 = 0
for ( ; number1 < 5; number1++) {
    console.log(number1);
    if (number1 === 2) break;
}
console.log(`Job done, num= ${number1}`);


let number2 = 0
for ( ; number2 < 5; number2 ++) {
    console.log(number2);
    if (number2 === 2) continue;
}