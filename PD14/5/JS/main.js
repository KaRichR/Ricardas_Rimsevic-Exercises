let atlyginimas1 = 824.25;
let atlyginimas2 = 1225.12;
let atlyginimas3 = 459.16;
let atlyginimas4 = 1500;

let sum1;
let sum2;
let sum3;
let sum4;



if (atlyginimas1 < 1000){
    sum1 = atlyginimas1 * 1.1;
} else{
    sum1 = atlyginimas1 * 1.05;
} 

if (atlyginimas2 < 1000){
    sum2 = atlyginimas2 * 1.1;
} else if (atlyginimas2 > 1000){
    sum2 = atlyginimas2 * 1.05;
} 

if (atlyginimas3 < 1000){
    sum3 = atlyginimas3 * 1.1;
} else if (atlyginimas3 > 1000){
    sum3 = atlyginimas3 * 1.05;
} 

if (atlyginimas4 < 1000){
    sum4 = atlyginimas4 * 1.1;
} else if (atlyginimas4 > 1000){
    sum4 = atlyginimas4 * 1.05;
} 

console.log(`Atlyginimas iki: ${atlyginimas1} ${atlyginimas2} ${atlyginimas3} ${atlyginimas4}`);
console.log(`Atlyginimas po: ${sum1.toFixed(2)} ${sum2.toFixed(2)} ${sum3.toFixed(2)} ${sum4.toFixed(2)}`);