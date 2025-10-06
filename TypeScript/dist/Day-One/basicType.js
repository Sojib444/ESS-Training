"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myName = "3";
const score = 5;
const isPaid = true;
// array
const fruits = ["apple", "banana", "guava"];
let hero = [];
hero = [5, 7];
const AllUser = [];
AllUser.push({ name: "Robin", price: 40 });
// object
let obj = {
    user: "robin",
    Id: 3,
    isAdmin: true,
};
// console.log(obj);
let userData = {
    email: "user@email.com",
    isLoggedIn: true,
    userId: 4,
    location: "b.baria",
};
// console.log(userData);
let employee = {
    name: "harry",
    position: "developer",
    salary: 40,
    skills: ["javascript", "react", "next js"],
};
// console.log(employee);
// function
function addNumber(a, b) {
    return a + b;
}
console.log(addNumber(5, 6));
const userInfo = (name) => {
    return `user name is ${name}`;
};
console.log(userInfo("robin"));
//
function createUser(user) {
    console.log(`User Name: ${user.name}, Email: ${user.email}, Logged In: ${user.isLoggedIn}`);
}
createUser({ name: "Robin" });
//
function createCourses() {
    return { name: "react js", price: 3000, isPaid: false };
}
function consoleErr(err) {
    console.log(err);
}
function combine(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(combine(5, 10));
console.log(combine("5", 10));
let value = "Maybe a string?";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
//# sourceMappingURL=basicType.js.map