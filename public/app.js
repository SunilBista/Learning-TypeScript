import { Invoice } from "./classes/invoice.js";
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
