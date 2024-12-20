var a = 1;
var b = "1";

if (a == b) {
  console.log("yes");
} else {
  console.log("no");
}

if (a === b) {
  console.log("yes");
} else {
  console.log("no");
}

var loveScore = Math.floor(Math.random() * 101);
console.log(loveScore);

if (loveScore >= 70) {
  console.log("Over 70.");
}

if (loveScore >= 30 && loveScore < 70) {
  console.log("Between 30 and 70.");
}

if (loveScore < 30) {
  console.log("Below 30.");
}

var bmiIndex = Math.pow()