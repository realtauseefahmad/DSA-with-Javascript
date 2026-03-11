const prompt = require("prompt-sync")();

//1. Write a program that takes a single English alphabet character as input and checks whether it is a vowel or a consonant. If the character is one of a, e, i, o, u (in either uppercase or lowercase), print "Vowel". Otherwise, print "Consonant". If the input is not a valid English alphabet letter, print "Invalid input".
// let ch = prompt("Enter a single English alphabet character: ");
// function checkChar(ch) {
//     switch (ch.toLowerCase()) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             console.log("Vowel");
//             break;
//         default:
//             if (ch.length === 1 && /[a-zA-Z]/.test(ch)) {
//                 console.log("Consonant");
//             }
//             else {
//                 console.log("Invalid input");
//             }
//     }
// }
// checkChar(ch);

//2.Question
let day = parseInt(prompt("Enter a day number (1-7): "));
function printDayName(day) {
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number");
    }
}
printDayName(day);
