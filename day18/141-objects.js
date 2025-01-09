var bellBoy1 = { //variable
  name: "Timmy", //object
  age: 19,
  hasWorkPermit: true,
  languages: ["French", "English"],
};

console.log(bellBoy1);
console.log(bellBoy1.name);

function BellBoy(name, age, hasWorkPermit, languages) { //constructor function - name of the function is capitalized
  this.name = name; //
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}

var bellBoy2 = new BellBoy("Lucas", 21, false, ["English", "Portuguese"]); //creating object
console.log(bellBoy2);
console.log(bellBoy2.name);
