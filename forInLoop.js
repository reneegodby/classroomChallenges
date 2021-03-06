/*
BRONZE:
    - Using a for in loop, console.log the name of each character from 
    the members key in the fellowshipOfTheRing object.
    
SILVER:
    - Add a conditional to the for in loop that checks if the characters 
    name does not begin with a vowel. Then, using string interpolation, 
    console.log either '__'s name does not begin with a vowel' or '__'s 
    name does begin with a vowel'.

GOLD: 
    - Declare a globally scoped variable of arr that is initialized as an 
    empty array. If the characters name does not begin with a vowel, add 
    that character to the new array, and then console.log the array.
*/

let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}


//Bronze
for (characters in fellowshipOfTheRing) {
    // console.log(Object.keys(fellowshipOfTheRing.members));
    console.log(`${characters}: ${fellowshipOfTheRing[characters]}`);
} 



// if (characters.startWith('A', 'E', 'I', 'O', 'U')){
// console.log(`${characters}s name does begin with a vowel`);
// } else{
//     console.log(`${members}s name does not begin with a vowel`)
// }