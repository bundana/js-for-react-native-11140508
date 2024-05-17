# Mobile Application Development Assignment 1

**Student ID:** 11140508

## Overview

This assignment consists of four tasks related to array manipulation and user profile creation using JavaScript. Below is a brief explanation of each task:

### Task 1: processArray Function

- **File:** `arrayManipulation.js`
- **Description:** The `processArray` function takes an array of numbers as an argument and returns a new array. In the new array, each even number is squared, and each odd number is tripled.

### Task 2: formatArrayStrings Function

- **File:** `arrayManipulation.js`
- **Description:** The `formatArrayStrings` function takes two arrays as arguments: an array of strings and an array of numbers processed by the `processArray` function. It modifies each string based on its corresponding number, capitalizing the string if the number is even and converting it to lowercase if the number is odd.

### Task 3: createUserProfiles Function

- **File:** `userInfo.js`
- **Description:** The `createUserProfiles` function takes an array of names and an array of modified names (from Task 2). It returns an array of objects, each containing `originalName`, `modifiedName`, and `id` (auto-incremented starting from 1).

## How to Run

1. **Task 1 & 2:**
    - Ensure `arrayManipulation.js` contains the `processArray` and `formatArrayStrings` functions.
    - Example usage:
      ```javascript
      const { processArray, formatArrayStrings } = require('./arrayManipulation');
 
      const numbers = [1, 2, 3, 4, 5];
      const processedNumbers = processArray(numbers);
      console.log(processedNumbers);
 
      const strings = ["hello", "world", "test", "example"];
      const formattedStrings = formatArrayStrings(strings, processedNumbers);
      console.log(formattedStrings);
      ```

2. **Task 3:**
    - Ensure `userInfo.js` contains the `createUserProfiles` function.
    - Example usage:
      ```javascript
      const { createUserProfiles } = require('./userInfo');
 
      const names = ["Alice", "Bob", "Charlie", "David"];
      const modifiedNames = ["ALICE", "BOB", "charlie", "david"];
      const profiles = createUserProfiles(names, modifiedNames);
      console.log(profiles);
      ```
 