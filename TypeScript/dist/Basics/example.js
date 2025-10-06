"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ===== ENUMS =====
// Order status enum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Paid"] = "PAID";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
// Payment method enum
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CreditCard"] = "CREDIT_CARD";
    PaymentMethod["PayPal"] = "PAYPAL";
    PaymentMethod["CashOnDelivery"] = "COD";
})(PaymentMethod || (PaymentMethod = {}));
// ===== CLASS IMPLEMENTATIONS =====
class Order {
    id;
    customer;
    paymentMethod;
    createdAt = new Date();
    updatedAt = new Date();
    items = [];
    status = OrderStatus.Pending;
    constructor(id, customer, paymentMethod) {
        this.id = id;
        this.customer = customer;
        this.paymentMethod = paymentMethod;
    }
    addItem(product, quantity, discount) {
        if (product.stock < quantity) {
            throw new Error(`Not enough stock for ${product.name}`);
        }
        this.items.push({ product, quantity });
        this.touch();
    }
    getTotal() {
        return this.items.reduce((total, item) => {
            let price = item.product.price * item.quantity;
            if (item.discount) {
                if (item.discount.type === "PERCENT") {
                    price -= (price * item.discount.value) / 100;
                }
                else {
                    price -= item.discount.value;
                }
            }
            return total + Math.max(price, 0); // Prevent negative totals
        }, 0);
    }
    pay() {
        if (this.status !== OrderStatus.Pending) {
            throw new Error("Order cannot be paid in this status.");
        }
        this.status = OrderStatus.Paid;
        this.touch();
    }
    ship() {
        if (this.status !== OrderStatus.Paid) {
            throw new Error("Order must be paid before shipping.");
        }
        this.status = OrderStatus.Shipped;
        this.touch();
    }
    cancel() {
        if (this.status === OrderStatus.Shipped) {
            throw new Error("Shipped orders cannot be cancelled.");
        }
        this.status = OrderStatus.Cancelled;
        this.touch();
    }
    getStatus() {
        return this.status;
    }
    touch() {
        this.updatedAt = new Date();
    }
}
// ===== USAGE =====
const user = {
    id: "U1",
    name: "Alice",
    email: "alice@example.com",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
};
const product = {
    id: "P1",
    name: "Laptop",
    price: 1200,
    currency: "USD",
    stock: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
};
const order = new Order("O1", user, PaymentMethod.CreditCard);
order.addItem(product, 1, { type: "PERCENT", value: 10 });
console.log("Order Total:", order.getTotal());
order.pay();
order.ship();
console.log("Order Status:", order.getStatus());
// ===== ENUMS =====
var AccountType;
(function (AccountType) {
    AccountType["Savings"] = "SAVINGS";
    AccountType["Checking"] = "CHECKING";
    AccountType["Credit"] = "CREDIT";
})(AccountType || (AccountType = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["Deposit"] = "DEPOSIT";
    TransactionType["Withdrawal"] = "WITHDRAWAL";
    TransactionType["Transfer"] = "TRANSFER";
})(TransactionType || (TransactionType = {}));
// ===== CLASS IMPLEMENTATIONS =====
class BankAccount {
    id;
    type;
    balance;
    currency;
    owner;
    createdAt = new Date();
    updatedAt = new Date();
    transactions = [];
    constructor(id, type, balance, currency, owner) {
        this.id = id;
        this.type = type;
        this.balance = balance;
        this.currency = currency;
        this.owner = owner;
    }
    deposit(amount, description) {
        const value = Number(amount);
        if (value <= 0)
            throw new Error("Deposit must be positive.");
        this.balance += value;
        this.recordTransaction(TransactionType.Deposit, value, description);
    }
    withdraw(amount, description) {
        const value = Number(amount);
        if (value <= 0)
            throw new Error("Withdrawal must be positive.");
        if (value > this.balance)
            throw new Error("Insufficient funds.");
        this.balance -= value;
        this.recordTransaction(TransactionType.Withdrawal, value, description);
    }
    transferTo(target, amount, description) {
        const value = Number(amount);
        if (this.currency !== target.currency) {
            throw new Error("Currency mismatch in transfer.");
        }
        this.withdraw(value, `Transfer to ${target.owner}`);
        target.deposit(value, `Transfer from ${this.owner}`);
        this.recordTransaction(TransactionType.Transfer, value, description);
    }
    getBalance() {
        return `${this.balance} ${this.currency}`;
    }
    getTransactions() {
        return this.transactions;
    }
    recordTransaction(type, amount, description) {
        const tx = {
            id: "TX-" + Math.random().toString(36).substring(2, 9),
            type,
            amount,
            currency: this.currency,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.transactions.push(tx);
        this.touch();
    }
    touch() {
        this.updatedAt = new Date();
    }
}
// ===== USAGE =====
const acc1 = new BankAccount("A1", AccountType.Savings, 1000, "USD", "Alice");
const acc2 = new BankAccount("A2", AccountType.Checking, 500, "USD", "Bob");
acc1.deposit(200, "Salary");
acc1.withdraw("100", "Groceries"); // using string amount
acc1.transferTo(acc2, 250, "Rent payment");
console.log("Alice Balance:", acc1.getBalance());
console.log("Bob Balance:", acc2.getBalance());
console.log("Alice Transactions:", acc1.getTransactions());
console.log("Bob Transactions:", acc2.getTransactions());
//# sourceMappingURL=example.js.map