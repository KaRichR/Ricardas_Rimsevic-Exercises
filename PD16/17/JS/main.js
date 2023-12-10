function filterArray(array, number) {
  let filteredArray = [];

  for (let i = 0; i < array.length; i++) {
      if (array[i] > number) {
          filteredArray.push(array[i]);
      }
  }

  return filteredArray;
}


let array = [1, 3, 5, 7, 9];
let number = 5;

let filteredArray = filterArray(array, number);

console.log(filteredArray); 