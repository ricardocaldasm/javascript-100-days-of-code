var buttonColors = ["green", "red", "yellow", "blue"];

var gamePattern = [];

var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
}

$(".btn").on("click", function () {
  var userChosenColor = $(this).attr("id");
  // console.log(userChosenColor);
  userClickedPattern.push(userChosenColor);
  // console.log(userClickedPattern);
  playSound(userChosenColor);
});

function playSound(name) {
  var gameAudio = new Audio("sounds/" + name + ".mp3");
  gameAudio.play();
}

function animatePress(currentColor) { 
}
