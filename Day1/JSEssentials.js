const prompt = require('prompt-sync')();

//question 1 
//? Method 1 (first approach)
let name = prompt("Enter your Name: ");
let age = prompt("Enter your Age: ");
console.log(`Hello ${name} , you are ${age} years old.`);

// //? Method2 (second approach)
function greet(name, age){
    name = prompt("Enter your Name: ");
    age= Number(prompt("Enter your Age"))
    console.log(`Hello ${name} , you are ${age} years old.`)
}
greet()

//question . 2
//? first approach
let num1 = Number(prompt("Enter a Number: "));
let num2 = prompt("Again Enter a Number: ");
console.log(`first input is ${num1}, second input is ${num2}`);
let num3 = num1
num1 = num2
num2 = num3
console.log(`After swapping : ${num1} , ${num2}`);
//? second approach
function swapNumber(a, b){
    a = Number(prompt("Enter a Number: "));
    b = prompt("Again Enter a Number: ")
    let c = a;
    a = b;
    b = c ;
    console.log(`After Swapping: ${a} , ${b}`);
    return[a,b]
}
swapNumber()

// question 3

function compoundInterest(P,r,t,n){
    P = Number(prompt("Enter Principle Amount: "));

    r = Number(prompt("Enter Annual interest rate (in %): "));
    r =  r / 100;

    t = Number(prompt("number of years:"))
    n = Number(prompt("number of times interest is compounded per year:"))

    const A = P * Math.pow(1 + r / n, n * t);
    const CI = A - P;

    console.log(CI.toFixed(2));
}
compoundInterest()




