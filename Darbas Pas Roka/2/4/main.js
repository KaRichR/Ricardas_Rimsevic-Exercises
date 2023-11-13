function arr(strings) {
    if (!Array.isArray(strings)) {
      console.log("Error: Input is not an array.");
    } else {
      const result = strings.map(str => str.toUpperCase());
      return result;
    }
  }
  
  const inputArray = ['a', 'b', 'c'];
  const result = arr(inputArray);
  
  if (result) {
    console.log(result); 
  }
  