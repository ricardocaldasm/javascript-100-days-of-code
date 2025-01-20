const simonGame = {
  buttonColors: ["green", "red", "yellow", "blue"],
  gamePattern: [],
  userClickedPattern: [],
  level: 0,
  started: false,
  sequenceInProgress: false, // Impede cliques durante a sequência

  playSound(name) {
    const gameAudio = new Audio("sounds/" + name + ".mp3");
    gameAudio.play();
  },

  animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(() => {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  },

  showColor(color) {
    $("#" + color).addClass("highlight");
    setTimeout(() => {
      $("#" + color).removeClass("highlight");
    }, 300);
    this.playSound(color);
  },

  showMessage() {
    if (this.level === 5) {
      $("#level-title").text("Amazing! Level " + this.level);
    } else if (this.level === 10) {
      $("#level-title").text("Unstoppable! Level " + this.level);
    } else {
      $("#level-title").text("Level " + this.level);
    }
  },

  startOver() {
    this.level = 0;
    this.gamePattern = [];
    this.started = false;
    this.sequenceInProgress = false;
  },

  previousSequence(sequence, callback) {
    this.sequenceInProgress = true; // Bloqueia cliques
    sequence.forEach((color, index) => {
      setTimeout(() => {
        this.showColor(color);
      }, index * this.getSpeed());
    });

    // Após exibir a sequência, desbloqueia e chama o callback
    setTimeout(() => {
      this.sequenceInProgress = false;
      if (callback) callback();
    }, sequence.length * this.getSpeed());
  },

  getSpeed() {
    return Math.max(1000 - this.level * 50, 200); // Diminui a velocidade com o progresso
  },

  nextSequence() {
    this.userClickedPattern = [];
    this.level++;
    this.showMessage();

    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = this.buttonColors[randomNumber];
    this.gamePattern.push(randomChosenColor);

    setTimeout(() => {
      this.showColor(randomChosenColor);
    }, 500);
  },

  checkAnswer(currentLevel) {
    if (this.gamePattern[currentLevel] === this.userClickedPattern[currentLevel]) {
      if (this.userClickedPattern.length === this.gamePattern.length) {
        setTimeout(() => {
          this.previousSequence(this.gamePattern, this.nextSequence.bind(this));
        }, 1000);
      }
    } else {
      this.playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(() => {
        $("body").removeClass("game-over");
      }, 200);
      $("#level-title").text("Game Over, Press Any Key to Restart");
      this.startOver();
    }
  },
};

// Eventos
$(document).on("keydown", () => {
  if (!simonGame.started) {
    simonGame.started = true;
    simonGame.showMessage();
    simonGame.nextSequence();
  }
});

$(".btn").on("click", function () {
  if (simonGame.sequenceInProgress) return; // Impede cliques durante a sequência

  const userChosenColor = $(this).attr("id");
  simonGame.userClickedPattern.push(userChosenColor);

  simonGame.playSound(userChosenColor);
  simonGame.animatePress(userChosenColor);

  simonGame.checkAnswer(simonGame.userClickedPattern.length - 1);
});
