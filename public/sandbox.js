"use strict";
//function
let handleGreet;
handleGreet = () => {
    console.log("Hello, This is Sunil");
};
//let handleAddition: Function;
let handleAddition = (a, b, c = 10) => {
    console.log(a + b);
};
handleAddition(10, 20);
