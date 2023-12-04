function findSecondSmallestAndLargest(numbers) {
    if (numbers.length < 2) {
      return "Array should have at least two elements.";
    }
  
    let sortedNumbers = numbers.slice().sort((a, b) => a - b);
  
    sortedNumbers = [...new Set(sortedNumbers)];
  
    let secondSmallest = sortedNumbers[1];
    let secondLargest = sortedNumbers[sortedNumbers.length - 2];
  
    return {
      secondSmallest,
      secondLargest
    };
  }
  
  let numbersArray = [5, 2, 8, 1, 9, 3, 7];
  let result = findSecondSmallestAndLargest(numbersArray);
  
  console.log("Second Smallest:", result.secondSmallest);
  console.log("Second Largest:", result.secondLargest);
  