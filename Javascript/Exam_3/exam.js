/// Question no_1

// const p = Promise.resolve(1);

// p.then(x => {
//     console.log("A", x);
//     return x + 1;
// }).then(x => {
//     console.log("B", x);
//     return Promise.resolve(x + 1);
// }).then(x => {
//     console.log("C", x);
// });

// console.log("D");




/// Question no_2

// console.log("start");

// setTimeout(() => console.log("timeout"), 0);

// Promise.resolve()
//   .then(() => console.log("micro-1"))
//   .then(() => console.log("micro-2"));

// console.log("end");


// async function addLater(a, b) {
//   const s = await Promise.resolve(a + b);
//   return s;
// }

// addLater(1, 2).then(x => console.log("T1", x));

// (async () => {
//   console.log("T2", await addLater(2, 3));
// })();

// console.log("T3");


/// Question no_3

// const a = new Promise(res => setTimeout(() => res("A"), 10));
// const b = new Promise((_, rej) => setTimeout(() => rej("B-err"), 0));
// const c = Promise.resolve("C");

// Promise.all([a, b, c])
//   .then(vals => console.log("ALL", vals))
//   .catch(err => console.log("ERR", err));


// const a = new Promise(res => setTimeout(() => res("A"), 10));
// const b = new Promise(res => setTimeout(() => res("B"), 0)); // ✅ resolve instead of reject
// const c = Promise.resolve("C");

// Promise.all([a, b, c])
//   .then(vals => console.log("ALL", vals))
//   .catch(err => console.log("ERR", err));

// const slow = new Promise(res => setTimeout(() => res("slow"), 20));
// const fast = new Promise(res => setTimeout(() => res("fast"), 0));
// const fast1 = new Promise((res,err) => setTimeout(() => err("middle"), 2));


// Promise.race([slow, fast,fast1]).then(v => console.log("WIN", v));

// console.log("after-race");



/// Question no_4
// function fetch(url) {
//   return Promise.resolve({
//     url,
//     json() { return Promise.resolve({ ok: true, url }); }
//   });
// }

// (async () => {
//   console.log("before");
//   const res = await fetch("/api/data");
//   const data = await res.json();
//   console.log("data", data.ok, data.url);
//   console.log("after");
// })();

// console.log("sync-end");


// async function go() {
//   try {
//     console.log("try-start");
//     await Promise.reject(new Error("boom"));
//     console.log("never");
//   } catch (e) {
//     console.log("caught", e.message);
//   } finally {
//     console.log("finally");
//   }
// }

// go();

// console.log("after-call");

console.log("S");

// Assuming queueMicrotask is a function that queues a microtask
queueMicrotask(() => console.log("QM"));

Promise.resolve()
  .then(() => console.log("P1"))
  .then(() => console.log("P2"));

setTimeout(() => console.log("T"), 0);

console.log("E");