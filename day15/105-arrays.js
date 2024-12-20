const prompt = require("prompt-sync")();

var guestList = ["Angela", "Jack", "Pam", "Jason", "Lara", "Jason"];

var guestName = prompt("Name: ");

console.log(guestList.includes(guestName));