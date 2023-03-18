//your JS code here. If required.
// Select the output element
const output = document.getElementById("output");

// Create a function that returns a promise
function sayHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

// Call the function and update the output element text when promise resolves
sayHello().then((result) => {
  output.innerText = result;
});
