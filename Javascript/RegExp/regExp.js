let text = "Visit W3Schools Visit Microsoft!";
let n = text.search(/w3schools/i);

let p = text.match(/W3schools/);

let result = text.replace(/Microsoft/i, "W3Schools");
console.log(result);

console.log(n);
console.log(p);





let x = " ";
for (var ii = 0; ii <= 5; ii++) {
  x += ii;
}

console.log(ii); // 6
console.log("Concatenated string:", x);


for (let ii = 0; ii <= 5; ii++) {
  x += ii;
}


