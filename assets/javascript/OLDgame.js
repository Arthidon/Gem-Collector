// :::: VARIABLES:::::
$(document).ready(function(){

var randomNumber = Math.floor(Math.random() * 120 +1);
console.log(randomNumber)
var gem1 = randomGem();
var gem2 = randomGem();
var gem3 = randomGem();
var gem4 = randomGem();
var gemSum = 0;

var wins = 0;
var loses = 0;
console.log(gem1, gem2, gem3, gem4, wins, loses);
var moose = 5;

document.getElementById('randomNumber').textContent = randomNumber;
document.getElementById('wins').textContent = wins;
document.getElementById('loses').textContent = loses;
console.log($("#gemSum"));
$("#gemSum").text ( "Gem Guess Numer " + gemSum);

function randomGem() {
   var gem = Math.floor(Math.random() * 12 +1);
 return gem;
}

$("#gem1").on("click", function() {
  gemSum = gemSum + gem1;
  console.log(gemSum);
  $("#gemSum").text ( "Gem Guess Numer " + gemSum);
  winLose();
})

$("#gem2").on("click", function() {
    gemSum = gemSum + gem2;
    console.log(gemSum);
    $("#gemSum").text ( "Gem Guess Numer " + gemSum);
    winLose();
})
$("#gem3").on("click", function() {
  gemSum = gemSum + gem3;
  console.log(gemSum);
  $("#gemSum").text ( "Gem Guess Numer " + gemSum);
  winLose();
})

$("#gem4").on("click", function() {
  gemSum = gemSum + gem4;
  console.log(gemSum);
  $("#gemSum").text ( "Gem Guess Numer " + gemSum);
  winLose();
})


function winLose() {
    if(gemSum > randomNumber) {
      loses++;
      alert("You Lose!");
      document.getElementById('loses').textContent = loses;
      reset()
    }
    else if(gemSum === randomNumber){
      wins++;
      alert("You Win!");
      document.getElementById('wins').textContent = wins;
      reset()
    }
}
 function reset(){
  var randomNumber = Math.floor(Math.random() * 120 +1);
  console.log(randomNumber);
  var gem1 = randomGem();
  var gem2 = randomGem();
  var gem3 = randomGem();
  var gem4 = randomGem();
  var gemSum = 0;

 }


})
