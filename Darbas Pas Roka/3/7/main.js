function calculateDogAge(humanYears){
    puppysAge = humanYears * 7;
    return `Your doggie is ${puppysAge} years old in dog years.`  
}

console.log(calculateDogAge(3));

function calculateHumanAge(puppysAge){
    humanYears = puppysAge / 7;
    return `Your doggie is ${humanYears} years old in human years.`  
}

console.log(calculateHumanAge(21));