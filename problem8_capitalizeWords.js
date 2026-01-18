function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let capitalized = words[i][0].toUpperCase() + words[i].slice(1);
    result.push(capitalized);
  }
  return result.join(" ");
}

console.log(capitalizeWords("hello world"));
