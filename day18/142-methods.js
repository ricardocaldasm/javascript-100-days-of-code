function BellBoy(name, age, hasWorkPermit, languages) {
  //constructor function - name of the function is capitalized
  this.name = name; //
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitcase = function () {
    // method
    console.log("May I take your suitcase?");
  };
}

var bellBoy1 = new BellBoy("David", 30, true, ["English"]);
bellBoy1.moveSuitcase(); //method needs to use ()
