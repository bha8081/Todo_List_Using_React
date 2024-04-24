import { compose } from "redux";

// Remove the Space in String.
function removeSpaces(string) {
    return string.split(" ").join("");
}

// Repeat the String.
function repeatString(string) {
    // return string.repeat(2);
    return string + string;
}

// Convert The String In Upper Case.
function convertToUpper(string) {
    return string.toUpperCase();
}

const input = "virat msd warner";

// const output = convertToUpper(repeatString(removeSpaces(input)));

// console.log(output);

// use compose function.
const composedFunction = compose(removeSpaces, repeatString, convertToUpper);
console.log(composedFunction(input));