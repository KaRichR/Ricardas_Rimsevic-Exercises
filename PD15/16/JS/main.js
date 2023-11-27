function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  const myArray = [1, 2, 3, 4, 5];
  const randomItem = getRandomItem(myArray);
  console.log(randomItem);