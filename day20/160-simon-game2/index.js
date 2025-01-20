var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

function playSound(name) {
  var gameAudio = new Audio("sounds/" + name + ".mp3");
  gameAudio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

function previousSequence(gamePatternArray, callback) {
  let index = 0;
  const intervalId = setInterval(function () {
    if (index < gamePatternArray.length) {
      $("#" + gamePatternArray[index])
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);
      playSound(gamePatternArray[index]);
      index++;
    } else {
      clearInterval(intervalId);
      if (callback) {
        callback();
      }
    }
  }, 1000);
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
  // console.log(gamePattern);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // console.log("success");
    if (gamePattern.length === userClickedPattern.length) {
      previousSequence(gamePattern, nextSequence);
    }
  } else {
    // console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

$(document).on("keydown", function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    setTimeout(function () {
      nextSequence();
    }, 500);
    started = true;
  } // ! = NOT operator or started = false
});

$(".btn").on("click", function () {
  var userChosenColor = $(this).attr("id");
  // console.log(userChosenColor);
  userClickedPattern.push(userChosenColor);
  // console.log(userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});
