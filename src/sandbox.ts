//function

let handleGreet: Function;
handleGreet = () => {
  console.log("Hello, This is Sunil");
};

//let handleAddition: Function;

let handleAddition = (a: number, b: number, c: number | string = 10) => {
  //generally put optional parameters at the end
  console.log(a + b);
  //return void if nothing returned
};
handleAddition(10, 20);

let handleSubstraction = (a: number, b: number): number => {
  //infer return type explicitly
  return a - b;
};
let result = handleSubstraction(10, 8);
