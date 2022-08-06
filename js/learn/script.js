"use strict";

if (4 == 5) {
    console.log('ok');
}
else {
    console.log('error');
}

let num = '50';
//(num == 50) ? console.log('ok') : console.log('error');

// switch (num) {
//     case '49':
//         console.log('Low');
//         break;
//     case 51:
//         console.log('Big');
//         break;
//     case 59:
//         console.log('true');
//         break;
//     default:
//         console.log('not this t');
// }

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    console.log(num);
    num++
}



//функции

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const calc = (a, b) => a + b;