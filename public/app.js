import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
const form = document.querySelector(".new-item-form"); //typecasting
console.log(form.children);
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template  instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
//Generics
const addUID = (obj) => {
    //generics captures the type of  the properties of an object
    //use extends to
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "Sunil", age: 26 });
console.log("docOne", docOne);
const docThree = {
    uid: 1,
    resourceName: "person",
    data: "shaun",
};
const docFour = {
    uid: 2,
    resourceName: "shopList",
    data: ["bread", "roll"],
};
//tuples
//type of data in each position is fixed once we define is
let tup = ["sunil", 26, true];
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("sunil", "web work", 500);
// docTwo = new Payment("bista", "gas work", 500);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invoiceOne = new Invoice("Sunil", "painting", 100);
// console.log("invoiceOne", invoiceOne.format());
// let invoices: Invoice[] = []; //objects created using the Invoice class
//Interface
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: IsPerson = {
//   name: "sunil",
//   age: 30,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log("i Spent ", amount);
//     return amount;
//   },
// };
// console.log("Me", me);
