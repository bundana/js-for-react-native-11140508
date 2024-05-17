import {formatArrayStrings} from "./arrayManipulation.js";

function createUserProfiles(nameArray, modifiedNameArray) {
    return nameArray.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNameArray[index],
            id: index + 1,
        };
    });
}

const stringArray = ["Mango", "Apple", "Pineapple", "Pear", "Grape"];
const numberArray = [1, 2, 3, 4, 5];
const modifiedNameArray = formatArrayStrings(stringArray, numberArray);
const userProfiles = createUserProfiles(stringArray, modifiedNameArray);
console.log(userProfiles);
// Output :
// [
//     { originalName: 'Mango', modifiedName: 'mango', id: 1 },
//     { originalName: 'Apple', modifiedName: 'APPLE', id: 2 },
//     { originalName: 'Pineapple', modifiedName: 'pineapple', id: 3 },
//     { originalName: 'Pear', modifiedName: 'PEAR', id: 4 },
//     { originalName: 'Grape', modifiedName: 'grape', id: 5 }
// ]
