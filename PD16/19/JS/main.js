function bubbleSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

const unsortedArray = [1, 4, 8, 3, 7, 9, 97, 82];
const sortedArray = bubbleSort(unsortedArray.slice()); 
console.log(sortedArray); 
