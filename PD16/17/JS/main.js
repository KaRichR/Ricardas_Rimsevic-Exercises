function filterGreaterThan(array, specifiedNumber) {
    return array.filter(element => element > specifiedNumber);
  }
  
  let givenArray = [1, 5, 8, 12, 3, 7, 10];
  let specifiedNumber = 6;
  
  let result = filterGreaterThan(givenArray, specifiedNumber);
  
  console.log(`Elements greater than ${specifiedNumber}:`, result);
  