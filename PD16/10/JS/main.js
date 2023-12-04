function capitalization(sentence){
    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

   return words.join(" ");
}

const mySentence = "I would be delighted if the sea were full of tea";

console.log(capitalization(mySentence));