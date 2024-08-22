/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const casedStr1 = str1.toLowerCase();
  const casedStr2 = str2.toLowerCase();
  const firstStr = casedStr1.split('').sort().join('');
  const secondStr = casedStr2.split('').sort().join('');

  if(firstStr === secondStr) {
      return true;
  }
  else {
      return false;
  }
}
console.log(isAnagram("hello", "elloh"))

module.exports = isAnagram;
