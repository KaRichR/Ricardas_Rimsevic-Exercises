function skaiciuotiSumaIrSandauga(masyvas) {
    let suma = 0;
    let sandauga = 1;

    for (let i = 0; i < masyvas.length; i++) {
        suma += masyvas[i];
        sandauga *= masyvas[i];
    }

    return { suma, sandauga };
}

let manoMasyvas = [2, 3, 4, 5];

let rezultatai = skaiciuotiSumaIrSandauga(manoMasyvas);

console.log(`Suma: ${rezultatai.suma}`);
console.log(`Sandauga: ${rezultatai.sandauga}`);
