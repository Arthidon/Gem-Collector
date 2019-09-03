// :::: VARIABLES:::::
$(document).ready(function(){

  // Initiate game + set random number
  var random = Math.floor(Math.random() * 120 +1);
  var gemSum = 0;

  var wins = 0;
  var losses = 0;

  var gem1 = randomGem();
  var gem2 = randomGem();
  var gem3 = randomGem();
  var gem4 = randomGem();

  document.getElementById('randomNumber').textContent = random;
  document.getElementById('wins').textContent = wins;
  document.getElementById('loses').textContent = losses;
  console.log($("#gemSum"));

  $("#gemSum").text ( "Gem Guess Numer " + gemSum);


// Handle click actions in for loop to DRY out approach
for (i=1; i<=4; i++) {
  
  $("#gem"+i).on("click", function() {
    gemSum = gemSum + gem1;
    $("#gemSum").text("Gem Guess Number " +gemSum);
    winLose(gemSum,random);
  });
}


function randomGem() {
  var gem = Math.floor(Math.random() * 12 +1);
  return gem;
}

function winLose(sum,random) {
    if(sum > 0 && sum > random) {
      losses++;
      document.getElementById('loses').textContent = losses;
      alert("You Lose!");      
      reset();
   
    }
    else if (sum === random){
      wins++;      
      document.getElementById('wins').textContent = wins;
      alert("You Win!");
      reset();

    }
}

function reset() {

  gemSum = 0;
  random = Math.floor(Math.random() * 120 +1);

  document.getElementById('randomNumber').textContent = random; 

  $("#gemSum").text ( "Gem Guess Numer " + gemSum);
}

});
