// // generics with function

// function identity<T>(value: T): T {
//   return value;
// }

// // console.log(identity("robin"));
// const num = identity<number>(42);
// const str = identity<string>("robin");
// const bool = identity(true);

// //
// function firstElement<T>(arr: T[]): T | undefined {
//   return arr.length > 0 ? arr[0] : undefined;
// }

// const number = [1, 2, 34, 4];
// const first = firstElement(numbers);
// console.log(first);

// //
// function getRandomElement<T>(arr: T[]): T {
//   const randomIndex = Math.floor(Math.random() * arr.length);
//   return arr[randomIndex];
// }

// console.log(getRandomElement([1, 2, 4]));

// //

// function mergeObj<T, U>(obj: T, obj2: U): T & U {
//   return { ...obj, ...obj2 };
// }

// const user = mergeObj({ name: "Robin" }, { age: 22 });
// console.log(user);

// // interface/obj with generics

// interface ApiResponse<T> {
//   data: T;
//   status: number;
// }
// const userResponse: ApiResponse<{ name: string; age: number }> = {
//   data: { name: "Robin", age: 22 },
//   status: 200,
// };

// const productResponse: ApiResponse<{ id: number; price: number }> = {
//   data: { id: 1001, price: 500 },
//   status: 200,
// };

// //

// interface keyValue<T> {
//   [key: string]: T;
// }

// const scoreBoard: keyValue<number> = {
//   Robin: 50,
//   Alice: 80,
// };

// const userRole: keyValue<string> = {
//   Robin: "Admin",
//   Shawn: "User",
// };

// //

// interface paginatedResult<T> {
//   items: T[];
//   total: number;
//   page: number;
//   pageSize: number;
// }

// const usersPage: paginatedResult<{ id: number; name: string }> = {
//   items: [
//     { id: 1, name: "Robin" },
//     { id: 2, name: "henry" },
//   ],
//   total: 20,
//   page: 10,
//   pageSize: 40,
// };

// const productPage: paginatedResult<{ id: number; price: number }> = {
//   items: [
//     { id: 3, price: 300 },
//     { id: 4, price: 800 },
//   ],

//   total: 300,
//   page: 40,
//   pageSize: 30,
// };

// //

// interface Repository<T> {
//   add(item: T): void;
//   getAll(): T[];
// }

// function createdRepository<T>(): Repository<T> {
//   const items: T[] = [];

//   return {
//     add(item: T) {
//       items.push(item);
//     },
//     getAll() {
//       return items;
//     },
//   };
// }

// const userRepo = createdRepository<{ id: number; name: string }>();
// userRepo.add({ id: 1, name: "Robin" });
// userRepo.add({ id: 2, name: "shawon" });

// console.log(userRepo.getAll());

// //

// function getLength<T extends { length: number }>(item: T): number {
//   return item.length;
// }

// getLength("hello");

// export {}