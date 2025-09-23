// ===== ENUMS =====
// Order status enum
enum OrderStatus {
  Pending = "PENDING",
  Paid = "PAID",
  Shipped = "SHIPPED",
  Cancelled = "CANCELLED",
}

// Payment method enum
enum PaymentMethod {
  CreditCard = "CREDIT_CARD",
  PayPal = "PAYPAL",
  CashOnDelivery = "COD",
}

// ===== TYPE ALIASES =====
type Currency = "USD" | "EUR" | "BDT";
type ProductID = string;
type UserID = string;

// Union: A discount can be a percentage or a fixed amount
type Discount = { type: "PERCENT"; value: number } | { type: "FIXED"; value: number };

// Intersection: Audit info for entities
type Auditable = {
  createdAt: Date;
  updatedAt: Date;
};

// ===== INTERFACES =====
interface Product extends Auditable {
  id: ProductID;
  name: string;
  price: number;
  currency: Currency;
  stock: number;
}

interface User extends Auditable {
  id: UserID;
  name: string;
  email: string;
  isActive: boolean;
}

// Order Line Item
interface OrderItem {
  product: Product;
  quantity: number;
  discount?: Discount;
}

// ===== CLASS IMPLEMENTATIONS =====
class Order implements Auditable {
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();
  private items: OrderItem[] = [];
  private status: OrderStatus = OrderStatus.Pending;

  constructor(
    public id: string,
    public customer: User,
    public paymentMethod: PaymentMethod
  ) {}

  addItem(product: Product, quantity: number, discount?: Discount) {
    if (product.stock < quantity) {
      throw new Error(`Not enough stock for ${product.name}`);
    }
    this.items.push({ product, quantity});
    this.touch();
  }

  getTotal(): number {
    return this.items.reduce((total, item) => {
      let price = item.product.price * item.quantity;

      if (item.discount) {
        if (item.discount.type === "PERCENT") {
          price -= (price * item.discount.value) / 100;
        } else {
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

  getStatus(): OrderStatus {
    return this.status;
  }

  private touch() {
    this.updatedAt = new Date();
  }
}

// ===== USAGE =====
const user: User = {
  id: "U1",
  name: "Alice",
  email: "alice@example.com",
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const product: Product = {
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
enum AccountType {
  Savings = "SAVINGS",
  Checking = "CHECKING",
  Credit = "CREDIT",
}

enum TransactionType {
  Deposit = "DEPOSIT",
  Withdrawal = "WITHDRAWAL",
  Transfer = "TRANSFER",
}

// ===== TYPE ALIASES =====
type AccountID = string;
type TransactionID = string;

// Union: Amount can be a number or string
type Amount = number | `${number}`;

// ===== INTERFACES =====
interface Transaction extends Auditable {
  id: TransactionID;
  type: TransactionType;
  amount: number;
  currency: Currency;
  description?: string;
}

interface Account extends Auditable {
  id: AccountID;
  type: AccountType;
  balance: number;
  currency: Currency;
  owner: string;
}

// ===== CLASS IMPLEMENTATIONS =====
class BankAccount implements Account {
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();
  private transactions: Transaction[] = [];

  constructor(
    public id: AccountID,
    public type: AccountType,
    public balance: number,
    public currency: Currency,
    public owner: string
  ) {}

  deposit(amount: Amount, description?: string) {
    const value = Number(amount);
    if (value <= 0) throw new Error("Deposit must be positive.");

    this.balance += value;
    this.recordTransaction(TransactionType.Deposit, value, description);
  }

  withdraw(amount: Amount, description?: string) {
    const value = Number(amount);
    if (value <= 0) throw new Error("Withdrawal must be positive.");
    if (value > this.balance) throw new Error("Insufficient funds.");

    this.balance -= value;
    this.recordTransaction(TransactionType.Withdrawal, value, description);
  }

  transferTo(target: BankAccount, amount: Amount, description?: string) {
    const value = Number(amount);
    if (this.currency !== target.currency) {
      throw new Error("Currency mismatch in transfer.");
    }

    this.withdraw(value, `Transfer to ${target.owner}`);
    target.deposit(value, `Transfer from ${this.owner}`);

    this.recordTransaction(TransactionType.Transfer, value, description);
  }

  getBalance(): string {
    return `${this.balance} ${this.currency}`;
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  private recordTransaction(type: TransactionType, amount: number, description?: string) {
    const tx: Transaction = {
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

  private touch() {
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
