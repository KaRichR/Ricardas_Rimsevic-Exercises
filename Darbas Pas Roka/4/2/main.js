function filterArray(array, callback) {
    const filteredArray = [];
    for (let i=0; i < array.length; i++){
        if (callback(array[i])) { 
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;

}

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = filterArray(numbers, (num) => num % 2 === 0); 
console.log(evenNumbers);