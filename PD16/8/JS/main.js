function generateCombinations(word) {
  let combinations = new Set();

  function generate(remaining, current) {
      (remaining.length === 0) && (current !== '') && combinations.add(current);

      for (let i = 0; i < remaining.length; i++) {
          generate(remaining.slice(0, i) + remaining.slice(i + 1), current + remaining[i]);
          generate(remaining.slice(0, i) + remaining.slice(i + 1), current);
      }
  }

  generate(word, '');

  return Array.from(combinations);
}

let word = "cat";
let allCombinations = generateCombinations(word);

console.log('All letter combinations from the word "' + word + '":', allCombinations);
