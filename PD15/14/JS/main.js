let arr1 = [1, 2, 3, 4, 5, 6];  
let arr2 = [3, 4, 5, 7]; 
let arr = arr1.concat(arr2); 
let mergedArr = [...new Set(arr)] 
console.log(mergedArr);