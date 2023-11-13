//1
function generateLifePrediction(jobTitle, geographicLocation, partnersName, numOfChildren) {
    return `You will be a ${jobTitle}, in ${geographicLocation}, and married to ${partnersName} with ${numOfChildren} kids.`;
}

const numOfChildren = 2;
const partnersName = "partners name";
const geographicLocation = "Monaco";
const jobTitle = "Racer";

const lifePrediction = generateLifePrediction(jobTitle, geographicLocation, partnersName, numOfChildren);
console.log(lifePrediction);

//2
function generateAgePrediction(startYear, endYear) {
    const age1 = endYear - startYear;
    const age2 = age1 - 1;
    
    return `I will be either ${age2} or ${age1} in ${endYear}`;
}

const startYear = 2005;
const endYear = 2030;

const agePrediction = generateAgePrediction(startYear, endYear);
console.log(agePrediction);


//3
function calculateAmountNeeded(startAge, endAge, perDay) {
    const consumed = (endAge - startAge) * 365 * perDay;
    return `You will need ${consumed} to last you until the ripe old age of ${endAge}.`;
}
const startAge = 18;
const endAge = 75;
const perDay = 2;

const amountNeeded = calculateAmountNeeded(startAge, endAge, perDay);
console.log(amountNeeded);


//4
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}

function calculateArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

const radius = 2;
const circumference = calculateCircumference(radius);
const area = calculateArea(radius);

console.log(`Circumference = ${circumference} cm`);
console.log(`Area = ${area} cm^2`);


//5
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
}

const celsius = 20;
const fahrenheit = 78;

const convertedToFahrenheit = celsiusToFahrenheit(celsius);
const convertedToCelsius = fahrenheitToCelsius(fahrenheit);

console.log(`${celsius} C is ${convertedToFahrenheit} F`);
console.log(`${fahrenheit} F is ${convertedToCelsius} C`);
