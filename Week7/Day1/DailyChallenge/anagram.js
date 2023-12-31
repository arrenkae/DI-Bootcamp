function checkAnagram(str1, str2) {
    const str1Chars = str1.toLowerCase().replace(/\s/g, "").split('');
    const str2Chars = str2.toLowerCase().replace(/\s/g, "").split('');
    return str1Chars.every((letter) => str2Chars.includes(letter));
}

console.log(checkAnagram("Astronomer", "Moon starer"));
console.log(checkAnagram("Astronomer", "Moonwalker"));
console.log(checkAnagram("School master", "The classroom"));
console.log(checkAnagram("The Morse Code", "Here come dots"));