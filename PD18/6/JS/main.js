let darbuotojai = [
    { vardas: "Vardas1", pavardė: "Pavarde1", atlyginimas: 3000 },
    { vardas: "Vardas2", pavardė: "Pavarde2", atlyginimas: 3500 },
    { vardas: "Vardas3", pavardė: "Pavarde3", atlyginimas: 2800 },
];

function darbuotojaiSuAtitinkama(atlyginimas) {
    const filtruotiDarbuotojai = darbuotojai.filter(darbuotojas => darbuotojas.atlyginimas >= atlyginimas);

    if (filtruotiDarbuotojai.length > 0) {
        return filtruotiDarbuotojai.map(darbuotojas => darbuotojas.vardas + ' ' + darbuotojas.pavardė + ' ' + darbuotojas.atlyginimas);
    } else {
        console.log("Nera tokiu darbuotoju");
    }
}

console.log(darbuotojaiSuAtitinkama(3000));
