"use strict";
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var a = 1;
var b = 2;
var c = 3;
console.log(a + b + c);
var d = 10;
var user = {
    address: "dhaka"
};
var worker = /** @class */ (function () {
    function worker(name, age, isActive) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
        this.name = name;
    }
    return worker;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(address, permanentAddress) {
        var _this = _super.call(this, "John", 30, true) || this;
        _this.address = address;
        _this.permanentAddress = permanentAddress;
        _this.address = address;
        _this.permanentAddress = permanentAddress;
        return _this;
    }
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.fullAddress = function () {
        return "".concat(this.address, ", ").concat(this.permanentAddress);
    };
    return Person;
}(worker));
function add(a, b) {
    return a;
}
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.getAll = function () {
        return this.items;
    };
    return Repository;
}());
var Data = /** @class */ (function (_super) {
    __extends(Data, _super);
    function Data(data1, data2, address, permanentAddress) {
        var _this = _super.call(this) || this;
        _this.data1 = data1;
        _this.data2 = data2;
        _this.address = address;
        _this.permanentAddress = permanentAddress;
        _this.data1 = data1;
        _this.data2 = data2;
        return _this;
    }
    Data.prototype.getAddress = function () {
        return this.address;
    };
    return Data;
}(Repository));
var result = add(1, 2);
console.log(result);
var User2 = /** @class */ (function () {
    function User2(kid) {
        this.kid = kid;
    }
    return User2;
}());
var data = new Data(new User2(12), "hello", "dhaka", "chittagong");
console.log(data.data1.kid);
var article = {
    id: 1,
    title: 'Type Aliases in TS',
    createdAt: new Date(),
    updatedAt: new Date(),
};
var authHeader = ['Authorization', 'Bearer token123'];
var contentType = ['Content-Type', 'application/json'];
console.log(authHeader[0], contentType);
var readonlyNumbers = [1, 2, 3];
var tuple1;
tuple1 = ['a'];
tuple1 = ['a', 1, 2, 3];
console.log(tuple1);
var tuple2;
tuple2 = ['Alice', 64];
var x; // A or B
var y; // must both a and b
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
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.size, 2);
        default:
            var _exhaustiveCheck = shape; // Error if a new shape is added
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
var response = {
    success: true,
    data: 3,
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var ans = merge({ name: "sojib" }, { age: 23 });
console.log(ans);
function pluck(obj, keys) {
    var result = {};
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        result[key] = obj[key];
    }
    return result;
}
var fullUser = {
    id: 42,
    name: 'Raj',
    email: 'raj@gamil.com',
    role: 'mentor',
};
var partial = pluck(fullUser, ['id', 'name']);
console.log(partial);
var _user = {
    id: 101,
    name: 'Raj',
    isAdmin: true,
};
function prop(obj, key) {
    return obj[key];
}
var name = prop(_user, 'name');
var isAdmin = prop(_user, 'isAdmin');
