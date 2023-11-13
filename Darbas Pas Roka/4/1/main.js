function sumArray(numbers, callback){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return callback(sum);
}

const numbers = [1, 2, 3, 4, 5];
const result = sumArray(numbers,(sum) => sum * 2);

console.log(result)