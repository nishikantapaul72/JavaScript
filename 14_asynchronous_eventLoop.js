console.log("Start");

// Set a timeout callback function after 5 seconds
setTimeout(function cbT() {
  console.log("CB Timeout"); // This will be placed in the Callback Queue after 5 seconds
}, 5000);

// Fetch request with no-cors mode
fetch("https://www.netflix.com/bd/", { mode: "no-cors" })
  .then(function cbF() {
    console.log("CB Netflix"); // This will be placed in the Microtask Queue when the fetch resolves
  })
  .catch(function (error) {
    console.error("Error:", error);
  });

console.log("End");
