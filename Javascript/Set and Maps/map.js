const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);


console.log(fruits);


// Create an Array
const fruit = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Map.groupBy(fruit, myCallback);
console.log(result);


// Create a WeakMap
let myMap = new WeakMap();

// Create an Object
let myObj = {fname:"John", lname:"Doe"};

// Set a WeakMap value
myMap.set(myObj, "player");

// Get the WeakMap value
let type = myMap.get(myObj);
console.log(type);



let text = "";

// Create a WeakMap to store visit counts
const visitsCount = new WeakMap();

// Create Visitor Objects
const John = {name:"John", age:40};
const Paul = {name:"Paul", age:41};
const Ringo = {name:"Ringo", age:42};
const George = {name:"George", age:43};

// Track visits
track(Paul);
track(Ringo);
track(Paul);
track(Paul);
track(John);

// Function to track visitors
function track(visitor) {
  let count = visitsCount.get(visitor) || 0;
  count++;
  visitsCount.set(visitor, count);
  text += visitor.name + ", age " + visitor.age + ", has visited " + count + " time(s).\n";
}


console.log(text);


// Create WeakMap
const map = new WeakMap();

// Private Fields Simulation
class User {
  constructor(name) {
  map.set(this, {secret:"hidden data"});
  this.name = name;
 }
 getSecret() {
  return map.get(this).secret;
  }
}

const user1 = new User("John");
secret = user1.getSecret();

console.log(secret);






// Permissions for each role (using Set to ensure uniqueness)
const rolePermissions = new Map([
  ["Admin", new Set(["create", "read", "update", "delete"])],
  ["Editor", new Set(["create", "read", "update"])],
  ["Viewer", new Set(["read"])]
]);

// Users mapped with their roles
const users = new Map([
  [1, { name: "Alice", role: "Admin" }],
  [2, { name: "Bob", role: "Editor" }],
  [3, { name: "Charlie", role: "Viewer" }],
  [4, { name: "Diana", role: "Editor" }]
]);

// Function to check if a user has permission
function hasPermission(userId, action) {
  const user = users.get(userId);
  if (!user) return false;

  const permissions = rolePermissions.get(user.role);
  return permissions.has(action);
}

// Function to get all unique permissions available in system
function getAllPermissions() {
  return new Set([...rolePermissions.values()].flatMap(p => [...p]));
}

// Function to group users by role (Map inversion)
function groupUsersByRole() {
  const grouped = new Map();
  for (const [id, { name, role }] of users) {
    if (!grouped.has(role)) grouped.set(role, new Set());
    grouped.get(role).add(name);
  }
  return grouped;
}

// --- Usage --- //
console.log("Does Alice have delete permission?", hasPermission(1, "delete")); 
// true (Admin)

console.log("Does Bob have delete permission?", hasPermission(2, "delete")); 
// false (Editor)

console.log("All unique permissions in system:", [...getAllPermissions()]);
// [ 'create', 'read', 'update', 'delete' ]

console.log("Users grouped by role:", groupUsersByRole());


const rolePermissions1 = new Map([
  ["Admin", new Set(["create", "read", "update", "delete"])],
  ["Editor", new Set(["create", "read", "update"])],
  ["Viewer", new Set(["read"])]
]);


console.log(new Set([...rolePermissions1.values()].flatMap(p => [...p])))