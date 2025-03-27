// Example of Callback Function and Higher Order Function
function x() {
  console.log("Hi");
}

function y(callback) {
  callback(); // 'x' is passed as a callback function to 'y'
}

y(x); // Outputs "Hi" because 'x' is called inside 'y'

// Example 1: Calculate Area of Circles using Higher Order Functions

const radius = [1, 2, 3, 4];

// First Approach:
const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
console.log("Area of Circles normal approach:", calculateArea(radius));

// Second Approach: More DRY (Don't Repeat Yourself) approach
// Create separate functions for different operations (Area and Circumference)

const radiusArr = [1, 2, 3, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const calculate = function (radiusArr, operation) {
  const output = [];
  for (let i = 0; i < radiusArr.length; i++) {
    output.push(operation(radiusArr[i]));
  }
  return output;
};

console.log("Area of Circles Using DRY :", calculate(radiusArr, area));
console.log(
  "Circumference of Circles Using DRY :",
  calculate(radiusArr, circumference)
);

console.log("Are of Circles Using map :", radiusArr.map(area));
console.log(
  "Circumference of Circles Using map :",
  radiusArr.map(circumference)
);

// Polyfill of the `map` function (using Higher Order Function)
Array.prototype.calculate = function (operation) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(operation(this[i]));
  }
  return output;
};

console.log("Area of Circles Using map Polyfill :", radiusArr.calculate(area));
console.log(
  "Circumference of Circles Using map Polyfill :",
  radiusArr.calculate(circumference)
);
