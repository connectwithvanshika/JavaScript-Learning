// keep asking under until he enters correct number 
let gamenumber = 25;
let user_guess_number = prompt("Guess the number");

while(user_guess_number != gamenumber){
   user_guess_number =  prompt("Guess again");
}
console.log("You Entered Right Number")