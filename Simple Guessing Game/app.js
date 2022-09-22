//Generate a random number
//Give the user the ability to guess
//If they guess and they are wrong, ask them again (hint)
//If they win - say that they won

function guessGame(){
    let randomNr = Math.floor(Math.random() * 11);
    let guess;
     do{
        guess = prompt("Guess a number between 1 and 10");
        if(randomNr > guess)
            console.log('You guessed too low')
        else
            console.log('You guessed too high')
     } while( guess != randomNr)
     document.getElementById("result").innerHTML = "You Won !"
}

guessGame();