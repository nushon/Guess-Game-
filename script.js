// VARIABLE KEEPING TRACK OF THE NUMBER OF TIMES THE USER PLAYS
let chances = 10;

// FUNCTION GENERATING RANDOM NUMBER 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
  let generatedNumber = getRandomInt(1, 50);
  console.log("This is the generated number", generatedNumber);
  let guess;
  function promptFunction() {
    guess = prompt("What's your guess?");
  }
//   promptFunction();
  console.log(guess);
// FUNCTION GETTING SUGGESTED NUMBER AND COMPARING IF THE PLAYER WON OR NOT 

console.log("Your guess: ", guess);
  let suggestedNumber = 5;
  function getSuggestion() {
    
    if(guess < generatedNumber){
        console.log("This is the suggested number: ", guess);
        console.log("Your guess is too low");
        console.log("The number of chances: ", chances);
        chances--;
        console.log("Remaining chances: ", chances);
        if (chances > 0) {
            // promptFunction();
            getSuggestion();
        }else{
            console.log("You loose. the generated number is: ", generatedNumber);
        }
        
    }
    else if(guess > generatedNumber){
        console.log("This is the suggested number: ", guess);
        console.log("Your guess is too high");
        console.log("The number of chances: ", chances);
        chances--;
        console.log("Remaining chances: ", chances);
        if (chances > 0) {
            // promptFunction();
            getSuggestion();
        }else{
            console.log("You loose. the generated number is: ", generatedNumber);
        }
    }
    else{
        console.log("The game won! and you");
    }
  }
  getSuggestion();