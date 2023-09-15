'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here

function showSum() {
    let a = 4;
    let b = 7;
    let sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
  }
 
  showSum();

// Here is the test for sum(); uncomment it to run it
// testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function showMultiply(a, b) { //eslint-disable-line
    let a = 5;
    let b = 9;
    let multiply = 5 * 9;
    console.log(`The multiple of ${a} and ${b} is ${multiply}`);
}

showMultiply();



// Here is the test for multiply(); uncomment it to run it
// testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here

function sumAndMultiply(a, b, c) {
    const sumResult = sum(sum(a, b), c);
    const multiplyResult = multiply(multiply(a, b), c);
    const sumString = `${a} and ${b} and ${c} sum to ${sumResult}.`;
    const multiplyString = `The product of ${a} and ${b} and ${c} is ${multiplyResult}.`;
  
    return [sumResult, multiplyResult, sumString, multiplyString];
  }
  
  function sum(a, b) {
    while (b !== 0) {
      let carry = a & b;
      a = a ^ b;
      b = carry << 1;
    }
    return a;
  }
  
  function multiply(a, b) {
    let result = 0;
    let negative = false;
  
    if (a < 0 && b >= 0) {
      a = -a;
      negative = true;
    } else if (a >= 0 && b < 0) {
      b = -b;
      negative = true;
    } else if (a < 0 && b < 0) {
      a = -a;
      b = -b;
    }
  
    while (b > 0) {
      if (b % 2 === 1) {
        result = sum(result, a);
      }
      a = a << 1;
      b = b >> 1;
    }
  
    return negative ? -result : result;
  }
  
  const result = sumAndMultiply(4, 7, 5);
  console.log(result);
  

// Here is the test for sumAndMultiply(); uncomment it to run it
// testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here

function sumArray(numbers) {
    let sumResult = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sumResult = sum(sumResult, numbers[i]);
    }
  
    const numberString = numbers.join(',');
    const resultString = `${numberString} was passed in as an array of numbers, and ${sumResult} is their sum.`;
  
    return [sumResult, resultString];
  }
  
  function sum(a, b) {
    while (b !== 0) {
      let carry = a & b;
      a = a ^ b;
      b = carry << 1;
    }
    return a;
  }
  
  const numbers = [2, 3, 4];
  const theResult = sumArray(numbers);
  console.log(result);
  

// Here is the test for sumArray(); uncomment it to run it

// testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(numbers) {
    let productResult = 1;
  
    for (let i = 0; i < numbers.length; i++) {
      productResult = multiply(productResult, numbers[i]);
    }
  
    const numberString = numbers2.join(',');
    const resultString = `The numbers ${numberString} have a product of ${productResult}.`;
  
    return [productResult, resultString];
  }
  
  function multiply(a, b) {
    let result = 0;
    let negative = false;
  
    if (a < 0 && b >= 0) {
      a = -a;
      negative = true;
    } else if (a >= 0 && b < 0) {
      b = -b;
      negative = true;
    } else if (a < 0 && b < 0) {
      a = -a;
      b = -b;
    }
  
    while (b > 0) {
      if (b % 2 === 1) {
        result2 = sum(result, a);
      }
      a = a << 1;
      b = b >> 1;
    }
  
    return negative ? -result2 : result2;
  }
  
  const numbers2 = [2, 3, 4];
  const result2 = multiplyArray(numbers);
  console.log(result2);
  

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
let testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

}