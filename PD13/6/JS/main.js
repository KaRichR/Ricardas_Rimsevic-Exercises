const skaicius1 = 14;
const skaicius2 = 25;

const pirmasSkaitmoSkaiciaus1 = Math.floor(skaicius1 / 10);
const antrasSkaitmoSkaiciaus1 = skaicius1 % 10;
const pirmasSkaitmoSkaiciaus2 = Math.floor(skaicius2 / 10);
const antrasSkaitmoSkaiciaus2 = skaicius2 % 10;

let didesnisSkaitmuo;
if (antrasSkaitmoSkaiciaus1 > antrasSkaitmoSkaiciaus2){
    didesnisSkaitmuo = antrasSkaitmoSkaiciaus1;
} 
else if (antrasSkaitmoSkaiciaus2 > antrasSkaitmoSkaiciaus1){
    didesnisSkaitmuo = antrasSkaitmoSkaiciaus2;

}
else{
    didesnisSkaitmuo = "Lygus"
}

console.log(`Didesnis skaitmuo yra ${didesnisSkaitmuo}`);