console.log(b); // undefined
var b = 20;
console.log(b); // 20
console.log(window.b); // 20
console.log(this.b); // 20

console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
let a = 10;
console.log(a); // 10
console.log(window.a); // undefined
console.log(this.a); // undefined

//let a = 15; // Uncaught SyntaxError: Identifier 'a' has already been declared

const c = 30;
console.log(c); // 30

//const c = 35; // Uncaught SyntaxError: Identifier 'c' has already been declared
c = 35; // Uncaught TypeError: Assignment to constant variable.

//const d; // Uncaught SyntaxError: Missing initializer in const declaration
