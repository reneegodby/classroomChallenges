/*
FIZZBUZZ LOOP CHALLENGE (pair coding)
************
- write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - prints out the number if none of the above are true.
- create a loop that counts to 100.
- Pass each iteration through a conditional.
- If-else, Switch, Ternary
*/
//If/Else
for (let FB = 0; FB <= 100; FB++) {
    if ((FB % 3 == 0) && (FB % 5 == 0)) {
        console.log("Fizz Buzz");
    } else if (FB % 3 == 0) {
        console.log("Fizz");
    } else if (FB % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(FB);
    };
}
//Switch
for (i = 0; i <= 100; i++) {
    switch (true) {
        case (i % 3 === 0 && i % 5 === 0):
            console.log('Fizz Buzz');
            break;
        case (i % 3 === 0):
            console.log('Fizz');
            break;
        case (i % 5 === 0):
            console.log('Buzz');
            break;
        default:
            console.log(i);
    }
}
//Ternary
for (FB = 0; FB <= 100; FB++) {
    FB % 3 == 0 && FB % 5 == 0 ?
        console.log("Fizz Buzz") :
        FB % 3 == 0 ?
            console.log("Fizz") :
            FB % 5 == 0 ?
                console.log("Buzz") :
                console.log(FB);
}