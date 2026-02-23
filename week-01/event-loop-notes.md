


// Write this from memory:

What is the call stack? who gets called first ?

What are Web APIs? don't remember

What is the callback queue? don´t know

What is the microtask queue? don´t know

Execution order example with:

setTimeout

Promise

console.log 
//




console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

What prints and why?

A , B , D , C in that order. All logs but C , print instantly. B has setTiomeout function () but with 0 seconds and D has Promise.resolve function() and then () wicch make sme thing that is gonna print after everything else is done.

