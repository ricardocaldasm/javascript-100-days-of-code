function handleClick() {
  const audio = new Audio("day18/135-drum-kit-starting-files/crash.mp3");
  audio.play();
}

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
// }

document.querySelector(".drum").addEventListener("click", handleClick);
