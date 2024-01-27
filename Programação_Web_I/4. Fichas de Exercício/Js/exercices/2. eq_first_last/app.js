function equalLast(array) {
  return (array[0] == array[array.length - 1]) ? true : false;
}

console.log(equalLast([0, 10, 20, 0]));
console.log(equalLast([0, 10, 20, 10]));
