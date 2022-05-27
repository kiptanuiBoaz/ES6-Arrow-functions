import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

const newNumbers = numbers.map((x) => {
  return x * x;
});
console.log(newNumbers);

//Map -Create a new array by doing something with each item in an array.
const newNumbers2 = numbers.map((x) => x * 2);
console.log(newNumbers2);

////Filter - Create a new array by keeping the items that return true.
const newNumbers3 = numbers.filter((num) => {
  return num < 10;
});
console.log(newNumbers3);

// Reduce - Accumulate a value by doing something to each item in an array.
var newNumbers4 = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(newNumbers4);

//Find - find the first item that matches from an array.
const newNumbers5 = numbers.find((num) => {
  return num > 10;
});
console.log(newNumbers5);

//FindIndex - find the index of the first item that matches.
const newNumbers6 = numbers.findIndex((num) => {
  return num > 10;
});
console.log(newNumbers6);
