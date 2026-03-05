const prompt = require("prompt-sync")();

// Question 1
//? first approach
// let name = prompt("Enter your name: ");
// let age = Number(prompt("Enter your age: "));

// if (age >= 18) console.log(`${name} is a valid voter`)
// else console.log(`${name} is not a valid voter`)

//? second approach
// console.log(`${name} is ${age >= 18 ? "a valid voter" : "not a valid voter"}`);

//? thord approach
// function checkVoter(name, age) {
//     if (age >= 18) return `${name} is a valid voter`;
//     else return `${name} is not a valid voter`;
// }
// checkVoter(name, age);


// Question 2
// let year = Number(prompt("Enter year (like this 2026) : "))
// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log(`${year} is a leap year`)
// } else{
//     console.log(`${year} is not a leap year`);
// }

//? second approach
// let year = Number(prompt("Enter year (like this 2026) : "))
// function isLeapYear(year) {
//     if((year % 4 === 0 && year % 100 !== 0) || (year % 400 ===0 )){
//         console.log(`${year} Leap Year`);
//     } else{
//         console.log(`${year} Not a Leap Year`);
//     }
    
// }
// isLeapYear(year)

let amount = Number(prompt("Enter amount: "))
let finalAmount = 0; 
if(amount>0 && amount<=5000){
    finalAmount = amount
} 
else if(amount>5000 && amount<=7000){
   finalAmount = amount - (5*amount)/100;
}
else if(amount>7000 && amount<=9000){
    finalAmount = amount - (10*amount)/100;
}
else{
    finalAmount = amount - (20*amount)/100;
}
console.log("finalAmount: "+ finalAmount);

