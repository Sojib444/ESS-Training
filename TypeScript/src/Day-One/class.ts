interface IBorrowAble {
  borrow(): void;
  returnItem(): void;
  getDetails(): void;
}

interface IUser {
  name: string;
  borrowItem(item: IBorrowAble): void;
  returnItem(item: IBorrowAble): void;
}

abstract class LibraryItem implements IBorrowAble {
  protected title: string;
  protected author: string;
  private isAvailable: boolean;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} has been borrowed`);
    } else {
      console.log(`${this.title}  currently unavailable`);
    }
  }

  public returnItem(): void {
    this.isAvailable = true;
    console.log(`${this.title} has  been return`);
  }

  public abstract getDetails(): void;
}

class LibraryUser implements IUser {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public borrowItem(item: IBorrowAble): void {
    console.log(`${this.name} is borrowing an item`);
    item.borrow();
  }

  public returnItem(item: IBorrowAble): void {
    console.log(`${this.name} is returning item`);
    item.returnItem();
  }
}

class Book extends LibraryItem {
  private genre: string;

  constructor(title: string, author: string, genre: string) {
    super(title, author);
    this.genre = genre;
  }

  public getDetails(): void {
    console.log(`${this.title} by ${this.author} [Genre: ${this.genre}]`);
  }
}

class DVD extends LibraryItem {
  private duration: number;

  constructor(title: string, author: string, duration: number) {
    super(title, author);
    this.duration = duration;
  }
  public getDetails(): void {
    console.log(
      `DVD: ${this.title} by ${this.author} [Duration: ${this.duration}]`
    );
  }
}

const book1 = new Book("Atomic Habits", "james clark", "self-help");
const dvd1 = new DVD("Inception", "Nolan", 148);

book1.getDetails();
book1.borrow();
book1.returnItem();

dvd1.getDetails();
dvd1.borrow();

//
const user = new LibraryUser("Robin");
user.borrowItem(book1);
user.returnItem(book1);

// Healthcare: Patient Management System

interface iPerson {
  name: string;
  age: number;
  getDetails(): string;
}

abstract class Patient implements iPerson {
  name: string;
  age: number;
  private medicalHistory: string[];

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.medicalHistory = [];
  }

  public addHistory(entry: string): void {
    this.medicalHistory.push(entry);
  }

  public getDetails(): string {
    return `${this.name}, age: ${this.age}`;
  }

  public abstract getInsuranceInfo(): string;
}

class InsuredPatient extends Patient {
  private insuranceProvider: string;

  constructor(name: string, age: number, provider: string) {
    super(name, age);
    this.insuranceProvider = provider;
  }

  public getInsuranceInfo(): string {
    return `Insured by ${this.insuranceProvider}`;
  }
}

const Patient1 = new InsuredPatient("henry", 40, "blueberry");
Patient1.addHistory("Flue in 2020");
Patient1.addHistory("fractured arm in");
console.log(Patient1.getDetails());
console.log(Patient1.getInsuranceInfo);

// E-Commerce: Order Processing System

interface iOrder {
  orderId: string;
  process(): void;
}
abstract class Order implements iOrder {
  orderId: string;
  items: string[];

  constructor(orderId: string, items: string[]) {
    this.orderId = orderId;
    this.items = items;
  }

  public abstract process(): void;
}

class onlineOrder extends Order {
  private paymentMethod: string;
  constructor(orderId: string, items: string[], paymentMethod: string) {
    super(orderId, items);
    this.paymentMethod = paymentMethod;
  }

  public process(): void {
    console.log(
      `Processing online order ${this.orderId} with ${this.paymentMethod}`
    );
  }
}

const orders: onlineOrder[] = [
  new onlineOrder("ORD101", ["Phone"], "PayPal"),
  new onlineOrder("ORD102", ["Tablet", "Charger"], "Debit Card"),
  new onlineOrder("ORD103", ["Headphones"], "Credit Card")
];

// Process all orders
orders.forEach(order => order.process());