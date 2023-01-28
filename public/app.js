import { invoice, payment } from "./reports.js";
const myForm = document.querySelector("form");
const myType = document.querySelector("#type");
const recipient = document.querySelector("#recipient");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const purchaseDisplay = document.querySelector(".purchase_display");
myForm === null || myForm === void 0 ? void 0 : myForm.addEventListener("submit", function Submit(e) {
    e.preventDefault();
    const inv = new invoice(recipient.value, details.value, amount.valueAsNumber);
    const pay = new payment(recipient.value, details.value, amount.valueAsNumber);
    let h4 = document.createElement("h4");
    h4.innerText = myType.value;
    let li = document.createElement("li");
    li.appendChild(h4);
    let p = document.createElement("p");
    if (myType.value === "Invoice") {
        p.innerText = inv.format();
    }
    else {
        p.innerText = pay.format();
    }
    li.appendChild(p);
    purchaseDisplay.appendChild(li);
    myForm.reset();
});
