const kuroBakas = 112;
const kuroSanaudos = 11;

let days = 0;
let likoDegalu = kuroBakas;

while(likoDegalu >= kuroSanaudos){
  days++;
  likoDegalu -= days % 2 === 0 ? kuroSanaudos: 2 * kuroSanaudos;
}

console.log(`Keliauti bus galima ${days} dienas.`);