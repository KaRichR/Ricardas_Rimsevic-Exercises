let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 6, 7, 8];
let difference = arr1.filter(x => arr2.indexOf(x) === -1);
console.log(difference);