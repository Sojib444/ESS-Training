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
var Order = /** @class */ (function () {
    function Order(id, customer, paymentMethod) {
        this.id = id;
        this.customer = customer;
        this.paymentMethod = paymentMethod;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.items = [];
        this.status = OrderStatus.Pending;
    }
    Order.prototype.addItem = function (product, quantity, discount) {
        if (product.stock < quantity) {
            throw new Error("Not enough stock for ".concat(product.name));
        }
        this.items.push({ product: product, quantity: quantity });
        this.touch();
    };
    Order.prototype.getTotal = function () {
        return this.items.reduce(function (total, item) {
            var price = item.product.price * item.quantity;
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
    };
    Order.prototype.pay = function () {
        if (this.status !== OrderStatus.Pending) {
            throw new Error("Order cannot be paid in this status.");
        }
        this.status = OrderStatus.Paid;
        this.touch();
    };
    Order.prototype.ship = function () {
        if (this.status !== OrderStatus.Paid) {
            throw new Error("Order must be paid before shipping.");
        }
        this.status = OrderStatus.Shipped;
        this.touch();
    };
    Order.prototype.cancel = function () {
        if (this.status === OrderStatus.Shipped) {
            throw new Error("Shipped orders cannot be cancelled.");
        }
        this.status = OrderStatus.Cancelled;
        this.touch();
    };
    Order.prototype.getStatus = function () {
        return this.status;
    };
    Order.prototype.touch = function () {
        this.updatedAt = new Date();
    };
    return Order;
}());
// ===== USAGE =====
var user = {
    id: "U1",
    name: "Alice",
    email: "alice@example.com",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
};
var product = {
    id: "P1",
    name: "Laptop",
    price: 1200,
    currency: "USD",
    stock: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
};
var order = new Order("O1", user, PaymentMethod.CreditCard);
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
var BankAccount = /** @class */ (function () {
    function BankAccount(id, type, balance, currency, owner) {
        this.id = id;
        this.type = type;
        this.balance = balance;
        this.currency = currency;
        this.owner = owner;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.transactions = [];
    }
    BankAccount.prototype.deposit = function (amount, description) {
        var value = Number(amount);
        if (value <= 0)
            throw new Error("Deposit must be positive.");
        this.balance += value;
        this.recordTransaction(TransactionType.Deposit, value, description);
    };
    BankAccount.prototype.withdraw = function (amount, description) {
        var value = Number(amount);
        if (value <= 0)
            throw new Error("Withdrawal must be positive.");
        if (value > this.balance)
            throw new Error("Insufficient funds.");
        this.balance -= value;
        this.recordTransaction(TransactionType.Withdrawal, value, description);
    };
    BankAccount.prototype.transferTo = function (target, amount, description) {
        var value = Number(amount);
        if (this.currency !== target.currency) {
            throw new Error("Currency mismatch in transfer.");
        }
        this.withdraw(value, "Transfer to ".concat(target.owner));
        target.deposit(value, "Transfer from ".concat(this.owner));
        this.recordTransaction(TransactionType.Transfer, value, description);
    };
    BankAccount.prototype.getBalance = function () {
        return "".concat(this.balance, " ").concat(this.currency);
    };
    BankAccount.prototype.getTransactions = function () {
        return this.transactions;
    };
    BankAccount.prototype.recordTransaction = function (type, amount, description) {
        var tx = {
            id: "TX-" + Math.random().toString(36).substring(2, 9),
            type: type,
            amount: amount,
            currency: this.currency,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.transactions.push(tx);
        this.touch();
    };
    BankAccount.prototype.touch = function () {
        this.updatedAt = new Date();
    };
    return BankAccount;
}());
// ===== USAGE =====
var acc1 = new BankAccount("A1", AccountType.Savings, 1000, "USD", "Alice");
var acc2 = new BankAccount("A2", AccountType.Checking, 500, "USD", "Bob");
acc1.deposit(200, "Salary");
acc1.withdraw("100", "Groceries"); // using string amount
acc1.transferTo(acc2, 250, "Rent payment");
console.log("Alice Balance:", acc1.getBalance());
console.log("Bob Balance:", acc2.getBalance());
console.log("Alice Transactions:", acc1.getTransactions());
console.log("Bob Transactions:", acc2.getTransactions());
