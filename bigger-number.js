function findBiggerBumber(num1, num2) {
  if (num1 === num2) {
    throw new Error("Numbers are equal! Provide new numbers");
  } else if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(findBiggerBumber(5, 10));
console.log(findBiggerBumber(22, 17));
console.log(findBiggerBumber(10, 10));
