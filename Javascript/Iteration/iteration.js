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
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("var i:", i); 
  }, 0);
}

for (var k = 0; k < 3; k++) {
  ((x) => {
    setTimeout(() => {
      console.log("fixed var k:", x); 
    }, x * 1000);
  })(k);
}