// Global scope
var a = 100;

// Script scope
let b = 200;
const c = 300;

{
  // Block scope
  var a = 10; // Shadows the global 'a'
  let b = 20; // Block-scoped 'b'
  const c = 30; // Block-scoped 'c'

  console.log(a); // 10 - Block 'a' shadows global 'a'
  console.log(b); // 20 - Block 'b'
  console.log(c); // 30 - Block 'c'
}

console.log(a); // 10 - Global 'a' is modified by block 'a'
console.log(b); // 200 - Global 'b' remains unchanged
console.log(c); // 300 - Global 'c' remains unchanged

// Illegal shadowing example
// let d = 40;
// {
//   var d = 50; // Uncaught SyntaxError: Identifier 'd' has already been declared
// }

// Valid shadowing example
var e = 60;
{
  let e = 70; // Valid shadowing
  console.log(e); // 70 - Block 'e'
}
console.log(e); // 60 - Global 'e'

// Function scope example
function x() {
  var f = 80; // Function-scoped 'f'
  console.log(f); // 80
}
x();
