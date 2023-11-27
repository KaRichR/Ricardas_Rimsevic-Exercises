function sukurtiMasyvaTarpSveikujuSkaiciu(pradzia, pabaiga) {
    let masyvas = [];

    for (let i = pradzia; i <= pabaiga; i++) {
        masyvas.push(i);
    }

    return masyvas;
}

let pradzia = 1;
let pabaiga = 10;

let rezultatas = sukurtiMasyvaTarpSveikujuSkaiciu(pradzia, pabaiga);

console.log(rezultatas);
