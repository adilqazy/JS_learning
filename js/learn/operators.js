"use strict";

console.log('arr' + " - object");
console.log(4 + +"5");

let incr = 10,
    decr = 10;


// ++incr;
// --decr;

console.log(incr++,--decr);

//  % - остаток после целочисленного деления

console.log(5%2); //1

//  == оператор сравнения
//  === строгое сравнение по типу данных

console.log(2*4 === '8');

// && - оператор И
// || - оператор или - хотя бы один аргумент true то результат true
// ! оператор отрицания


const isChecked = true,
      isClose = false;

console.log(isChecked && !isClose);