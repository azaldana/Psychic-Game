var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var loses = 0;
var guesses;
var guessedLetters = [];

resetGame();


document.onkeypress = function (event) {
    var letter = event.key.toLocaleLowerCase();
    guessedLetters.push(letter);


    if (letter === computerChoice) {
        wins++;
        alert("You Win!");
        resetGame();

    } else {
        guesses--;

    } if (guesses === 0) {
        loses++;
        alert("You Lost");
        resetGame();

    }

    document.getElementById("win").innerHTML = "Wins: " + wins;
    document.getElementById("lose").innerHTML = "Losses: " + loses;
    document.getElementById("guess").innerHTML = "Guesses Left: " + guesses;
    document.getElementById("guessedLetter").innerHTML = "Your Guesses So Far: " + guessedLetters; 
}


function resetGame() {
    guesses = 9;
    guessedLetters = [];
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("Letter to guess: " + computerChoice);
}
