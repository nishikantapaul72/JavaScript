//callback function is a function that is passed as an argument to another function, to be “called back” at a later time.
// Callback Example
function x(z) {
  console.log("x called");
  z();
}

x(function y() {
  console.log("y called");
});

// setTimeout Example
setTimeout(function () {
  console.log("Timer 1");
}, 1000);

setTimeout(function () {
  console.log("Timer 2");
}, 5000);

// Event Listener Example
document.addEventListener("DOMContentLoaded", function () {
  //to ensure it runs after the DOM is fully loaded.
  document.getElementById("clickMe").addEventListener("click", function () {
    console.log("Button Clicked");
  });
});

// Increment Counter Button (Global Variable Approach)
let count = 0;
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("clickMe").addEventListener("click", function () {
    console.log("Button Clicked", ++count);
  });
});

// Using Closures for Data Abstraction
function attachEventList() {
  let count = 0;
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("clickMe").addEventListener("click", function () {
      console.log("Button Clicked by using closures", ++count);
    });
  });
}
attachEventList();
