function mergeArraysUnique(arr1, arr2) {
    const mergedArr = [...new Set([...arr1, ...arr2])];
    return mergedArr;
  }
  
  const arr1 = [1, 2, 3, 4, 5, 6];
  const arr2 = [3, 4, 5, 7];
  
  const resultArray = mergeArraysUnique(arr1, arr2);
  console.log(resultArray);
  