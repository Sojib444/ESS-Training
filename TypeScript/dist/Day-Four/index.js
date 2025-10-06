"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return response.json();
}
function fetchUser1() {
    return { a: "sojib" };
}
async function printUser() {
    const user = await fetchUser();
    console.log(user.name); // ✅ Type-safe if we refine the type
}
//# sourceMappingURL=index.js.map