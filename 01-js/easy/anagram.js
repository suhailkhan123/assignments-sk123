/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();
  let len1 = str1.length;
  let len2 = str2.length;
  if (len1 != len2) {
    return false;
  }
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');
  for (let i = 0; i < len1; i++) {
    if(str1[i] != str2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
