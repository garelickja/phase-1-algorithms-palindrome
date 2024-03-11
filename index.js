function reverseString(string) {
  return string.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word);
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  If the word is the same in reverse, it is a palindrome.

  Create a function that takes in a string
  Reverse the string
  Compare the reversed string to the original string
  If they are the same, return true
  If they are different, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("soccer"));
}

module.exports = isPalindrome;
