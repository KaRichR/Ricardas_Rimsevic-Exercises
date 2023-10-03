const ilgis = 4;
const aukstis = 3;
const plytosKaina = 0.5;

const plytosIlgis = 0.2;
const plytosAukstis = 0.1;

const plytosPlotas = plytosIlgis * plytosAukstis;

const sienosPlotas = ilgis * aukstis;

const plytosKiekis = sienosPlotas / plytosPlotas;

const plytosKainaGal = plytosKiekis * plytosKaina;



console.log("Plytų kiekis:", plytosKiekis.toFixed(0));
console.log("Plytos kainuos", plytosKainaGal.toFixed(2), "Eur.");

