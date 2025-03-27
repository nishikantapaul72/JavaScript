const array = [5, 1, 3, 2, 6];

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log("Sum (nonFunctional): ", findSum(array)); // 17

const sumOfElem = array.reduce((acc, current) => acc + current, 0);
console.log("Sum (Functional):", sumOfElem); // 17

// Non-functional approach
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log("Max (Non-functional):", findMax(array)); // 6

// Functional approach using reduce
const maxElem = array.reduce(
  (max, current) => (current > max ? current : max),
  array[0]
);
console.log("Max (Functional):", maxElem); // 6
