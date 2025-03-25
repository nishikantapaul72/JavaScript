var x = 1;
console.log(x); // 1
console.log(window.x); // 1
console.log(this.x); // 1
if (true) {
  let y = 10;
  console.log(y); // 10
}

console.log(y); // Uncaught ReferenceError: y is not defined
console.log(window.y); // undefined
console.log(this.y); // undefined
