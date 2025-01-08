function handleClick() {
  var buttonInnerHTML = this.innerHTML;

  switch (buttonInnerHTML) {
    case "w":
      const audioTom1 = new Audio("sounds/tom-1.mp3");
      audioTom1.play();
      break;

    case "a":
      const audioTom2 = new Audio("sounds/tom-2.mp3");
      audioTom2.play();
      break;

    case "s":
      const audioTom3 = new Audio("sounds/tom-3.mp3");
      audioTom3.play();
      break;

    case "d":
      const audioTom4 = new Audio("sounds/tom-4.mp3");
      audioTom4.play();
      break;

    case "j":
      const audioCrash = new Audio("sounds/crash.mp3");
      audioCrash.play();
      break;

    case "k":
      const audioSnare = new Audio("sounds/snare.mp3");
      audioSnare.play();
      break;

    case "l":
      const audioKickBass = new Audio("sounds/kick-bass.mp3");
      audioKickBass.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }

  //console.log(this);
  // this.style.color = "white";
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
