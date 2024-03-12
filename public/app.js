"use strict";
//https://www.typescriptlang.org/docs/
// classes
// class Invoice {
//   client: string;
//   details: string;
//   amount: number;
//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes ${this.amount} for ${this.details}`;
//   }
// }
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice("Sunil", "painting", 100);
console.log("invoiceOne", invoiceOne.format());
let invoices = []; //objects created using the Invoice class
const form = document.querySelector(".new-item-form"); //typecasting
console.log(form.children);
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
