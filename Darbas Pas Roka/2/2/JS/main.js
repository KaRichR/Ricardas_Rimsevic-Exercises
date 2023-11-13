function findMax(...numbers){
    if (numbers.length === 0){
        console.Error('No numbers provided.');
    }

    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;
}

const result = findMax(5,10,20);