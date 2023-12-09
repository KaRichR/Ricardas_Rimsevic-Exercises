function processArray(array) {
    array.sort(function(a, b) {
        return a - b;
    });

    array.shift();
    array.shift();

    console.log(array[0]);
}

let numbers = [3, 5, 1, 2, 4];
processArray(numbers);