"use strict";
console.log("hello");
//https://www.typescriptlang.org/docs/
//example one
let handleSum; //this is a signature
handleSum = (a, b) => {
    //it should match the signature
    console.log("The sum is ", a + b);
};
//example two
let calc;
calc = (a, b, c) => {
    if ((c = "sum")) {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calc(5, 7, "sum"));
//example three
let logDetails;
logDetails = (personObj) => {
    console.log(`${personObj === null || personObj === void 0 ? void 0 : personObj.name} is ${personObj === null || personObj === void 0 ? void 0 : personObj.age} years old`);
};
let passObject = { name: "Sunil", age: 26 };
logDetails(passObject);
