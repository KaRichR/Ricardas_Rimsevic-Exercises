function findSecondSmallestAndLargest(numbers) {
  numbers.sort((a, b) => a - b);

  let secondSmallest = numbers[1];

  let secondLargest = numbers[numbers.length - 2];

  return {
      secondSmallest,
      secondLargest
  };
}

let numbers = [3, 1, 7, 5, 9, 10, 8, 2, 4, 6];
let result = findSecondSmallestAndLargest(numbers);
console.log('Second Smallest Number:', result.secondSmallest);
console.log('Second Largest Number:', result.secondLargest);