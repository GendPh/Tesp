function PositiveNumbers(array) {
  let positive = 0;
  for (let i = 0; i < array.length; i++) {
    (array[i] > 0) && positive++;
  }
  return positive;
}

console.log(PositiveNumbers([0, 10, 20, 0]));
console.log(PositiveNumbers([0, 10, -20, -10]));
