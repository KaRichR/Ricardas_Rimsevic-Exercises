function kartojimuSkaicius(masyvas, elementas) {
    return masyvas.filter(item => item === elementas).length;
}

let manoMasyvas = [1, 2, 3, 4, 2, 5, 2, 6, 2, 7];
let pasirinktasElementas = 2;

let kartojimai = kartojimuSkaicius(manoMasyvas, pasirinktasElementas);
console.log(`Elementas ${pasirinktasElementas} pasikartoja ${kartojimai} kartus.`);
