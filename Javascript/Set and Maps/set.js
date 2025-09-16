const letters = new Set(["a","b","c"]);


letters.add("d");
letters.add("e");


console.log(letters);

answer = letters.has("d");
console.log(answer);

// Create an Iterator
const myIterator = letters.keys();

// List all Elements
let text = "";
for (const x of myIterator) {
  text += x;
}

console.log(text);


const myIterator1 = letters.entries();

let text1 = "";
for (const entry of myIterator1) {
  text1 += entry;
}

console.log(text1);



const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);

console.log(C);

const D = new Set(['a','b','c']);
const E = new Set(['b','c','d']);

const f = D.intersection(E);

console.log(f);