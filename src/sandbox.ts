console.log("hello");

//https://www.typescriptlang.org/docs/

//example one

let handleSum: (a: number, b: number) => void; //this is a signature

handleSum = (a: number, b: number) => {
  //it should match the signature
  console.log("The sum is ", a + b);
};
//example two

let calc: (a: number, b: number, c: string) => number;

calc = (a: number, b: number, c: string) => {
  if ((c = "sum")) {
    return a + b;
  } else {
    return a - b;
  }
};

console.log(calc(5, 7, "sum"));

//example three

let logDetails: (obj: { name: string; age: number }) => void;

logDetails = (personObj: { name: string; age: number }) => {
  console.log(`${personObj?.name} is ${personObj?.age} years old`);
};

logDetails({ name: "Sunil", age: 26 });
