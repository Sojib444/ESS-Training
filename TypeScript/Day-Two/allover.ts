let a: number = 1;
let b: number = 2;
let c: number = 3;

console.log(a + b + c); 

type MyType =  10 | 20 | 30;


let d: MyType = 10;

type User = {
    name: string,
    age: number,
    isActive: boolean
}

type Admin = User & {
    role: string
}

const enum Role {
    USER = "user",
    ADMIN = "admin",
    SUPERADMIN = "superadmin"
}

interface IUser {
    address: string
}

interface Iman {
    permanentAddress: string
    getAddress(): string
}


let user: IUser = {
    address: "dhaka"
}

class worker {
    constructor(public name: string, public age: number, public isActive: boolean) {
        this.name = name;
    }
}


class Person extends worker implements IUser, Iman {
    constructor(public address: string, public permanentAddress: string) {
        super("John", 30, true);
        this.address = address;
        this.permanentAddress = permanentAddress;
    }
    
    getAddress(): string {
        return this.address;
    }

    fullAddress(): string {
        return `${this.address}, ${this.permanentAddress}`;
    }

}


function add<T> (a: T, b: T): T {
    return a;
}

class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }
    getAll(): T[] {
        return this.items;
    }
}  


class Data<T extends KEntity, U> extends Repository<T> implements IUser,Iman {
    constructor(public data1: T, public data2: U, public address: string, public permanentAddress: string) {
        super();
        this.data1 = data1;
        this.data2 = data2;
    }
    
    getAddress(): string {
        return this.address;
    }
}

let result = add<number>(1, 2);
console.log(result);


interface IEntity {
  id: number;
}

interface KEntity {
  kid: number;
}

interface User1 extends IEntity, KEntity {
  name: string;
  email: string;
}

class User2 implements KEntity{
    constructor(public kid: number)
    {
        
    }
}

let data = new Data<User2, string>(new User2(12), "hello", "dhaka", "chittagong");

console.log(data.data1.kid);

type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
};
type Article = {
  id: number;
  title: string;
} & Timestamps;
const article: Article = {
  id: 1,
  title: 'Type Aliases in TS',
  createdAt: new Date(),
  updatedAt: new Date(),
};

type HttpHeader = [key: string, value: string];
const authHeader: HttpHeader = ['Authorization', 'Bearer token123'];
const contentType: HttpHeader = ['Content-Type', 'application/json'];
console.log(authHeader[0], contentType);


type Permission = { role: 'admin'; canDelete: true }
  | { role: 'editor'; canDelete: false }
  | { role: 'viewer'; canDelete: false };

  let readonlyNumbers: readonly number[] = [1, 2, 3];


let tuple1: [string, ...number[]];
tuple1 = ['a'];
tuple1 = ['a', 1, 2, 3];

console.log(tuple1)

let tuple2: readonly [string, number];
tuple2 = ['Alice', 64];

type A = { a: string };
type B = { b: number };
let x: A | B; // A or B
let y: A & B; // must both a and b

x = { a: 'Hello' };
x = { b: 32 };
x = { a: 'Hello'};
y = { a: 'Hello', b: 32 };

interface BaseEntity {
  id: number;
  createdAt: Date;
}

interface BaseEntity1 {
  id: number;
  createdAt: Date;
}

interface Prodcut extends BaseEntity,BaseEntity1 {
  name: string;
  price: number;
}


enum Permission1 {
  Read = 1 << 0, // 1
  Write = 1 << 1, // 2
  Execute = 1 << 2, // 4
  Delete = 1 << 3, // 8
  Share = 1 << 4, // 16
}

// generic constraints
function logLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}
logLength('hello'); // string has length
logLength([1, 2, 3]); // array has length
// logLength(42);  number has no length


function print<T extends string | number>(arg: T) {
  console.log(arg);
}
print<string>('Hello');
print<number>(251);

type Shape = { kind: "circle"; radius: number } | { kind: "square"; size: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
    default:
      const _exhaustiveCheck: never = shape; // Error if a new shape is added
      return _exhaustiveCheck;
  }
}



function raiseError(message: string): never {
    throw new Error(message);
}

try
{
raiseError("sdfdsf");
}
catch(err)
{

}


type ApiResponse<T = unknown > = {
  success: boolean;
  data: T;
};

const response: ApiResponse = {
  success: true,
  data: 3,
};

function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

let ans = merge({name:"sojib"},{age:23});
console.log(ans);


function pluck<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
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


type _Person = {
  name: string;
  age: number;
  active: boolean;
}
type Keys = keyof _Person; // "name"|"age"|"active"

const _user = {
  id: 101,
  name: 'Raj',
  isAdmin: true,
};
type UserKeys = keyof typeof _user; // "id"|"name"|"idAdmin"

function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const name = prop(_user, 'name');
const isAdmin = prop(_user, 'isAdmin');



export {};