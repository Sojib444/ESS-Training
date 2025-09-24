// 🔹 Basic Types
let username: string = "Alice";
let age: number = 25;
let isActive: boolean = true;

// Array
let scores: number[] = [90, 85, 100];

// Tuple (fixed length and types)
let locationCoords: [number, number] = [23.78, 90.41];


// 🔹 Union Type
type Status = "pending" | "approved" | "rejected";

function printStatus(status: Status) {
  console.log("Current status:", status);
}
printStatus("approved"); // ✅


// 🔹 Enum
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}

let currentRole: UserRole = UserRole.Admin;


// 🔹 Interface
interface User {
  id: number;
  name: string;
  email?: string;          // optional property
  role: UserRole;          // using enum
  status: Status;          // using union type
  scores: number[];        // array type
  address: {
    city: string;
    zip: number;
  };
}

// 🔹 Using everything together
const user1: User = {
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
