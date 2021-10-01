/*
BRONZE:
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.

SILVER:
Write a conditional that checks the type of one of the values stored 
in the object and console logs the data type. If the value is not a string, 
number, boolean, or object console log 'What are you?!'

*/

let obj={
    string: 'poodle',
    number: 6,
    boolean: true,
    childObject: {
        key: "value",
        key2: "value2"
    }
} 
    console.log(typeof obj.string);
    console.log(typeof obj.childObject);
    console.log(obj.string); //gives the value

let type = typeof obj.string;

if (type === "string"){
    console.log(`${type} is a string!`);
} else if(type === "number"){
    console.log(`${type} is a number.`);
} else if (type === "boolean"){
    console.log(`${type} is a boolean.`);
} else if(type === "object"){
    console.log(`${type} is an object.`);
} else {
    console.log("What even are you?");
}

    





