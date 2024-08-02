// Q1.
const getKeysAndValues = (person) => {
    // Initializing an empty array
    let arr = [];
    // Loop through each key in the person object
    for (let i = 0; i < Object.keys(person).length; i++) {
        // Push an array containing the key and its corresponding value to the arr array
        arr.push([Object.keys(person)[i], person[Object.keys(person)[i]]]);
    }
    // Return the array of key-value pairs
    return arr;
}

// Define a person object with name and age properties
var person = {
    name: "John",
    age: 30
}

// Calling the function
console.log(getKeysAndValues(person));


// Q2.
const toTitleCase = (str) => {
    // Initialization an empty strin
    let newStr = '';
    // Split the string into words and loop through each word
    for (let i = 0; i < str.split(' ').length; i++) {
        // Convert the first character of each word to uppercase and concatenate it with the rest of the word
        newStr += str.split(' ')[i].charAt(0).toUpperCase() + str.split(' ')[i].slice(1, str.split(' ')[i].length) + ' ';
    }
    return newStr
}

// Calling the function
console.log(toTitleCase("hello world"));


// Q3.
const isEmpty = (obj) => {
    // Check if the object is empty
    if (Object.keys(obj).length == 0) {
        console.log("Object is empty");
    } else {
        console.log("The object is not empty");
    }
}

// Decleration of an empty object
let obj = {};

// Calling the function
isEmpty(obj);


// Q4.
const charCount = (str) => {
    str = str.toLowerCase();
    // Initialize an empty object
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        // Check if the character is already a key in the object
        if (str[i] in obj) {
            // Increment the count for the character
            obj[str[i]] += 1;
        } else {
            // Add the character as a key with a count of 1
            obj[str[i]] = 1;
        }
    }
    // Return the object containing character counts
    return obj;
}

// Calling the function
console.log(charCount("hello"));
