// function addId<T extends { new (...args: any[]): {} }>(target: T) {
//     console.log("Hi this is Sojib");
//   return class extends target {
//     constructor(...args: any[])
//     {
//         super(...args);
//         console.log("Instanc creating time");
//     }
//     id = Math.floor(Math.random() * 1000);
//     address = "Baridhara";
//     name = "Abir";
//   };
// }

// interface UserWithId extends User {
//   id: number;
//   address: string;
// }


// @addId
// class User {
//   constructor(public name: string) {}
// }

// const user : UserWithId = new User("Sojib") as UserWithId;
// // console.log(user.id); // random id
// // console.log(user.address); // random id
// console.log(user.name); // random id


// ///Real world example

// const serviceRegistry: any[] = [];

// function registerService(target: Function) {
//   serviceRegistry.push(target);
//   console.log(`Registered service: ${target.name}`);
// }

// @registerService
// class UserService {}
// @registerService
// class OrderService {}

// console.log(serviceRegistry); // [UserService, OrderService]



function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
    console.log("first(): called");
  };
}
 
function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
    console.log("second(): called");
  };
}
 
class ExampleClass {
  @first()
  @second()
  method() {}
}



export {}

