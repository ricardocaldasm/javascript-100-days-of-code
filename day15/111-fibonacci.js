function fibonacciGenerator(cont) {
  var fibArray = [];
  for (var i = 0; i < cont; i++) {
    if (i === 0) {
      fibArray.push(0);
    } else if (i === 1) {
      fibArray.push(1);
    } else {
      var sumArray = fibArray[i - 1] + fibArray[i - 2];
      fibArray.push(sumArray);
    }
  }
  return console.log(fibArray);
}

fibonacciGenerator(15);
