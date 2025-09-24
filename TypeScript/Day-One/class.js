var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LibraryItem = /** @class */ (function () {
    function LibraryItem(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
    LibraryItem.prototype.borrow = function () {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log("".concat(this.title, " has been borrowed"));
        }
        else {
            console.log("".concat(this.title, "  currently unavailable"));
        }
    };
    LibraryItem.prototype.returnItem = function () {
        this.isAvailable = true;
        console.log("".concat(this.title, " has  been return"));
    };
    return LibraryItem;
}());
var LibraryUser = /** @class */ (function () {
    function LibraryUser(name) {
        this.name = name;
    }
    LibraryUser.prototype.borrowItem = function (item) {
        console.log("".concat(this.name, " is borrowing an item"));
        item.borrow();
    };
    LibraryUser.prototype.returnItem = function (item) {
        console.log("".concat(this.name, " is returning item"));
        item.returnItem();
    };
    return LibraryUser;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(title, author, genre) {
        var _this = _super.call(this, title, author) || this;
        _this.genre = genre;
        return _this;
    }
    Book.prototype.getDetails = function () {
        console.log("".concat(this.title, " by ").concat(this.author, " [Genre: ").concat(this.genre, "]"));
    };
    return Book;
}(LibraryItem));
var DVD = /** @class */ (function (_super) {
    __extends(DVD, _super);
    function DVD(title, author, duration) {
        var _this = _super.call(this, title, author) || this;
        _this.duration = duration;
        return _this;
    }
    DVD.prototype.getDetails = function () {
        console.log("DVD: ".concat(this.title, " by ").concat(this.author, " [Duration: ").concat(this.duration, "]"));
    };
    return DVD;
}(LibraryItem));
var book1 = new Book("Atomic Habits", "james clark", "self-help");
var dvd1 = new DVD("Inception", "Nolan", 148);
book1.getDetails();
book1.borrow();
book1.returnItem();
dvd1.getDetails();
dvd1.borrow();
//
var user = new LibraryUser("Robin");
user.borrowItem(book1);
user.returnItem(book1);
var Patient = /** @class */ (function () {
    function Patient(name, age) {
        this.name = name;
        this.age = age;
        this.medicalHistory = [];
    }
    Patient.prototype.addHistory = function (entry) {
        this.medicalHistory.push(entry);
    };
    Patient.prototype.getDetails = function () {
        return "".concat(this.name, ", age: ").concat(this.age);
    };
    return Patient;
}());
var InsuredPatient = /** @class */ (function (_super) {
    __extends(InsuredPatient, _super);
    function InsuredPatient(name, age, provider) {
        var _this = _super.call(this, name, age) || this;
        _this.insuranceProvider = provider;
        return _this;
    }
    InsuredPatient.prototype.getInsuranceInfo = function () {
        return "Insured by ".concat(this.insuranceProvider);
    };
    return InsuredPatient;
}(Patient));
var Patient1 = new InsuredPatient("henry", 40, "blueberry");
Patient1.addHistory("Flue in 2020");
Patient1.addHistory("fractured arm in");
console.log(Patient1.getDetails());
console.log(Patient1.getInsuranceInfo);
var Order = /** @class */ (function () {
    function Order(orderId, items) {
        this.orderId = orderId;
        this.items = items;
    }
    return Order;
}());
var onlineOrder = /** @class */ (function (_super) {
    __extends(onlineOrder, _super);
    function onlineOrder(orderId, items, paymentMethod) {
        var _this = _super.call(this, orderId, items) || this;
        _this.paymentMethod = paymentMethod;
        return _this;
    }
    onlineOrder.prototype.process = function () {
        console.log("Processing online order ".concat(this.orderId, " with ").concat(this.paymentMethod));
    };
    return onlineOrder;
}(Order));
var orders = [
    new onlineOrder("ORD101", ["Phone"], "PayPal"),
    new onlineOrder("ORD102", ["Tablet", "Charger"], "Debit Card"),
    new onlineOrder("ORD103", ["Headphones"], "Credit Card")
];
// Process all orders
orders.forEach(function (order) { return order.process(); });
