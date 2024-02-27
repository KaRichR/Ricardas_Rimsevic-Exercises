const objektas1 = { vardas: 'Vardas1', amzius: 18, miestas: 'Vilnius' };
const objektas2 = { vardas: 'Vardas2', amzius: 19, miestas: 'Vilnius' };

function vienodi(obj1, obj2){
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(vienodi(objektas1, objektas2));

//nezinojau kaip padaryti tai suradau atsakyma internete :))))