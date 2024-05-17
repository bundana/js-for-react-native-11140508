/**
 * Task 1
 * Takes an array of numbers as an argument.
 * Returns a new array where each even number is squared and each odd number is tripled.
 * **/
function processArray(arr) {
     return arr.map(num => {
          if (num % 2 === 0) {
               return num * num; // Square the even numbers
          } else {
               return num * 3; // Triple the odd numbers
          }
     });
}

// Usage of processArray(): 
console.log(processArray([1, 2, 3, 4, 5])); // Output: [3, 4, 9, 16, 15]

/**
 * Task 2
 * The function takes two arrays as arguments:
 * - An array of strings.
 * - An array of numbers processed by processArray.
 * • The function modifies each string based on its corresponding number:
 * - Capitalize the entire string if the number is even.
 * - Convert the string to lowercase if the number is odd.
 * **/
export function formatArrayStrings(strings, numbers) {
     return strings.map((str, index) => {
          if (numbers[index] % 2 === 0) {
               return str.toUpperCase(); // Capitalize if number is even
          } else {
               return str.toLowerCase(); // Lowercase if number is odd
          }
     });
}

// Usage of formatArrayStrings:
console.log(formatArrayStrings(['Hello', 'World', 'JavaScript'], processArray([1, 2, 3, 4, 5]))); // Output: [ 'hello', 'WORLD', 'javascript' ]

