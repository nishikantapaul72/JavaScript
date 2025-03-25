getName(); // Paul72
console.log(x); // undefined

var x = 7;
function getName() {
  console.log("Paul72");
}
var y = 4;
console.log(y); // ReferenceError: y is not defined

console.log(z); // Uncaught ReferenceError: Cannot access 'z' before initialization
let z = 3;

if (true) {
  let a = 5;
  var b = 6;
}

console.log(a); // Uncaught ReferenceError: a is not defined
console.log(b); // 6
