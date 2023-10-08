function keliasIrLaikas(p, pz, a, az, k, t){
    const iPrieki = p * pz * k;
    const atgal = a *az * k;
    const distancija = iPrieki - atgal;

    const metrais = Math.floor(distancija / 100);
    const centimetrais = distancija % 100;

    const pilnaDistancija = iPrieki + atgal; 

    const vidGreitis = pilnaDistancija / (t * 100);

    return [metrais, centimetrais, vidGreitis.toFixed(2)];
}

const input = "5 50 3 45 3 5";
const inputData = input.split(" ").map(Number);

const [metrais, centimetrais, vidGreitis] = keliasIrLaikas(...inputData);
console.log(`${metrais} ${centimetrais} ${vidGreitis}`);