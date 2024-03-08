//explicit types

let character: string;
let age: number;
let isLoggedIn: boolean;

//age = 'one'; //not correct

age = 26;
isLoggedIn = true;
character = "sunil";

//arrays

let newArray: string[] = []; //initialization to an empty array to append

newArray.push("sunil");

//union types (mixed array)

let mixedArray: (string | number | boolean)[] = [];

mixedArray.push(true);
mixedArray.push("bista");
mixedArray.push(26);

console.log("mixed", mixedArray);

//union type for normal variable

let uid: string | number; //no parenthesis required

uid = "onetwothree";
uid = 123;

//objects
let newObject: object;

newObject = { name: "sunil", age: 26 };

newObject = []; //since array is an object

//moreSpecific object declaration

let moreSpecificObject: {
  name: string;
  age: number;
  isLoggedIn: boolean;
};
