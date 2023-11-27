function calculateUnion(array1, array2) {
    let combinedSet = new Set([...array1, ...array2]);
    let unionArray = Array.from(combinedSet);
    return unionArray;
}

let arrayA = [1, 2, 3, 4];
let arrayB = [3, 4, 5, 6];

let unionResult = calculateUnion(arrayA, arrayB);

console.log(unionResult);
