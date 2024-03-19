function Capicua(word: string): boolean {
  const capicua: string = word.split("").reverse().join("");
  return (capicua == word);
}

console.log(Capicua('abba'));
console.log(Capicua('radar'));
console.log(Capicua('rir'));
console.log(Capicua('ola'));