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
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}

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
