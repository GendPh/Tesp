function capicua(word) {
  let reversed = word.split("").reverse().join("");

  return (word == reversed) ? true : false;
}

console.log(capicua("abba"));
console.log(capicua("radar"));
console.log(capicua("arara"));
console.log(capicua("rir"));
console.log(capicua("ola"));