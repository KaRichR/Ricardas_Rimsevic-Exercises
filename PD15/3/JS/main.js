function paskutinisElementas(masyvas) {
    if (masyvas.length > 0) {
        return masyvas[masyvas.length - 1];
    } else {
        return undefined;
    }
}

let manoMasyvas = [1, 2, 3, 4, 5];

let paskutinis = paskutinisElementas(manoMasyvas);
console.log(paskutinis); 
