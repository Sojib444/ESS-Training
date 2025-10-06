"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
function Decorator(constructor) {
    console.log("MyDecorator called on:", constructor);
}
let MyClass = class MyClass {
    constructor() {
        console.log("MyClass instance created");
    }
};
MyClass = __decorate([
    Decorator,
    __metadata("design:paramtypes", [])
], MyClass);
function addToStr(target) {
    target.prototype.toString = function () {
        return JSON.stringify(this);
    };
}
let Prsn = class Prsn {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
Prsn = __decorate([
    addToStr,
    __metadata("design:paramtypes", [String, Number])
], Prsn);
const p = new Prsn("Geek", 30);
console.log(p.toString()); // Output: {"name":"Geek","age":30}
const instCol = [];
function collectInsts(target) {
    const origCtor = target.prototype;
    function newCtor(...args) {
        const inst = new origCtor(...args);
        instCol.push(inst);
        return inst;
    }
    newCtor.prototype = origCtor.prototype;
    return newCtor;
}
let Person = class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
Person = __decorate([
    collectInsts,
    __metadata("design:paramtypes", [String, Number])
], Person);
const p1 = new Person("Geek", 30);
const p2 = new Person("Geeks", 25);
console.log(instCol);
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
let BugReport = class BugReport {
    type = "report";
    title;
    constructor(t) {
        this.title = t;
    }
};
BugReport = __decorate([
    sealed,
    __metadata("design:paramtypes", [String])
], BugReport);
function reportableClassDecorator(constructor) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}
const bug = new BugReport("Needs dark mode");
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"
// Note that the decorator _does not_ change the TypeScript type
// and so the new property `reportingURL` is not known
// to the type system:
//# sourceMappingURL=index.js.map