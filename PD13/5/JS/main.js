function apskritimoPlotas(radius){
    return Math.PI * radius * radius;
}

function kvadratoPlotas(krastine){
    return krastine * krastine;
}

function staciakampioPlotas(a, b){
    return a * b;
}

const apskritimoRadius = 1; 
const krastine = 2; 
const a = 2; 
const b = 3;


const apskritimas = apskritimoPlotas(apskritimoRadius);
const kvadratas = kvadratoPlotas(krastine);
const staciakampis = staciakampioPlotas(a, b);

if (apskritimas > kvadratas && apskritimas > staciakampis){
    console.log(`Apskritimas didžiausis ${apskritimas}`)
} 
else if (kvadratas > apskritimas && kvadratas > staciakampis){
    console.log(`Kvadratas didžiausis ${kvadratas}`)
}
else{
    console.log(`Staciakampis didžiausis ${staciakampis}`)
}



