// ===============================
// some basic code in JS
// ===============================

// 1. Making loop
// a. basic loop increment
// for(let i = 1; i <= 10; i++){
// console.log(i);
// }

// b. basic loop decrement
// for(let i = 10; i > 0; i--){
// console.log(i);
// }

// c. if condition
// let a = 1;
// if(a === 1){
// console.log("yes");
// }else{
// console.log("no");
// }

// d. solving some number operation
// a = 77;
// for(let i = 0; i <= a; i++){
// a = a - i;
// if(a > 0){
// console.log(a);
// }
// }

// f. FizzBuzz algorithm
// for(let i = 1; i <= 100; i++){
// if(i % 3 === 0 && i % 5 === 0){
// console.log("fizzbuzz");
// }else if(i % 3 === 0){
// console.log("fizz");
// }else if(i % 5 === 0){
// console.log("buzz");
// }else{
// console.log(i);
// }
// }

// g. palindrome algorithm
// let word1 = "aba";
// let word2 = "acc";

// manually check
// function palindromeCheck(word) {
//     let wordLength = word.length;
//     let wordArr = word.split("");

//     let wordAfterReverse = "";
//     for (let i = wordLength; i > 0; i--) {
//         wordAfterReverse += `${wordArr[i - 1]}`;
//     }

//     word == wordAfterReverse ? console.log("palindrome") : console.log("not palindrome");
// }

// with reverse method
// function palindromeCheckReverse(word) {
//     let wordArr = word.split("");
//     let wordAfterReverse = wordArr.reverse();

//     word == wordAfterReverse.join("") ? console.log("palindrome") : console.log("not palindrome");
// }

// palindromeCheck(word1);
// palindromeCheckReverse(word1);

// h. switch case basic
// function switchCase(word) {
//     switch (word) {
//         case "a":
//             console.log("its a");
//             break;
//         case "b":
//             console.log("its b");
//             break;
//         case "c":
//             console.log("its c");
//             break;
//         default:
//             console.log("i don't what it is");
//             break;
//     }
// }

// switchCase("a");
// switchCase("b");
// switchCase("c");
// switchCase("d");

// i. array manipulation
// check if is in array
// ["water", "fire", "earth", "air"].includes("water") ? console.log("yes") : console.log("no");
// ["water", "fire", "earth", "air"].includes("api") ? console.log("yes") : console.log("no");

// filter array
// let filteredArray = ["water", "fire", "earth", "air"].filter(val => val === "water");
// console.log(filteredArray);

// map array
// let mapArray = [0, 1, 2, 3].filter(val => val * 1);
// console.log(mapArray);

// join array 
// let joinArray = [0, 1, 2, 3].join("");
// console.log(joinArray);

// add array to the last array
// let pushArray = [0, 1, 2, 3];
// pushArray.push(5);
// console.log(pushArray);

// add to the first array
// let addArray = [0, 1, 2, 3];
// addArray.unshift("a");
// console.log(addArray);

// popping the last array
// let popArray = [0, 1, 2, 3];
// popArray.pop();
// console.log(popArray);

// shift the first array
// let shiftArray = [0, 1, 2, 3];
// shiftArray.shift();
// console.log(shiftArray);

// detail explanation : https://www.freecodecamp.org/news/javascript-splice-how-to-use-the-splice-js-array-method/
// using array splice to add element to spicific index of array
// let spliceArray = [0, 1, 2, 3];
// spliceArray.splice(2, 0, "weh");
// console.log(spliceArray);

// using array splice to remove specific index of array
// let spliceArray = [0, 1, 2, 3];
// spliceArray.splice(3, 1);
// console.log(spliceArray);