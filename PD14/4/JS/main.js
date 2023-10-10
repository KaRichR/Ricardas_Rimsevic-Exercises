let sausis = [-11.5, -10.3, -12, -6.5, -5, -15.5];
let vasaris = [-16, -14.5, -11, -10.3, -3.5, 0];
let kovas = [-3, -2.5, 0, 5, 9.5, 11.2];

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for (let i = 0; i < sausis.length; i++) {
  sum1 += sausis[i];
}

for (let i = 0; i < vasaris.length; i++) {
  sum2 += vasaris[i];
}

for (let i = 0; i < kovas.length; i++) {
  sum3 += kovas[i];
}

let vidurkis1 = sum1 / sausis.length;
let vidurkis2 = sum2 / vasaris.length;
let vidurkis3 = sum3 / kovas.length;

let bendrasVidurkis = (vidurkis1 + vidurkis2 + vidurkis3) / 3;

console.log("Vidutinė sausio temperatūra: " + vidurkis1.toFixed(2) + ".");
console.log("Vidutinė vasario temperatūra: " + vidurkis2.toFixed(2) + ".");
console.log("Vidutinė kovo temperatūra: " + vidurkis3.toFixed(2) + ".");
console.log("Bendras atliktų matavimų vidurkis: " + bendrasVidurkis.toFixed(2) + ".");
