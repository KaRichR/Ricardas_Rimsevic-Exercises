function removeDuplicates(arr) {
  const set = [...new Set(arr)];
  return set;
}

const arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5];
const uniqueArr = removeDuplicates(arr);
console.log(uniqueArr); 