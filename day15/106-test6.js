function whosPaying(names) {

      
      var listLength = names.length;
      var rdmNumber = Math.random()
      var personSelected = Math.floor((listLength * rdmNumber));
      return console.log(names[personSelected] + " is going to buy lunch today! ");
  
  }

  whosPaying(["Ricardo","Gaia","Deborah"]);
  whosPaying(["A", "B","C","D"]);
  whosPaying(["A","B"]);