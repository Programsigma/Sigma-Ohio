let randInt = 0;
let guess = 0 ;
let guessNumTot = 0
let guessNumLocal = 0
let totGameNum = 0
function Skibidi(){ 
    guessNumLocal = 0
    randInt = Math.floor(Math.random()* 100);
    guess = +prompt("Guess a number between 1 and 100: ")
    guessNumTot = guessNumTot + 1
    guessNumLocal = guessNumLocal + 1
    totGameNum = totGameNum + 1
    while(guess !== randInt){
        
         if(guess<=0 || guess>=101){
            guess = +prompt("Not a valid guess, guess must be between 1 and 100")
         }
        else  if(guess>randInt &&  guess<=100){ 
         guess = +prompt("Too High Guess Again")
            console.log(`Guess High ${guess}`)
        guessNumTot = guessNumTot + 1
        guessNumLocal = guessNumLocal + 1
        
        }
        else if(guess<randInt && guess >= 1){
         guess = +prompt("Too Low Guess Again")
             console.log(`Guess low ${guess}`)
        guessNumTot = guessNumTot + 1
         guessNumLocal = guessNumLocal + 1
          console.log(`Guess Number local ${guessNumLocal}`);
        }
       else if (guess == undefined){
            break
        }
        else if (Number.isInteger(guess) == false ){ 
            guess = +prompt("Not a valid input, try again")
        }
        
       
    }
 
    if(guess == randInt){
        console.log("Hooray You Win")
        console.log(`Guess Right ${guess}`)
        guessNumTot = guessNumTot + 1
        guessNumLocal = guessNumLocal + 1
        console.log(`Guesses this game ${guessNumLocal}`);
        console.log(`Guess Average ${guessNumTot/totGameNum}`)
        playAgain = confirm("play again")
        if ( playAgain == true){
            Skibidi()
        } 
        if( playAgain == false){
            console.log ("Thanks for Playing!!")
        }
}
}

Skibidi()