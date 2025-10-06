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
// ===== Basic Types =====
var userName = "Alice";
var userAge = 25;
var isActive = true;
var something = "Could be anything";
var notSure = 42;
var nullable = null;
var undef = undefined;
// ===== Enum =====
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Manager"] = "MANAGER";
    UserRole["Customer"] = "CUSTOMER";
})(UserRole || (UserRole = {}));
// ===== Class using Interface and Types =====
var Person = /** @class */ (function () {
    function Person(id, name, role, contact) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.contact = contact;
    }
    // Method demonstrating union narrowing
    Person.prototype.getContact = function () {
        if (this.contact.includes("@")) {
            return "Email: ".concat(this.contact);
        }
        else {
            return "Phone: ".concat(this.contact);
        }
    };
    return Person;
}());
// ===== Another Class Extending =====
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(id, name, role, contact, department, salary) {
        var _this = _super.call(this, id, name, role, contact) || this;
        _this.department = department;
        _this.salary = salary;
        return _this;
    }
    Staff.prototype.describe = function () {
        return "".concat(this.name, " (").concat(this.role, ") works in ").concat(this.department, " with salary $").concat(this.salary);
    };
    return Staff;
}(Person));
// ===== Usage =====
var admin = new Staff(1, "Alice", UserRole.Admin, "alice@example.com", "IT", 90000);
console.log(admin.describe());
console.log(admin.getContact());
