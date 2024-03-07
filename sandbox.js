var character = "mario";
console.log(character);
console.log("luigi");
var inputs = document.querySelectorAll("input");
console.log("inputs", inputs);
inputs.forEach(function (input) {
    console.log("input", input);
});
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log("circle", circ(12));
