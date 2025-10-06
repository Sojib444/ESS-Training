"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 🔹 Basic Types
let username = "Alice";
let age = 25;
let isActive = true;
// Array
let scores = [90, 85, 100];
// Tuple (fixed length and types)
let locationCoords = [23.78, 90.41];
function printStatus(status) {
    console.log("Current status:", status);
}
printStatus("approved"); // ✅
// 🔹 Enum
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Editor"] = "EDITOR";
    UserRole["Viewer"] = "VIEWER";
})(UserRole || (UserRole = {}));
let currentRole = UserRole.Admin;
// 🔹 Using everything together
const user1 = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    role: UserRole.Editor,
    status: "pending",
    scores: [95, 88, 92],
    address: {
        city: "Dhaka",
        zip: 1207
    }
};
console.log(user1);
//# sourceMappingURL=basicTypes.js.map