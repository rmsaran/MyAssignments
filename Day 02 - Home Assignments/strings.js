// Function to return the length of the last word in a string
function lastWordLength(s) {
    let trimmed = s.trim();
    let lastSpaceIndex = trimmed.lastIndexOf(' ');
    
    if (lastSpaceIndex === -1) {
        // No space found, entire string is one word
        return trimmed.length;
    }
    
    return trimmed.length - lastSpaceIndex - 1;
}

// Function to check if two strings are anagrams
function isAnagram(str1, str2) {
    // Remove spaces and convert to lowercase
    let s1 = str1.toLowerCase().replace(/\s/g, '');
    let s2 = str2.toLowerCase().replace(/\s/g, '');
    
    // If lengths are different, they cannot be anagrams
    if (s1.length !== s2.length) {
        return false;
    }
    
    // Sort characters and compare
    let sorted1 = s1.split('').sort().join('');
    let sorted2 = s2.split('').sort().join('');
    
    return sorted1 === sorted2;
}

// Test Case 1: Last word length
console.log("--- Last Word Length Tests ---");
console.log(`Input: "Hello World" => Length: ${lastWordLength("Hello World")}`); // Expected: 5
console.log(`Input: " fly me to the moon " => Length: ${lastWordLength(" fly me to the moon ")}`); // Expected: 4

// Test Case 2: Anagram checker
console.log("\n--- Anagram Checker Tests ---");
console.log(`isAnagram('listen', 'silent') => ${isAnagram('listen', 'silent')}`); // Expected: true
console.log(`isAnagram('hello', 'world') => ${isAnagram('hello', 'world')}`); // Expected: false
