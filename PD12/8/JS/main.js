const kuroBakoTalpa = 112; 
const kuroSanaudosN = 11; 

let dienos = 0;
let turimasDegalai = kuroBakoTalpa;

while (turimasDegalai >= kuroSanaudosN) {
  dienos++;
  if (dienos % 2 === 0) {
    turimasDegalai -= kuroSanaudosN;
  } else {
    turimasDegalai -= 2 * kuroSanaudosN;
  }
}

console.log(`Keliauti bus galima ${dienos} dienas.`);
