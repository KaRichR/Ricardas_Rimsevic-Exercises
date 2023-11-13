function mapArray(array, callback) {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
      const transformedValue = callback(array[i]);
      mappedArray.push(transformedValue);
    }
    return mappedArray;
  }
  
  const names = ["Alice", "Bob", "Charlie"];
  const nameLengths = mapArray(names, function(name) {
    return name.length;
  });
  
  console.log("Mapped Array:", nameLengths);
  