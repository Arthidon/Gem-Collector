// Functions
function randomGem() {
  var gem = Math.floor(Math.random() * 12 +1);
return gem;
}

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Win / Lose Conditions
function winLose(gemSum, rand) {
  if(gemSum > rand) {
    loses++;
    alert("You Lose!");
    document.getElementById('loses').textContent = loses;
    
    data = reset();

    var rand = data.rand;
    var gem1 = data.gem1;
    var gem2 = data.gem2;
    var gem3 = data.gem3;
    var gem4 = data.gem4;
    var gemSum = data.gemSum;
  }
  else if(gemSum === rand){
    wins++;
    alert("You Win!");
    $("#wins").text (wins);
   
    data = reset();

    var rand = data.rand;
    var gem1 = data.gem1;
    var gem2 = data.gem2;
    var gem3 = data.gem3;
    var gem4 = data.gem4;
    var gemSum = data.gemSum;
  }
}

function reset(){
  //Reset Variables
  rand = randomNumber(19,120);
  gem1 = randomGem();
  gem2 = randomGem();
  gem3 = randomGem();
  gem4 = randomGem();
  gemSum = 0;
 
  //Logging Values
  console.log("Goal " + rand);
  console.log("Gem1 " + gem1);
  console.log("Gem2 " + gem2);
  console.log("Gem3 " + gem3);
  console.log("Gem4 " + gem4);
  console.log("GemSum " + gemSum);

  $("#randomNumber").text (rand);
  $("#total").text ( "Gem Guess Numer " + gemSum);
  
  return  { rand : rand, gem1 : gem1 , gem2 : gem2, gem3 : gem3, gem4 : gem4, gemSum : gemSum };

}

//Page Load Variables
var data = reset();

var rand = randomNumber(19,120);
var gem1 = data.gem1;
var gem2 = data.gem2;
var gem3 = data.gem3;
var gem4 = data.gem4;
var gemSum = data.gemSum;

var wins = 0;
var loses = 0;

//document.getElementById('randomNumber').textContent = rand;
  //document.getElementById('wins').textContent = wins;
  $("#wins").text(wins);
  $("#loses").text(loses);
  $("#total").text ( "Gem Guess Number " + gemSum);


// :::: VARIABLES:::::
$(document).ready(function(){

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
