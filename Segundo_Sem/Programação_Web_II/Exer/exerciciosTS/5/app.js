function ReverseWord(word) {
    return word.split("").reverse().join("");
}
function ReverseArrayStrings(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = ReverseWord(arr[i]);
    }
    return arr.reverse();
}
console.log(ReverseArrayStrings(["ola", "ipca", "pw1"]));
