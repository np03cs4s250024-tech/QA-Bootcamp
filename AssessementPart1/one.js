// function fizzBuzz(n){
//     for(let i=1;i<=n;i++){
//         if(i%3===0 && i%5===0){
//             console.log("FizzBuzz");
//         }else if (i%3===0){
//             console.log("Fizz");
//         }else if (i%5===0){
//             console.log("Buzz");
//         }else {
//             console.log(i);
//         }
//     }
// }


// fizzBuzz(20);

// Q2. Grade Classifier
// Task: Write getGrade(score) that returns a letter grade: 90+ = 'A', 80-89 = 'B', 70-79 = 'C', 60-69 = 'D', below 60 = 'F'.


// function getGrade(score){
//     if (score >= 90){
//         return"A";

//     }else if (score>=80){
//         return"B";

//         }else if (score>=70){
//             return"C";
//         }else if (score>=60){
//             return"D";
//         }else{
//             return"F";
//         }

//     }

//     console.log(getGrade(85));
//     console.log(getGrade(45));
//     console.log(getGrade(65));

  
// Q3. Day Type (switch)
// Task: Write dayType(day) that takes a day name string and returns 'Weekend' for Saturday/Sunday and 'Weekday' for the rest. Use a switch statement.
// Example:

    // function dayType(day){
    //     switch(day){
    //         case "Saturday":
    //             case "Saturday":
    //                 return "Weekend";
    //             default:
    //                 return "Weekday";

    //     }
    // }
    // console.log(dayType("Saturday")); 
    // console.log(dayType("Tuesday")); 

//     Q4. Sum of Even Numbers
// Task: Write sumEven(n) that returns the sum of all even numbers from 1 to n (inclusive).

// function sumEven(n){
//     let total = 0;
//     for (let i =0; i <=n; i++){
//         if (i%2===0){
//             total += i;
//         }
//     }
//     return total;
// }

// totalResult = sumEven(10);
// console.log(totalResult);

// Q5. Factorial
// Task: Write factorial(n) that returns n! (n × (n-1) × … × 1). factorial(0) should return 1.

// function factorial(n){
//     let result = 1;
//     for (let i=1; i<=n; i++){
//         result *= i;

//     }
//     return result;


// }
// console.log(factorial(5));
// console.log(factorial(0));

// Task: Write countVowels(str) that returns how many vowels (a, e, i, o, u) are in the string. Case-insensitive.

// function countVowels(str){
//     let count =0;
//     str = str.toLowerCase();
//     for (let chat of str){
//         if("aeiou".includes(chat)){
//             count++;
//         }
//     }
//     return count; 
// }

// let result = countVowels("javaScript");
// console.log(result); 


// Q7. Reverse a Number
// Task: Write reverseNumber(n) that returns the digits of n reversed, as a number. Do not convert to a string.

// function reverseNumber(n){
//     if(typeof n !== "number"){
//         return "please enter a valid number";
//     }
// let reverse =0;
// while(n > 0){
//     let digit = n % 10;
//     reverse = reverse * 10 + digit;
//     n = Math.floor(n /10);

// }
// return reverse;

// }

// console.log(reverseNumber(1234));
// console.log(reverseNumber("98765"));

// Q8. Find the Maximum
// Task: Write findMax(arr) that returns the largest number in the array. Do not use Math.max.


// function findMax(arr){
//     let max = arr[0 ];
//     for (let i =1; i < arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i];
//         }

//     }
//     return max;
        
//     }

//     console.log(findMax([3, 9, 1, 7]));


// Q9. Is Prime
// Task: Write isPrime(n) that returns true if n is a prime number, otherwise false.

// function isPrime(n){
//     if (n < 2){
//         return false;

//     }

// for (let  i=2; i < n ;i++){
//     if (n % i === 0){
//         return false;
//     }
    
// }
// return true;
// }

// console.log(isPrime(7));
// console.log(isPrime(10));
// console.log(isPrime(1));

// Q10. Temperature Converter (arrow function)
// Task: Write an arrow function cToF that converts Celsius to Fahrenheit using the formula (C × 9/5) + 32. Return the result.

// const cToF = (c) => (c * 9 / 5) + 32;

// console.log(cToF(0));
// console.log(cToF(100));

// Q11. Counter with Scope
// Task: Write a function makeCounter() that returns another function. Each time the returned function is called, it returns the next number starting from 1.

// function makeCounter() {
//     let count = 0;

//     return function() {
//         count++;
//         return count;
//     };
// }

// const next = makeCounter();

// console.log(next());
// console.log(next());
// console.log(next());

// Q12. Word Frequency Object
// Task: Write wordCount(sentence) that returns an object mapping each word to how many times it appears.


function wordCount(sentence) {
    let words = sentence.split(" ");
    let result = {};

    for (let word of words) {
        if (result[word]) {
            result[word]++;
        } else {
            result[word] = 1;
        }
    }

    return result;
}

console.log(wordCount("a b a c b a"));