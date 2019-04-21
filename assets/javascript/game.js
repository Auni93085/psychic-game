// store userguess-text into variable userGuess
var userGuess = document.getElementById('userguess-text');
// store number of wins into variable winstext
var winstext = document.getElementById("wins-text");
// store number of losses into variable lossestext
var lossestext = document.getElementById("losses-text")
// start the count for number of wins, losses and guesses left
// open an empty array for guesses by user. stored in variable guess.
var wins = 0
var losses = 0
var guessesLeft = 10
var guess = []

// assign each letter of the alphabet into variable computerChoices
var computerChoices = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

console.log (computerChoices);

// when the user pushes a letter key, their selection is stored in variable userGuess
document.onkeyup = function(event) {
    var userGuess = event.key;
// picks a random letter from the array computerChoices
    var computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
        console.log (computerChoice);
// list of options user can guess stored in array userChoices
    var userChoices = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

// if user guess is any string greater then index of 0 in userChoices array, check for conditions
    if (userChoices.indexOf(userGuess) > -1) {
// if user guess is equal to computer choice, increase the wins tally by 1, reset guess array to empty,
//reset guessesLeft to 10
        if (userGuess === computerChoice) {
            wins++;
            guessesLeft = 10;
            guess = [];
            console.log("winner")
        }

// if user guess is not equal to the computer choice, decrease the number of guesses left by 1
// add the wrong guess to the guess array
        if (userGuess != computerChoice) {
            guessesLeft --;
            guess.push(userGuess);
            console.log("loser")
        }

// when guessesLeft is equal to 0, increment losses tally by one, reset the the guesses array to empty and reset 
// guessesLeft back to 10
        if (guessesLeft === 0) {
            guessesLeft = 10
            losses ++;
            guess = [];
        }

// overwrite original content in the "game" id to update and track of game tallies 
        var html = 
        "<p>Wins: </p>" +
        wins +
        "<p>Losses: </p>"  + 
        losses + 
        "<p>Guesses Left: </p>" +
        guessesLeft +
        "<p>Your Guesses so far: </p>" +
        guess.join(", ");
        document.querySelector("#game").innerHTML = html;
    }

}


