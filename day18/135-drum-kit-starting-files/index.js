function handleClick() {
  const audio = new Audio("sounds/crash.mp3");
  audio.play();
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
