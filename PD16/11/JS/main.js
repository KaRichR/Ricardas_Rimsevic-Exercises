function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';
   
  for (let i = 0; i < words.length; i++) {
     if (words[i].length > longestWord.length) {
       longestWord = words[i];
     }
  }
   
  return longestWord;
 }
  
  let eilute = "Parašykite JavaScript funkciją, kuri suranda ilgiausią žodį pateiktoje eilutėje";
  let rezultatas = findLongestWord(eilute);
  
  console.log('Ilgiausias žodis eilutėje:', rezultatas);
  