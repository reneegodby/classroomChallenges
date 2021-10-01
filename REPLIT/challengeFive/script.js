//function named in html to do all the things

function guessNumber() {

  //A randomly generated number from 1 to 10  
  let randomNumber = Math.floor(Math.random() * 10) + 1; //the + 1 makes it so its not 0
  console.log(randomNumber);

  //loop to give 3 tries
  for (let tries = 1; tries <= 3; tries++) {

    //An entry for the user to guess a number between 1 and 10
    let userGuess = prompt("Please enter a number between 1 and 10");
    console.log(userGuess);

    //A procedure to check whether the user's answer is correct
    if (userGuess < randomNumber) {
      alert("Too Low!");
    } else if (userGuess > randomNumber) {
      alert("Too High!");
    } else if (userGuess == randomNumber) {
      alert("Congratulations! You guessed right!");
      break;
    } if (tries == 3) {       //A guess count, so there is a win/lose condition 
      alert("You lose, try again?");
    } if (typeof(userGuess) == 'string') {
      alert("Type in an interger please");
    } else {
      alert("Error");
    }
  }

}

//parseInt would be useful here had I used an input tag instead of an alert.