function getData(callback) {
  setTimeout(() => {
    callback("Here is the data");
  }, 2000);
}

getData((result) => {
  console.log(result); // prints after 2s
});


getUser(1, function(user) {
  console.log("User:", user);

  getOrders(user.id, function(orders) {
    console.log("Orders:", orders);

    getOrderDetails(orders[0], function(details) {
      console.log("Order Details:", details);

      // more nested calls...
    });
  });
});

// Fake async functions for demo
function getUser(id, callback) {
  setTimeout(() => callback({ id: id, name: "Alice" }), 1000);
}
function getOrders(userId, callback) {
  setTimeout(() => callback(["order1", "order2"]), 1000);
}
function getOrderDetails(orderId, callback) {
  setTimeout(() => callback({ orderId, price: 99 }), 1000);
}


setTimeout(function() {myFunction("fwfrwewrwr")}, 3000);

function myFunction(value) {
  console.log(value);
}


let myPromise = new Promise(function(resolve, reject) {
  let success = false; // simulate some condition

  if (success) {
    resolve("Data loaded successfully!");
  } else {
    reject("Something went wrong!");
  }
});


console.log(myPromise.then(
  function(value) { console.log(value); },
  function(error) { console.log(error); }
));

function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json());
}

getUser()
  .then(user => console.log("User:", user))
  .catch(error => console.error(error));