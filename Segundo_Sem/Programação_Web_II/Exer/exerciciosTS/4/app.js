function Capicua(word) {
    var capicua = word.split("").reverse().join("");
    return (capicua == word);
}
console.log(Capicua('abba'));
console.log(Capicua('radar'));
console.log(Capicua('rir'));
console.log(Capicua('ola'));
