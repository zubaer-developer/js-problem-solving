function isPalindrome(str) {
  let strLc = str.toLowerCase();

  let left = 0;
  let right = strLc.length - 1;

  while (left < right) {
    if (strLc[left] !== strLc[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
