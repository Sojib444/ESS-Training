"use strict";
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
    return function (target, propertyKey, descriptor) {
        console.log("first(): called");
    };
}
function second() {
    console.log("second(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("second(): called");
    };
}
class ExampleClass {
    method() { }
}
__decorate([
    first(),
    second(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExampleClass.prototype, "method", null);
//# sourceMappingURL=classDecorator.js.map