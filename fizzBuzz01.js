// FIZZ BUZZ CHALLENGE
//    - create a variable named FB that gets initialized with a number
//     - write a conditional that:
//         - prints out "Fizz" if the number is divisible by 3
//         - prints out "Buzz" if the number is divisible by 5
//         - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5

let FB = 15;

//Write the solution using an if/else conditional

//Javascript reads top to bottom
//Once the statement is "True", the logic is executed/ran and JS exits the conditional
//if (statements) { Logic}

if (FB % 3 == 0 && FB % 5 == 0){
    console.log('Fizz Buzz');
} else if (FB % 3 == 0){
    console.log('Fizz');
} else if (FB % 5 == 0){
    console.log('Buzz');
} else {
    console.log(FB);
}

//Write using a Switch Conditional
// Will run without a default case

switch (true) {      //pass the value of true
    case (FB % 3 == 0) && (FB % 5 == 0):
        console.log('Fizz Buzz');
        break;
    case (FB % 3 == 0):
        console.log('Fizz');
        break;
    case (FB % 5 == 0):
        console.log('Buzz');
        break;
    default:
        console.log(FB);
        break;
}

//Write using a Ternary Conditional
    //kind of like a shortcut for If/Else statement
    //always needs to have a default/else catch all, without it, it will throw an error

FB % 3 == 0 && FB % 5 == 0 ?
    console.log('Fizz Buzz') :
FB % 3 == 0 ? 
    console.log('Fizz') : 
FB % 5 == 0 ? 
    console.log('Buzz') : 
    console.log(FB);