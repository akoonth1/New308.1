// jexample.mjs
/*
Multi line comment
 */

console.log("Hello, World!");


let x = 5;
let y = 10;

function add(a, b) {
    return a + b;
}


const n1 = 20;
const n2 = 5;
const n3 = 19;
const n4 = 6;

const simpleSum = n1 + n2 + n3 + n4;
console.log("Simple Sum:", simpleSum);
const numberArray = [n1, n2, n3, n4];

const valid = 50 == simpleSum;
console.log("Sum equals 50:", valid);
const twooddnunmbers =  n1%2 + n3%2 + n2%2 +n4%2 ==2;
console.log("Two odd numbers:", twooddnunmbers);

const divisibleBy5 = n1 % 5 + n2 % 5 + n3 % 5 + n4 % 5 === 0;
console.log("Divisible by 5:", divisibleBy5);
const firstvsSecond = n1 > n4;
console.log("First greater than Fourth:", firstvsSecond);

const arithmeticChain = (n2-n1)*n3 / n4;
console.log("Arithmetic Chain Result:", arithmeticChain); 



/*2 */

let distance = 1500
let budget = 175
let cost = 3
let speed55 = 30
let speed60 = 28
let speed75 = 23

let  time55 = distance / 55
let  time60 = distance / 60
let  time75 = distance / 75

let gallonsNeeded55 = distance / speed55
let gallonsNeeded60 = distance / speed60
let gallonsNeeded75 = distance / speed75


console.log("Time at 55 mph:", time55, "hours");
console.log("Time at 60 mph:", time60, "hours");
console.log("Time at 75 mph:", time75, "hours");

console.log("Gallons needed at 55 mpg:", gallonsNeeded55, "gallons");
console.log("Gallons needed at 60 mpg:", gallonsNeeded60, "gallons");
console.log("Gallons needed at 75 mpg:", gallonsNeeded75, "gallons");   

let cost55 = gallonsNeeded55 * cost
let cost60 = gallonsNeeded60 * cost
let cost75 = gallonsNeeded75 * cost 
console.log("Cost at 55 mpg:", cost55, "dollars");
console.log("Cost at 60 mpg:", cost60, "dollars");
console.log("Cost at 75 mpg:", cost75, "dollars");

//60 miles an hour makes the most sense within the budget