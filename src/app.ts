//Interface
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "sunil",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("i Spent ", amount);
    return amount;
  },
};
console.log("Me", me);

import { Invoice } from "./classes/invoice.js";
const invoiceOne = new Invoice("Sunil", "painting", 100);
console.log("invoiceOne", invoiceOne.format());

let invoices: Invoice[] = []; //objects created using the Invoice class

const form = document.querySelector(".new-item-form") as HTMLFormElement; //typecasting

console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
