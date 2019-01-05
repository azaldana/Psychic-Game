var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var loses = 0;
var guesses = 9;
var last = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice)


document.onkeyup = function(event) {
    var userGuess = event.key;
    var last = event.key.toLowerCase();
    
        if(userGuess === computerChoice){
        wins++;
        alert("You Win!"); 

    } else {
        guesses--;
    }
        
      
         if(guesses === 0){
            loses++
            alert("You Lost");
    }

    document.getElementById('win').innerHTML = "Wins: " + wins;
    document.getElementById('lose').innerHTML = "Losses: " + loses;
    document.getElementById('guess').innerHTML = "Guesses Left: " + guesses;
    document.getElementById('last').innerHTML += last;
}
        
    

    
  






