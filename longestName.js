/*
BRONZE:
Write two variables. One will store your name and another will store a 
friend's name. Find out what property you can use to check how long the 
names are. Console log how many letters are in each name.

SILVER:
Expand on what you have already done and write a conditional to see who 
has the longer name. Using string interpolation console log who's name 
is longer. 

Example Result: My name is longer than Adam's.

GOLD:
In the console log include how many letters difference there are between 
the names.

Example Result: Adam's name is shorter than mine by 4 letters.

There is also one additional case that should be handled that has 
not been mentioned so far. See if you can add that to your conditional!
*/

let myName = "Renee Godby";
let yourName = "Your mom";
console.log (myName.length);
console.log (yourName.length);

if (myName > yourName);
console.log("My Name is longer than your moms")

let longestName = (myName.length - yourName.length);
console.log("Your moms name is shorter than mine by " + longestName + " letters.")

//Bronze 
​
// let myName = "MyName";
// let friendName = "YourName";
// ​
// console.log(myName.length);
// console.log(friendName.length);
// ​
//Silver
​
// if(myName.length > friend.length) {
//     console.log(`My name is longer than ${friend}'s.`)
// } else if(myName.length < friend.length) {
//     console.log(`${friend}'s name is longer than mine.`);
// } else {
//     console.log(`Both ${friend}'s and my name are the same length.`);
// }
​
//Gold
​
// if (myName.length > friend.length) {
//     let diff = myName.length - friend.length;
//     console.log(`My name is longer than ${friend}'s by ${diff} letters.`);
// } else if (myName.length < friend.length) {
//     let diff = friend.length - myName.length;
//     console.log(`${friend}'s name is longer than mine by ${diff} letters.`);
// } else {
//     console.log(`Both ${friend}'s and my name are the same length.`);
// }