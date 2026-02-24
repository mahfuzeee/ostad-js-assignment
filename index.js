// Assignment on module 10

/*----Solution----*/

/* 1. Write a function named findMax that takes an array 
of numbers and returns the largest number from the array. */

const maxArray = [23, 45, 2, 32, 12];

function findMax(arr) {
   return arr.reduce((acc, current) => {
      return acc > current? acc: current;
   }, 0);
}

console.log(`Maximum Number is: ${findMax(maxArray)}`);


/* 2. Write a function named countWords that takes a string and returns the number 
 of words in the string. */

 function countWords(str) {
   const words = str.split(" ");
   return words.length;
 }

 console.log(`Number of words: ${countWords("This is a function that gives no of words")}`);



 /* 3. Write a function named calculateDifference that takes two arguments and returns 
 the difference between the first and second arguments.*/

function calculateDifference(firstNum, secondNum) {
   return firstNum - secondNum;
}

console.log(`The difference is: ${calculateDifference(65, 32)}`);


/* 4. Write a function named filterEvenNumbers that takes an array of numbers and 
 returns a new array containing only the even numbers. */


function filterEvenNumbers(arr) {
   return arr.filter((element) => {
      return element % 2 === 0;
   });
}

console.log(`Even numbers: ${filterEvenNumbers([4, 3, 6, 24, 7])}`);



/* 5. Write a function named sortArrayDescending that takes an array of numbers 
 and returns a new array sorted in descending order. */

function sortArrayDescending(array) {
   return array.sort((a, b) => a - b);
}

console.log(`Sorted Array: ${sortArrayDescending([12, 3, 24, 16, 20])}`);


/* 6. Write a function named isLeapYear that takes a year as an argument 
 and returns true if the year is a leap year, and false if it is not. */
const year = 2000;

const isLeapYear = function(year) {
    if(!Number.isInteger(year)) return "Error: Enter a valid year.";
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
 
};

console.log(`${year} is a Leap year: ${isLeapYear(year)}`);


// 7. Write a function named reverseString that takes a string and 
// returns the reversed version of that string.

function reverseString(str) {
   const array = str.split('');
   return array.reverse().join('');
}

console.log(reverseString('Hello World'));


// 8. Write a function named sumArray that takes an array of numbers 
// and returns the total sum of all elements.

function sumArray(arr) {
   return arr.reduce((sum, current) => {
      return sum + current;
   });
}

console.log(sumArray([34, 56, 23, 3]));
