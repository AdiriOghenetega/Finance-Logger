export class invoice {
    constructor(a, b, c) {
        this.recipient = a;
        this.detail = b;
        this.amount = c;
    }
    format() {
        return `${this.recipient} owes $${this.amount} for ${this.detail}`;
    }
}
export class payment {
    constructor(a, b, c) {
        this.recipient = a;
        this.detail = b;
        this.amount = c;
    }
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.detail}`;
    }
}
