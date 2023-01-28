import { hasFormat } from "./hasFormatted"

export class invoice implements hasFormat {
recipient : string
detail:string
amount:number
constructor(a:string,b:string,c:number){
    this.recipient = a
    this.detail = b
    this.amount = c
}

format(){
    return `${this.recipient} owes $${this.amount} for ${this.detail}`
}
   
}

export class payment  implements hasFormat {
recipient : string
detail:string
amount:number
constructor(a:string,b:string,c:number){
    this.recipient = a
    this.detail = b
    this.amount = c
}

format(){
    return `${this.recipient} is owed $${this.amount} for ${this.detail}`
}
   
}