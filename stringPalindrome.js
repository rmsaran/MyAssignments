let input = "Radar";

function reverseString(str) {
    let str1 = str.toLowerCase();
    let char = str1.split("");
    let reversed = "";
    for (let i = char.length - 1; i >= 0; i--) {
        reversed += char[i];
    }

    return reversed;
}

function isPalindrome(str) {
    let lower = str.toLowerCase();
    let reversed = reverseString(str);
    return lower === reversed;
}

let reversed = reverseString(input);
console.log(`Reversed string: ${reversed}`);

if (isPalindrome(input)) {
    console.log(`${input} is a palindrome`);
} else {
    console.log(`${input} is not a palindrome`);
}