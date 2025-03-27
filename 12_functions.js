// Function Statement (Declaration)
function a() {
  console.log("Hello A");
}
a(); // "Hello A"

// Function Expression
var b = function () {
  console.log("Hello B");
};
b(); // "Hello B"

// Difference in Hoisting
// a(); // "Hello A"
// b(); // TypeError (b is not a function)

// Named Function Expression
var c = function xyz() {
  console.log("c called");
};
c(); // "c called"
// xyz(); // ReferenceError: xyz is not defined

// Anonymous Function (Will cause Syntax Error if used alone)
// function () {} // Syntax Error

// Parameters vs Arguments
var d = function (param1, param2) {
  console.log("d called with", param1, param2);
};
d("arg1", "arg2");

// First-Class Functions (Functions as values)
var e = function (param1) {
  console.log(param1);
};
e(function () {
  console.log("Inside Function");
}); // Pass function as argument

function xyz() {
  console.log("Named function");
}
e(xyz); // Pass named function as argument

// Returning a function from a function
var f = function () {
  return function () {
    console.log("Returned function called");
  };
};
var returnedFunc = f();
returnedFunc(); // "Returned function called"
