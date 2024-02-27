let zmogus = {
    vardas: "Vardas",
    pavarde: "Pavarde",
    amzius: 18
}

function filtrasPagalAmziu(asmuo) {
    if (asmuo.amzius >= 18) {
        return {
            vardas: asmuo.vardas,
            pavarde: asmuo.pavarde,
            amzius: asmuo.amzius
        };
    } else {
        return console.log("Nera 18 metu"); 
    }
}

let naujasZmogus = filtrasPagalAmziu(zmogus);
console.log(naujasZmogus);
