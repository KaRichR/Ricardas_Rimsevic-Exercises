let knyga = {
    pavadinimas: "Pavadinimas",
    autorius: "Vardas Pavarde",
    puslapiuSkaičius: 99
};

function spausdinaInfo(obj){
    console.log(obj.pavadinimas);
    console.log(obj.autorius);
    console.log(obj.puslapiuSkaičius);
};

spausdinaInfo(knyga);