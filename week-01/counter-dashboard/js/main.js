let count = 0;

function increment() {
  count++;
  console.log("Count:", count);
}

function decrement() {
  if (count > 0) {
    count--;
    console.log("Count:", count);
  }
}

window.increment = increment;
window.decrement = decrement;