import {invoice,payment} from "./reports.js"


const myForm : HTMLFormElement  = document.querySelector("form")!
const myType  : HTMLSelectElement  = document.querySelector("#type")!
const recipient : HTMLInputElement  = document.querySelector("#recipient")!
const details : HTMLInputElement  = document.querySelector("#details")!
const amount : HTMLInputElement  = document.querySelector("#amount")!
const purchaseDisplay : HTMLUListElement = document.querySelector(".purchase_display")!



myForm?.addEventListener("submit",function Submit(e:Event){
    e.preventDefault()

    const inv = new invoice(recipient.value,details.value,amount.valueAsNumber)
const pay = new payment(recipient.value,details.value,amount.valueAsNumber)

    let h4=document.createElement("h4")
    h4.innerText = myType.value
    let li = document.createElement("li")
    li.appendChild(h4)
    
    let p=document.createElement("p")
    if (myType.value === "Invoice"){
     p.innerText = inv.format()
    }else{
        p.innerText =pay.format()
    }

    li.appendChild(p)
    purchaseDisplay.appendChild(li)

    myForm.reset()
    })