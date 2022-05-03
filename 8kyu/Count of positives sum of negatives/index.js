// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

//    Example
// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
   if (input === null || input.length < 1) {
      return [];
   }
   let result = [];
   let countOfPositivesNumbers = 0;
   let sumOfNegativeNumbers = 0;
   for (let i of input) {
      if (i > 0) {
         countOfPositivesNumbers += 1;
      }
      if (i < 0) {
         sumOfNegativeNumbers += i;
      }
   }
   result[0] = countOfPositivesNumbers;
   result[1] = sumOfNegativeNumbers;
   return result
}