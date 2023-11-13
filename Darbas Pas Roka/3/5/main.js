let celsius = 20;
let fehrenheit = 78;

let convertToFahrenheit = celsius * (9/5) + 32;
let convertToCelsius = (fehrenheit - 32) * (5/9);

console.log(`${celsius} C is ${convertToFahrenheit} F`);
console.log(`${fehrenheit} F is ${convertToCelsius} C`);