function arMasyvas(kintamasis) {
    return Array.isArray(kintamasis);
}

let pirmasKintamasis = [1, 2, 3];
let antrasKintamasis = "Ne masyvas";

console.log(arMasyvas(pirmasKintamasis)); 
console.log(arMasyvas(antrasKintamasis)); 
