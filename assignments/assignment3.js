// Q1.
// Initialize an array of names
var arr = ["aarya", "maadhav", "mitansh", "raj", "arlen"];

// Function to capitalize the first letter of each string in the array
const capitalizeString = (arr) => {
    arr.forEach(element => {  
        arr[arr.indexOf(element)] = element.charAt(0).toUpperCase() + element.slice(1, element.length)
    });
    return arr; // Return new array
}

console.log(capitalizeString(arr)); 

// Q2.
// Initialize an array of numbers
var arr1 = [3, 5, 2, 5, 7];

// Function to find the second largest number in the array
const secondLargest = (arr1) => {
    return arr1.sort()[arr1.length - 2];
}

console.log(secondLargest(arr1)); 

// Q3.
// Initialize an array of objects
const obj = [{ name: "Aarya", age: 17 }, { name: "Maadhav", age: 18 }, { name: "Arlen", age: 17 }];
const key = "name"; 
// Function to get values by key from an array of objects
const getValuesById = (obj, key) => {
    let arr = []; // Initialize an empty array to store values
    obj.forEach(element => {
        arr.push([element[key]]); // Push the value corresponding to the key into the array
    });
    return arr; // Return the array of values
}

console.log(getValuesById(obj, key)); 

// Q4.
// Initialize an array of numbers
var arr2 = [1, 2, 3, 4, 5];

// Function to calculate the factorial of each number in the array
const factorialArray = (arr2) => {
    let newArr = []; 
    arr2.forEach(element => {
        let facto = 1; 
        for (let i = 1; i <= element; i++) {
            facto *= i; // Calculating factorial
        }
        newArr.push(facto); // Push the factorial into the new array
    });
    return newArr; // Return the array of factorials
}

console.log(factorialArray(arr2)); 

// Q5.
// Initialize two arrays
const arr3 = [1, 2, 3, 7];
const arr4 = [8, 4, 5, 6];

// Function to find the intersection of two arrays
const intersection = (arr3, arr4) => {
    return arr3.filter(value => arr4.includes(value));
}

console.log(intersection(arr3, arr4)); 
