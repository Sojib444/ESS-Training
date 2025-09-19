const parent = document.createElement("div");
const child = document.createElement("button");
child.textContent = "Click me";

parent.appendChild(child);
document.body.appendChild(parent);

parent.addEventListener("click", () => console.log("parent-bubble"));
parent.addEventListener("click", () => console.log("parent-capture"), { capture: true });

child.addEventListener("click", () => console.log("child-bubble"));
child.addEventListener("click", () => console.log("child-capture"), { capture: true });

// Trigger a click on the child:
child.click();



const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("handler-start");

  setTimeout(() => console.log("timeout"), 0);

  Promise.resolve().then(() => console.log("micro"));
  console.log("handler-end");
});

console.log("before-click");
btn.click();
console.log("after-click");