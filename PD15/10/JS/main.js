function pasalintiPasikartojancius(masyvas) {
    return [...new Set(masyvas.map(reiksme => reiksme.toLowerCase()))];
}

let manoMasyvas = ['labas', 'labas', 'hello', 'geras', 'vienas', 'du', 'labas'];

let unikaliosReiksmes = pasalintiPasikartojancius(manoMasyvas);

console.log(unikaliosReiksmes);
