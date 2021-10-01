// Challenge #1
// Write a function that accepts two names as parameters, and then prints the full name to the console.

// function wholeName(firstName, lastName){
//     return `My first name is ${firstName} and my last name is ${lastName}`;
// }
// console.log(wholeName('Renee', 'Godby'));

function wholeName (firstName, lastName){
    console.log(firstName + ' ' + lastName);
}
wholeName('Renee', 'Godby');

// Challenge #2
// Write a program that prints all numbers from 0-100.
// ‌
// for multiples of 6, instead of the number, print 'Fizz'
// for multiples of 8, instead of the number, print 'Buzz'
// for multiples of 6 AND 8, instead of the number, print 'Fizz Buzz'

    for(let FB = 0; FB <= 100; FB++) {
    if ((FB % 6 === 0) && (FB % 8 === 0)) {
        console.log("Fizz Buzz");
    } else if (FB % 6 === 0) {
        console.log("Fizz");
    } else if (FB % 8 === 0) {
        console.log("Buzz");
    } else {
        console.log(FB);
    };
 }



// Challenge #3
// Write a function called findParameter() that accepts 2 parameters called: "length" and "width".
// ‌
// The function should return an interpolated string of "True. The perimeter is ___" if the perimeter is over 20.
// The function should return an interpolated string of "False. The perimeter is ___" if the perimeter is under 20.
// This function should be active.
// ‌

function findParameter(length, width){
    let perimeterShape = (length * 2) + (width * 2);
    if (perimeterShape > 20){
        return `True. The perimeter is ${perimeterShape}`;
    } else if (perimeterShape < 20){
        return `False. The perimeter is ${perimeterShape}`;
    } else {
        return 'error';
    }
} 

console.log(findParameter(25, 2));

// Challenge #4
// Create an object literal called "library".
// ‌
// The library object will contain 3 properties: name, address, sections.
// Name and address will both hold values that are strings. This information can be fabricated.
// Sections will be an object that will store a property called "collections", which is an array of more objects. You should include at least 2 objects inside the collections array.
// the objects stored in the collections array will hold properties of classification, count, and aisle.
// both the classification and aisle properties should hold strings as values, and count should hold a value that is a number.

let library = {
    name: 'Noblesville Library',
    address: 'Noblesville',
    sections: {
        collections: [
            {classification: 'fantasy', count: 5, aisle: 'non-fiction'},
            {classification: 'adventure', count: 3, aisle: 'fiction'}
         ]
    }
}
console.log(library.sections.collections[0].classification)