"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ===== Basic Types =====
let userName = "Alice";
let userAge = 25;
let isActive = true;
let something = "Could be anything";
let notSure = 42;
let nullable = null;
let undef = undefined;
// ===== Enum =====
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Manager"] = "MANAGER";
    UserRole["Customer"] = "CUSTOMER";
})(UserRole || (UserRole = {}));
// ===== Class using Interface and Types =====
class Person {
    id;
    name;
    role;
    contact;
    constructor(id, name, role, contact) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.contact = contact;
    }
    // Method demonstrating union narrowing
    getContact() {
        if (this.contact.includes("@")) {
            return `Email: ${this.contact}`;
        }
        else {
            return `Phone: ${this.contact}`;
        }
    }
}
// ===== Another Class Extending =====
class Staff extends Person {
    department;
    salary;
    constructor(id, name, role, contact, department, salary) {
        super(id, name, role, contact);
        this.department = department;
        this.salary = salary;
    }
    describe() {
        return `${this.name} (${this.role}) works in ${this.department} with salary $${this.salary}`;
    }
}
// ===== Usage =====
const admin = new Staff(1, "Alice", UserRole.Admin, "alice@example.com", "IT", 90000);
console.log(admin.describe());
console.log(admin.getContact());
//# sourceMappingURL=index.js.map