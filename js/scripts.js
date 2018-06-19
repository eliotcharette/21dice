function Player(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}
var turn =0
var currentTurn = 0
var newTotal = new Total();
var player2total = new Total();
var currentHold = 0
var player1

var dice = {
  sides: 6,
  roll: function () {
    var randomNumber =
    Math.floor(Math.random() * this.sides)
    +1;
    if (randomNumber === 5){
      currentHold = 0
    }
    else {
      currentHold += randomNumber;
    }
    return randomNumber;
  }
}
function Total() {
  this.current = 0;
}
function Current() {
  this.currentHold = 0;
}
Total.prototype.totalSave = function(){
  this.current += currentHold;
  turn++
  turnTracker()
}
function turnTracker(){
  if(turn % 2 === 0){
    currentTurn ++
  }
}
var newPlayer = {};
//user interface
$(document).ready(function(){
  $("form#lucky").submit(function(event) {
    event.preventDefault();
    $("#rolls").text(dice.roll());
    $("#hold").text(currentHold);
    if(currentHold ===0){
      $("form#form-hold").submit();
    }
    $("#turnCounter").text(currentTurn)
  });
  $("form#form-hold").submit(function(event) {
    event.preventDefault();
    newTotal.totalSave();
    $("#total").text(newTotal.current);
    win(newPlayer.player1);
    currentHold = 0;
    $("#hold").text(currentHold);
    $("#turnCounter").text(currentTurn)
    $("form#form-hold").toggle();
    $("form#form-hold1").toggle();
    $("form#lucky").toggle();
    $("form#lucky1").toggle();
  });
  $("form#lucky1").submit(function(event) {
    event.preventDefault();
    $("#rolls1").text(dice.roll());
    $("#hold1").text(currentHold);
    if(currentHold ===0){
      $("form#form-hold1").submit();
    }
    $("#turnCounter").text(currentTurn)
  });
  $("form#form-hold1").submit(function(event) {
    event.preventDefault();
    player2total.totalSave();
    $("#total1").text(player2total.current);
    win(newPlayer.player2);
    currentHold = 0;
    $("#hold1").text(currentHold);
    $("#turnCounter").text(currentTurn)
    $("form#form-hold").toggle();
    $("form#form-hold1").toggle();
    $("form#lucky").toggle();
    $("form#lucky1").toggle();
  });
  $("form#reset").submit(function (event) {
    event.preventDefault();
    document.location.reload(true);
  });
//win function
  function win(name){
    if(newTotal.current>=100){
      $("#winner").toggle();
      $(".winner").text("Congratulations " + newPlayer.player1 + " !")
    } else if (player2total.current>=100){
      $("#winner").toggle();
      $(".winner").text("Congratulations " + newPlayer.player2 + " !")
    }
  }
});
