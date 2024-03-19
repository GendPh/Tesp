function getVowels(word) {
    var vowels = ["a", "e", "i", "o", "u"];
    var vowelChars = word.split('').filter(char => { return vowels.indexOf(char.toLowerCase()) !== -1; });
    return vowelChars.length != 0 ? vowelChars.join('') : "No Vowel!";
}
console.log(getVowels("ola"));
console.log(getVowels("saltar"));
console.log(getVowels("jogo"));
console.log(getVowels("jjj"));
