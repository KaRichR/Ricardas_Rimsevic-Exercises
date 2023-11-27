function keistiRaides(eilute) {
    return eilute
        .split('')
        .map(simbolis => (simbolis === simbolis.toLowerCase() ? simbolis.toUpperCase() : simbolis.toLowerCase()))
        .join('');
}

let pradinėEilutė = "Hello World";
let pakeistaEilutė = keistiRaides(pradinėEilutė);

console.log(pakeistaEilutė); 
