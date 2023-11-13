function findMax(array, callback) {
    if (array.length === 0) {
      return undefined;
    }
  
    let max = array[0];
  
    for (let i = 1; i < array.length; i++) {
      const result = callback(max, array[i]);
      if (result < 0) {
        max = array[i];
      }
    }
  
    return max;
  }
  
  const numbers = [12, 4, 9, 23, 6, 10];
  
  const compareFunction = (a, b) => a - b;
  
  const maxNumber = findMax(numbers, compareFunction);
  
  console.log("Maximum Value:", maxNumber);
  