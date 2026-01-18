function countVowels(str) {
  let strLowerCase = str.toLowerCase();
  let vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(strLowerCase[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("programming"));
