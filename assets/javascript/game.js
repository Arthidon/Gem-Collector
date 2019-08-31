// Functions
function randomGem() {
  var gem = Math.floor(Math.random() * 12 +1);
return gem;
}

function winLose(gemSum, rand) {
  if(gemSum > rand) {
    loses++;
    alert("You Lose!");
    document.getElementById('loses').textContent = loses;
    reset()
  }
  else if(gemSum === rand){
    wins++;
    alert("You Win!");
    document.getElementById('wins').textContent = wins;
    reset()
  }
}

function reset(){
  var rand = Math.floor(Math.random() * 120 +1);
  var gem1 = randomGem();
  var gem2 = randomGem();
  var gem3 = randomGem();
  var gem4 = randomGem();
  var gemSum = 0;
  console.log(rand, gem1, gem2, gem3, gem4);
  document.getElementById('randomNumber').textContent = rand;
  $("#total").text ( "Gem Guess Numer " + gemSum);
}

// :::: VARIABLES:::::
$(document).ready(function(){

  var rand = Math.floor(Math.random() * 120 +1);
  console.log(rand)
  var gem1 = randomGem();
  var gem2 = randomGem();
  var gem3 = randomGem();
  var gem4 = randomGem();
  var gemSum = 0;

  var wins = 0;
  var loses = 0;
  console.log(gem1, gem2, gem3, gem4, wins, loses);

  document.getElementById('randomNumber').textContent = rand;
  document.getElementById('wins').textContent = wins;
  document.getElementById('loses').textContent = loses;
  console.log($("#gemSum"));
  $("#total").text ( "Gem Guess Numer " + gemSum);

  $("#gem1").on("click", function() {
    gemSum = gemSum + gem1;
    console.log(gemSum);
    $("#total").text ( "Gem Guess Numer " + gemSum);
    winLose(gemSum, rand);
  })

  $("#gem2").on("click", function() {
    gemSum = gemSum + gem2;
    console.log(gemSum);
    $("#total").text ( "Gem Guess Numer " + gemSum);
    winLose(gemSum, rand);
  })
  
  $("#gem3").on("click", function() {
    gemSum = gemSum + gem3;
    console.log(gemSum);
    $("#total").text ( "Gem Guess Numer " + gemSum);
    winLose(gemSum, rand);
  })

  $("#gem4").on("click", function() {
    gemSum = gemSum + gem4;
    console.log(gemSum);
    $("#total").text ( "Gem Guess Numer " + gemSum);
    winLose(gemSum, rand);
  })

})
