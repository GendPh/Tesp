function MaxNumber(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

console.log(MaxNumber([5, 1, 5, 2, 9, 7]));
console.log(MaxNumber([]));
console.log(MaxNumber([-1, 5, 6]));
console.log(MaxNumber([-1, -2, -9]));