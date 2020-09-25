/**
 * Part 1
 * Create a function that receives 2 strings. It will print which is the longest (or if they're equal).
 * Example: "Coconut" is longer than "house" 
 * If a parameter is not a string, print an error instead. Call it several times.
 */
console.log("EXERCISE 1 - PART 1");

function compareStrings(one, two) {
    let comparation = one.length - two.length;
    switch (true) {
        case comparation > 0:
            console.log(one);
            break;
        case comparation == 0:
            console.log("Same length");
            break;
        case comparation < 0:
            console.log(two);
            break;
        default:
            break;
    }
}

compareStrings("Hello", "Sea");
compareStrings("Sun", "Map");
compareStrings("Compass", "Tree");

/**
 * Part 2
 * Create an array with different value types (number, boolean, string, ...).
 * Create another array that has values from the first one converted to numbers (don't use parseInt or parseFloat)
 * but not the ones that couldn't be converted (NaN). 
 * Don't use for, foreach, or while loop. Instead use array methods like map and filter. Print the resulting array 
 */
console.log("EXERCISE 1 - PART 2");

let values = [4, "Hello", true, 4.9];
let numberValues = values
    .map(n => Number(n))
    .filter(n => !isNaN(n));

console.log(numberValues);

/**
 * Part 3
 * Create a function that receives 3 parameters with default values (product -> "Generic product",
 * price -> 100, tax 21). Convert the product's name to a string and the other 2 parameters to numbers.
 * If price or tax cannot be converted to number, show an error.
 * Call this function several times, omitting parameters or sending not numeric values.
 */
console.log("EXERCISE 1 - PART 3");

function calculateValue(product = "Generic product", price = 100, tax = 21) {
    product = String(product);
    price = Number(price);
    tax = Number(tax);

    if (isNaN(price) || isNaN(tax)) {
        console.log("Price or tax cannot be converted to number");
    } else {
        console.log(`${product} costs ${price * (1 + tax / 100)} with ${price} being the base price and ${tax} being the tax`);
    }

}

calculateValue("Coffe", 5.2, 15);
calculateValue("Cake");
calculateValue("Pancakes", 5.2);

/**
 * Part 4
 * Create an array with 4 values and do the following (use the correct array methods).
 * Add 2 elements at the beginning
 * Add 2 more at the end.
 * Delete positions 3,4 and 5
 * Insert 2 elements before the last element.
 * On each change, show the resulting array with its elements separated by '=>' (don't use any loop).
 */
console.log("EXERCISE 1 - PART 4");

let numbers = [4, 9, 8, 6];
console.log(numbers.join(" => "));
numbers.unshift(10, 15);
console.log(numbers.join(" => "));
numbers.push(13, 48);
console.log(numbers.join(" => "));
numbers.splice(3, 3);
console.log(numbers.join(" => "));
numbers.splice(values.length - 2, 0, 7, 3);
console.log(numbers.join(" => "));

/**
 * Part 5
 * Create an array with several strings. Using the reduce method, return a string
 * that is a concatenation of the first letter of every string in the array.
 */

console.log("EXERCISE 1 - PART 5");

let strings = ["Hello", "Cookie", "Download", "Upload", "Screen", "Controller"];

let concatenatedString = strings.reduce((concatenation, word) => concatenation + word[0], "");
console.log(concatenatedString);

/**
 * Part 6
 * Create an array with several strings. Using the reduce method, return the total length of all the strings.
 */
console.log("EXERCISE 1 - PART 6");

strings = ["Hello", "Cookie", "Download", "Upload", "Screen", "Controller"];
console.log(strings.map(w => w.length).reduce((totalLength, length) => totalLength + length));

/**
 * Part 7
 * Create a function that receives an array as a parameter and destructure the first three elements
 * in the function declaration's parameters. They will have default values of 1, 2 and 3 if any of those
 * positions is empty. Show what you've received in the function's body.
 * Call that function several times with numeric arrays (you can use an empty array)
 */
console.log("EXERCISE 1 - PART 7");

function destructure([n1 = 1, n2 = 2, n3 = 3]) {
    console.log("Numbers: " + n1 + " " + n2 + " " + n3);
}

let numbersDestructuration = [4, 9, 7];
destructure(numbersDestructuration);
numbersDestructuration = [4];
destructure(numbersDestructuration);
numbersDestructuration = [4, 9];
destructure(numbersDestructuration);
numbersDestructuration = [];
destructure(numbersDestructuration);

/**
 * Part 8
 * Create a funcion that can receive as many numbers as you want by parameter. Use rest to group them in
 * an array and print the ones that are even and the ones that arre odd separately. 
 * Call this function several times with different values.
 */
console.log("EXERCISE 1 - PART 8");

function groupNumbers(...values) {
    let evenValues = values.filter(n => n % 2 == 0);
    let oddValues = values.filter(n => n % 2 != 0);
    console.log("Even numbers: ");
    console.log(evenValues.join(" - "));
    console.log("Odd numbers: ");
    console.log(oddValues.join(" - "));
}

groupNumbers(1, 9, 8, 7, 15, 32, 48, 16, 15, 39);
groupNumbers(10, 10, 10, 10, 10, 10, 10);
groupNumbers(11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0);

/**
 * Part 9
 * Create a Map object. The key will be a student name, and the value an array with all his/her exam marks.
 * Iterate through the Map and show each student's name, the marks separated by '-' and the average mark (with 2 decimals).
 * Example: Peter (7.60 - 2.50 - 6.25 - 9.00). Average: 6.34
 */
console.log("EXERCISE 1 - PART 9");

let students = new Map();
students.set("Peter", [7.603, 2.50, 6.255, 9.020]);
students.set("Luis", [4.819, 5.364, 7.48, 8.45]);

students.forEach((marks, student) => {
    marks = marks.map(m => m.toFixed(2));
    console.log(`${student} (${marks.join(" - ")})`);
})

/**
 * Create a function that receives an array, deletes its duplicated values and prints them.
 * Create a Set object to delete the duplicated values.
 */
console.log("EXERCISE 1 - PART 10");

function deleteDuplicatedItems(values) {
    let set = new Set(values);
    return Array.from(set);
}

let uniqueValues = deleteDuplicatedItems([1, 1, 1, 1, 2, 3, 4, 5, 6]);
console.log(uniqueValues.join(" - "));
uniqueValues = deleteDuplicatedItems(["Hello", "Hello", "Cookie", "Cardboard", "Pencil", "Pencil"]);
console.log(uniqueValues.join(" - "));
