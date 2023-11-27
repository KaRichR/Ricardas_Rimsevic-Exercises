function kopijuotiMasyva(pradinisMasyvas) {
    return [].concat(pradinisMasyvas);
}

let pradinis = [1, 2, 3, 4, 5];
let kopija = kopijuotiMasyva(pradinis);

console.log(pradinis); 
console.log(kopija);   
