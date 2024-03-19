function getVowels(word: string): string {
  const vowels: string[] = ["a", "e", "i", "o", "u"];

  const vowelChars: string[] = word.split('').filter(char => vowels.indexOf(char.toLowerCase()) !== -1);

  return vowelChars.length != 0 ? vowelChars.join('') : "No Vowel!";
}

console.log(getVowels("ola"));
console.log(getVowels("saltar"));
console.log(getVowels("jogo"));
console.log(getVowels("jjj"));

