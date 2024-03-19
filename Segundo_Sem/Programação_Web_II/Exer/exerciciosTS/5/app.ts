function ReverseWord(word: string): string {
  return word.split("").reverse().join("");
}

function ReverseArrayStrings(arr: string[]): string[] {
  arr.forEach(word => {
    ReverseWord(word);
  });
  return arr.reverse();
}

console.log(ReverseArrayStrings(["ola", "ipca", "pw1"]));