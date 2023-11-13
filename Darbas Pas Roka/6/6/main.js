function sortArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (callback(array[i], array[j]) > 0) {
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
  }
  
  const fruits = ["Apple", "Banana", "Orange", "Cherry"];
  const sortedFruits = sortArray(fruits, function(a, b) {
    return a.localeCompare(b);
  });
  
  console.log("Sorted Array:", sortedFruits);
  