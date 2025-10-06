function Decorator(constructor: Function) {
    console.log("MyDecorator called on:", constructor);
}

@Decorator
class MyClass {
    constructor() {
        console.log("MyClass instance created");
    }
}


function addToStr(target: Function) {
    target.prototype.toString = function () {
        return JSON.stringify(this);
    };
}


@addToStr
class Prsn {
    constructor(public name: string, public age: number) { }
}

const p = new Prsn("Geek", 30);
console.log(p.toString()); // Output: {"name":"Geek","age":30}


const instCol: any[] = [];

function collectInsts(target: Function) {
    const origCtor = target.prototype;

    function newCtor(...args: any[]) {
        const inst = new origCtor(...args);
        instCol.push(inst);
        return inst;
    }

    newCtor.prototype = origCtor.prototype;

    return newCtor as any;
}

@collectInsts
class Person {
    constructor(public name: string, public age: number) { }
}

const p1 = new Person("Geek", 30);
const p2 = new Person("Geeks", 25);

console.log(instCol);


function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}


function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
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
