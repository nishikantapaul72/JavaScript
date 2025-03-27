const arr = [5, 1, 3, 2, 6];

//const output = arr.map(function)
// The `map` function is used to transform each element of an array using a callback function.
// It creates a new array with the results of calling a provided function on every element in the array.
// Task 1: Double the array elements
function double(x) {
  return x * 2;
}
const doubleArr = arr.map(double); // `map` applies `double` function to each element
console.log(doubleArr); // Outputs: [10, 2, 6, 4, 12]
console.log(arr); // Outputs: [5, 1, 3, 2, 6]

// Task 2: Triple the array elements
function triple(x) {
  return x * 3;
}
const tripleArr = arr.map(triple); // `map` applies `triple` function to each element
console.log(tripleArr); // Outputs: [15, 3, 9, 6, 18]

// Task 3: Convert array elements to binary
// Using a normal function
function binary(x) {
  return x.toString(2); // Convert number to binary
}
const binaryArr = arr.map(binary);
console.log("Binary -->:", binaryArr); // Outputs: ["101", "1", "11", "10", "110"]

// Rewriting the `binary` function as an anonymous function
const binaryArr2 = arr.map(function (x) { //here x is the element of the array
  return x.toString(2);
});
console.log(binaryArr2); // Outputs: ["101", "1", "11", "10", "110"]

// Using an arrow function for `binary` transformation
const binaryArr3 = arr.map((x) => x.toString(2));
console.log(binaryArr3); // Outputs: ["101", "1", "11", "10", "110"]
