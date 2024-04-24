// CALLBACK FUNCTIONS

console.log("CALLBACK FUNCTIONS ");

// what is callback function in js
// In JavaScript, a callback function is a function that is passed as an argument to another function,
// with the intention of being invoked or called at a later time, usually after some asynchronous operation or event occurs.

//another  example of callback function
setTimeout(function () {
  console.log("this is an example of callback function");
}, 1000);

// here function y is the callback function .
function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

// event listeners
function attachEventListeners() {
  let count = 0;
  document
    .getElementById("clickMe")
    .addEventListener("click", function click() {
      console.log("button is clicked", ++count);
    });
}
attachEventListeners();

function clicked() {
  console.log("clicked again");
}
// garbage collection and remove eventListeners
//garbage collector is a program in js engine or browser that frees up unused memory. In high level languages like c++ or java
// garbage collection is left to programmer but in js it is done implicitly.
// The engine uses a technique called the “mark-and-sweep” algorithm to identify and remove objects and variables that are no longer in use.
function garbageCOllection() {
  var garbageclosure = 10;
  return function b() {
    var garbagevalues = 30;
    console.log("garbageclosure", garbageclosure);
  };
}
var y = garbageCOllection();
y();

// Mark-Sweep Algorithm:
// In JavaScript, garbage collection is performed by the JavaScript engine, which runs in the browser or on the server.
// The engine uses a technique called the “mark-and-sweep” algorithm to identify and remove objects and variables that are no longer in use.

// The mark-and-sweep algorithm works by starting with a set of “roots” (typically the global object and any objects or
//  variables that are currently in use). The algorithm then recursively traverses the object graph,
//   marking all objects and variables that are still in use. Once all live objects and variables have been marked,
//    the garbage collector then safely removes any objects and variables that have not been marked, as they are no longer required.

// The Reachable objects are marked.
// Non-reachable objects are removed from the heap.

//Reference Counting:
// Reference Counting is yet another technique for garbage collection in JavaScript.
//  In this method, the program keeps track of the number of references to each object or variable.
//  When an object or variable is no longer being used, its reference count drops to zero, and enables the garbage collector to safely remove it from memory.

// However, reference counting also does have some limitations. The limitation is that it cannot detect cyclic references,
//  where two or more objects reference each other in a loop. It also requires additional overhead to track reference counts,
//   which can impact the performance.

// there are some best practices to optimize JavaScript garbage collection performance, such as

// 1) Avoiding circular references
// 2) Minimizing the use of global variables
// 3) Using the delete keyword to remove properties from objects.

// example to demonstrate garbage collection
const registry = new FinalizationRegistry((message) => console.log(message));

const createObject = () => {
  return {
    name: "antony",
  };
};

for (let i = 0; i <= 10; i++) {
  const obj = createObject();
  registry.register(obj, "obj has been garbage collected");
}
