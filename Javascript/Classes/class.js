class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }

   present() {
    return 'I have a ' + this.name;
  }

  get cnam() {
    return this.name;
  }
  set cnam(x) {
    this.name = x;
  }
}

const myCar = new Car("Ford", 2014);

console.log(myCar);
console.log(myCar.cnam); 
myCar.cnam = "Volvo";
console.log(myCar.cnam); 
console.log("My car is " + myCar.age() + " years old.");


//Inheritance
class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}



const myModel = new Model("Ford", "Mustang");
console.log(myModel.show()); // Outputs: I have a Ford, it is a Mustang


class PrivateCar {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}


console.log(PrivateCar.hello(myCar)); // Outputs: Hello Volvo



// Base class
class User {
  static #userCount = 0; // private static field

  #id; // private instance field
  #password;

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
    this.#id = ++User.#userCount;
  }

  get id() {
    return this.#id;
  }

  // getter and setter for password
  get password() {
    return "******"; // never expose real password
  }

  set password(newPassword) {
    if (newPassword.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }
    this.#password = newPassword;
  }

  checkPassword(password) {
    return this.#password === password;
  }

  static getTotalUsers() {
    return User.#userCount;
  }
}

// Derived class
class PremiumUser extends User {
  #subscriptionStatus = "inactive";
  #history = [];

  constructor(name, email, password) {
    super(name, email, password);
  }

  activateSubscription() {
    this.#subscriptionStatus = "active";
    this.#history.push({ action: "activated", date: new Date() });
    return this; // for method chaining
  }

  cancelSubscription() {
    this.#subscriptionStatus = "inactive";
    this.#history.push({ action: "canceled", date: new Date() });
    return this;
  }

  get subscriptionStatus() {
    return this.#subscriptionStatus;
  }

  get history() {
    return [...this.#history]; // return a copy
  }

  // Example of async method
  async fetchRecommendations() {
    // Mock async API call
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(["Course A", "Course B", "Course C"]);
      }, 1000);
    });
  }
}

// --- Usage Example ---

(async () => {
  const user1 = new PremiumUser("Alice", "alice@example.com", "secure123");

  user1
    .activateSubscription()
    .cancelSubscription()
    .activateSubscription(); // method chaining

  console.log("User ID:", user1.id);
  console.log("Subscription:", user1.subscriptionStatus);
  console.log("History:", user1.history);

  console.log("Total Users:", User.getTotalUsers());

  console.log("Recommendations:", await user1.fetchRecommendations());
})();


///have to await async latter