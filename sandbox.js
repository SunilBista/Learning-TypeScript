//explicit types
var character;
var age;
var isLoggedIn;
//age = 'one'; //not correct
age = 26;
isLoggedIn = true;
character = "sunil";
//arrays
var newArray = []; //initialization to an empty array to append
newArray.push("sunil");
//union types (mixed array)
var mixedArray = [];
mixedArray.push(true);
mixedArray.push("bista");
mixedArray.push(26);
console.log("mixed", mixedArray);
//union type for normal variable
var uid; //no parenthesis required
uid = "onetwothree";
uid = 123;
//objects
var newObject;
newObject = { name: "sunil", age: 26 };
newObject = []; //since array is an object
//moreSpecific object declaration
var moreSpecificObject;
