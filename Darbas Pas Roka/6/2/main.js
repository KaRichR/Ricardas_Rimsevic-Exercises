function filterArray(array, callback) {
    const filteredArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        filteredArray.push(array[i]);
      }
    }
  
    return filteredArray;
  }

  const numbers = [1, 2, 3, 4, 5, 6];
  const isEven = (number) => number % 2 === 0;
  const filteredResult = filterArray(numbers, isEven);
  
  console.log("Filtered Array:", filteredResult);