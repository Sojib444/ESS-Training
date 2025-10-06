"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 1;
let b = 2;
let c = 3;
console.log(a + b + c);
let d = 10;
var Role;
(function (Role) {
    Role["USER"] = "user";
    Role["ADMIN"] = "admin";
    Role["SUPERADMIN"] = "superadmin";
})(Role || (Role = {}));
let user = {
    address: "dhaka"
};
class worker {
    name;
    age;
    isActive;
    constructor(name, age, isActive) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
        this.name = name;
    }
}
class Person extends worker {
    address;
    permanentAddress;
    constructor(address, permanentAddress) {
        super("John", 30, true);
        this.address = address;
        this.permanentAddress = permanentAddress;
        this.address = address;
        this.permanentAddress = permanentAddress;
    }
    getAddress() {
        return this.address;
    }
    fullAddress() {
        return `${this.address}, ${this.permanentAddress}`;
    }
}
function add(a, b) {
    return a;
}
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
class Data extends Repository {
    data1;
    data2;
    address;
    permanentAddress;
    constructor(data1, data2, address, permanentAddress) {
        super();
        this.data1 = data1;
        this.data2 = data2;
        this.address = address;
        this.permanentAddress = permanentAddress;
        this.data1 = data1;
        this.data2 = data2;
    }
    getAddress() {
        return this.address;
    }
}
let result = add(1, 2);
console.log(result);
class User2 {
    kid;
    constructor(kid) {
        this.kid = kid;
    }
}
let data = new Data(new User2(12), "hello", "dhaka", "chittagong");
console.log(data.data1.kid);
const article = {
    id: 1,
    title: 'Type Aliases in TS',
    createdAt: new Date(),
    updatedAt: new Date(),
};
const authHeader = ['Authorization', 'Bearer token123'];
const contentType = ['Content-Type', 'application/json'];
console.log(authHeader[0], contentType);
let readonlyNumbers = [1, 2, 3];
let tuple1;
tuple1 = ['a'];
tuple1 = ['a', 1, 2, 3];
console.log(tuple1);
let tuple2;
tuple2 = ['Alice', 64];
let x; // A or B
let y; // must both a and b
x = { a: 'Hello' };
x = { b: 32 };
x = { a: 'Hello' };
y = { a: 'Hello', b: 32 };
var Permission1;
(function (Permission1) {
    Permission1[Permission1["Read"] = 1] = "Read";
    Permission1[Permission1["Write"] = 2] = "Write";
    Permission1[Permission1["Execute"] = 4] = "Execute";
    Permission1[Permission1["Delete"] = 8] = "Delete";
    Permission1[Permission1["Share"] = 16] = "Share";
})(Permission1 || (Permission1 = {}));
// generic constraints
function logLength(arg) {
    return arg.length;
}
logLength('hello'); // string has length
logLength([1, 2, 3]); // array has length
// logLength(42);  number has no length
function print(arg) {
    console.log(arg);
}
print('Hello');
print(251);
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.size ** 2;
        default:
            const _exhaustiveCheck = shape; // Error if a new shape is added
            return _exhaustiveCheck;
    }
}
function raiseError(message) {
    throw new Error(message);
}
try {
    raiseError("sdfdsf");
}
catch (err) {
}
const response = {
    success: true,
    data: 3,
};
function merge(a, b) {
    return { ...a, ...b };
}
let ans = merge({ name: "sojib" }, { age: 23 });
console.log(ans);
function pluck(obj, keys) {
    const result = {};
    for (const key of keys) {
        result[key] = obj[key];
    }
    return result;
}
const fullUser = {
    id: 42,
    name: 'Raj',
    email: 'raj@gamil.com',
    role: 'mentor',
};
const partial = pluck(fullUser, ['id', 'name']);
console.log(partial);
const _user = {
    id: 101,
    name: 'Raj',
    isAdmin: true,
};
function prop(obj, key) {
    return obj[key];
}
const name = prop(_user, 'name');
const isAdmin = prop(_user, 'isAdmin');
//# sourceMappingURL=allover.js.map