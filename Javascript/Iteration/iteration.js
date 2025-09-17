const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}

console.log(text);



var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

console.log(i);


// Complex Example: Loop Scope with var, let, and closures
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log("var i:", i); 
//   }, 0);
// }

// for (var k = 0; k < 3; k++) {
//   ((x) => {
//     setTimeout(() => {
//       console.log("fixed var k:", x); 
//     }, x * 1000);
//   })(k);
// }


// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

// Use it
for (let num of myNumbers) {
  console.log(num);
}


function* generator() {
  console.log("A");
  yield 10;   // pause here
  console.log("B"); // runs when resumed
}


const gen = generator();
console.log(gen.next());
console.log(gen.next());


function* getRecords(records) {
  for (let record of records) {
    yield record; // pause and give one record at a time
  }
}

// Example usage:
const bigData = ["User1", "User2", "User3", "User4"]; 
const recordStream = getRecords(bigData);

console.log(recordStream.next().value); // "User1"
console.log(recordStream.next().value); // "User2"
// ... fetch when needed


const playlist = {
  songs: ["Song1", "Song2", "Song3"],
  *[Symbol.iterator]() {
    for (let song of this.songs) {
      yield song;
    }
  }
};

for (let track of playlist) {
  console.log(track);
}


