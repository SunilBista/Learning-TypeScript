const character = "mario";

console.log(character);
console.log("luigi");

const inputs = document.querySelectorAll("input");

console.log("inputs", inputs);

inputs.forEach((input) => {
  console.log("input", input);
});

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log("circle", circ(12));
