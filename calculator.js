// The Calculator
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(num) {
  const squared = num * num;
  console.log(squared);
  return squared;
}
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(num) {
  const halfNum = num / 2;
  console.log(halfNum);
  return halfNum;
}
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(num1, num2) {
  const percentage = (num2 * 100) / num1;

  console.log(`${num2} is ${percentage} % of ${num1}`);
  return percentage;
}
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

function areaOfCircle(r) {
  const pi = 3.14;
  let area = (pi * r * r).toFixed(2);

  console.log(`The area of a circle with radius ${r} is ${area}`);
  return area;
}
// Bonus: Round the result so there are only two digits after the decimal.
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier:

function calc(num) {
  let half = halfNumber(num);
  let squaredNum = squareNumber(half);
  let areaCir = areaOfCircle(squaredNum);
  percentOf(squaredNum, areaCir);
}
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

// console.log(calc(2));
// console.log(squareNumber(2));
// console.log(areaOfCircle(2));
// console.log(halfNumber(2));
// console.log(percentOf(10, 2));

console.log(calc(4));
