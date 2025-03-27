// Global scope
var globalVar = 100;

function outerFunction() {
  var outerVar = 10;
  console.log("Outer Function - outerVar:", outerVar);

  function innerFunction() {
    console.log("Inner Function - outerVar:", outerVar); // Accesses outerVar from outerFunction
    console.log("Inner Function - globalVar:", globalVar); // Accesses globalVar from global scope
  }

  return innerFunction;
}

var closureFunction = outerFunction();
console.log(closureFunction); // Logs the function definition of innerFunction
closureFunction(); // Logs 10 and 100

// Another example with nested closures
function z() {
  var b = 900;

  function x() {
    var a = 7;

    function y() {
      console.log("y - a:", a); // Accesses a from x
      console.log("y - b:", b); // Accesses b from z
    }

    y();
  }

  x();
}

z(); // Logs 7 and 900
