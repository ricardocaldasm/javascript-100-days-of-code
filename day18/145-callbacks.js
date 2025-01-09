function anotherAddEventListener(typeOfEvent, callback) { // callback = f (event)
  var eventThatHappened = {
    eventType: "keypress",
    key: "p",
    durationOfKeypress: 2,
  };

  if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
  }
}

anotherAddEventListener("keypress", function (event) {
  console.log(event);
});

//w3schools exemple 1

function myDisplay(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplay(result);

//w3schools exemple 2

function myDisplay2(some) {
  document.getElementById("demo2").innerHTML = some;
}

function myCalculator2(num1, num2) {
  let sum = num1 + num2;
  myDisplay2(sum);
}

myCalculator2(5, 5);

//w3schools exemple 3

function myDisplay3(some) {
  // myDisplay3 is a callback function
  document.getElementById("demo3").innerHTML = some;
}

function myCalculator3(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator3(5, 5, myDisplay3); // myDisplay3 is passed to myCalculator() as an argument.
