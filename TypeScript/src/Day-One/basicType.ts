const myName: string = "3";
const score: number = 5;
const isPaid: boolean = true;

// array
const fruits: string[] = ["apple", "banana", "guava"];
let hero: Array<number> = [];
hero = [5, 7];

type User = {
  name: string;
  price: number;
};

const AllUser: User[] = [];
AllUser.push({ name: "Robin", price: 40 });

// object

let obj: {
  user: string;
  Id: number;
  isAdmin: boolean;
} = {
  user: "robin",
  Id: 3,
  isAdmin: true,
};

// console.log(obj);

let userData: {
  email: string;
  isLoggedIn: boolean;
  userId: number;
  location: string;
} = {
  email: "user@email.com",
  isLoggedIn: true,
  userId: 4,
  location: "b.baria",
};

// console.log(userData);

let employee: {
  name: string;
  position: string;
  salary: number;
  skills: string[];
} = {
  name: "harry",
  position: "developer",
  salary: 40,
  skills: ["javascript", "react", "next js"],
};
// console.log(employee);

// function

function addNumber(a: number, b: number): number {
  return a + b;
}
console.log(addNumber(5, 6));

const userInfo = (name: string): string => {
  return `user name is ${name}`;
};
console.log(userInfo("robin"));

//

function createUser(user: {
  name: string;
  email?: string;
  isLoggedIn?: boolean;
}) {
  console.log(
    `User Name: ${user.name}, Email: ${user.email}, Logged In: ${user.isLoggedIn}`
  );
}
createUser({ name: "Robin" });

//

function createCourses(): { name: string; price: number; isPaid: boolean } {
  return { name: "react js", price: 3000, isPaid: false };
}

function consoleErr(err: string): void {
  console.log(err);
}

// function handleErr(err: string): never {
//   throw err;
// }

// handleErr("Something went wrong!");

type StringOrNumber = string | number;

function combine(a: StringOrNumber, b: StringOrNumber) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log(combine(5, 10));
console.log(combine("5", 10));


let value: unknown = "Maybe a string?";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}


