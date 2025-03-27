const array = [5, 1, 3, 2, 6];

// Task: Filter odd values
function isOdd(x) {
  return x % 2; // If the number is odd, it will return 1 (truthy value)
}
const oddArr = array.filter(isOdd); // Filters out odd numbers
console.log(oddArr); // Outputs: [5, 1, 3]

// Alternative way: Using an arrow function to filter odd values
const oddArr2 = array.filter((x) => x % 2); // Using arrow function
console.log(oddArr2); // Outputs: [5, 1, 3]
