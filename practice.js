 var secretNumber = 4;
 var guess = prompt("What is your lucky guess");

if(Number(guess) === secretNumber) {
  alert("you got it right");
}
else if(Number(guess) > secretNumber){
  alert("too high number!");
}
else if(Number(guess) < secretNumber){
  alert("too low number!");
}
