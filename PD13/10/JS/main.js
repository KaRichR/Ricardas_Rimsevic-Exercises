let a = 1;
let b = 2;
let c = 3;
let sum;

if (a > b && b > c) {
    sum = a + b;
} else if (b > c && c > a) {
    sum = b + c;
} else if(c > a && a > b) {
    sum = c + a;
} else{
    console.log("Kazkas ne taip")
}

console.log(sum);