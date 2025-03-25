function a() {
  var x = 5;
  function b() {
    console.log(x);
  }
  b();
}

var b = 10;
a();
console.log(x); // Uncaught ReferenceError: x is not defined
