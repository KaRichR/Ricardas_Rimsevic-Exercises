function kopijuotiObjekta(originalas) {
    return { ...originalas };
}

let SenasObjektas = {
    diena: 22,
    mienuo: 9,
};

let NaujasObjektas = kopijuotiObjekta(SenasObjektas);

NaujasObjektas.diena = 24;

console.log(SenasObjektas);
console.log(NaujasObjektas);
