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

// array sentence manipulation
// Buatlah sebuah fungsi untuk merubah “kalimat” menjadi multi dimensional array kalimat[kata[huruf]], tanpa menggunakan fungsi split() atau explode()
// const stringToArray = (sentence) => {
//     const sentenceSplitBySpace = sentence.split(" ");
//     const result = [];
//     for (let word of sentenceSplitBySpace) {
//         result.push(word.split(""));
//     }

//     return result;
// }
// console.log(stringToArray("aaa aaa"));

// Buatlah sebuah fungsi untuk memfilter jika nilai array lebih dari 5 dan lebih kecil dari sama dengan 8, serta diurutkan dari kecil ke besar dan hilangkan duplikasi.
// numbers = [3,2,1,2,1,4,6,5,7,8,8,9,2]
// filterNumber(numbers) //return [1,2,3,4,5,9]
// const numbers = [3, 2, 1, 2, 1, 4, 6, 5, 7, 8, 8, 9, 2];
// const filterNumber = (numberOfArray) => {
//     let unique = [...new Set(numberOfArray)];
//     unique = unique.sort();
//     return unique.filter(number => !(number > 5 && number <= 8));
// }
// console.log(filterNumber(numbers));

// Buatlah sebuah fungsi “sum” yang dapat dipanggil menggunakan “normal invocation function expression” dan “immediate invocation function expression”
// sum(2,3); //normal invocation return 5 
// sum(2)(3); //immediate invocation also return 5
// const sum = (a, b) => {
//     if (b === undefined) {
//         return (c) => {
//             return c + a;
//         }
//     }
//     return a + b;
// };

// console.log(sum(1)(5));
// console.log(sum(1, 5));

// “self number” adalah bilangan yang tidak bisa diciptakan melalui metode “penjumlahan dari suatu bilangan dengan invidu angka dari suatu bilangan tersebut”.
// Contohnya, deret “self number” dibawah 200 adalah 1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97, 108, 110, 121, 132, 143, 154, 165, 176, 187, 198.
// Sedangkan, pada kasus diatas 87 bukan lah self number. Karena dapat diciptakan melalui bilangan 75, dengan penjabaran 75 + 7 + 5 = 87
// Begitu juga 101 bukan lah self number. Karena dapat diciptakan melalui bilangan 91 atau 100. Dengan penjabaran 91 + 9 + 1 = 101 atau 100 + 1 + 0 + 0 = 101
// Berdasarkan penjelasan diatas, buatlah sebuah fungsi yang dapat mencetak total self number dibawah 200
// const selfNumber = () => {
//     const arrayOfNumbers = Array.from({ length: 200 }, (_, i) => i + 1);
//     function getSum(n) {
//         let sum = 0;
//         while (n != 0) {
//             sum = sum + n % 10;
//             n = parseInt(n / 10);
//         }
//         return sum;
//     }

//     function isSelfNum(n) {
//         for (let m = 1; m <= n; m++) {
//             if (m + getSum(m) == n)
//                 return false;
//         }
//         return true;
//     }
//     const selfNumbers = []
//     arrayOfNumbers.map(numb => {
//         if (isSelfNum(numb)) {
//             selfNumbers.push(numb)
//         }
//     })
//     return selfNumbers
// }

// console.log(selfNumber());