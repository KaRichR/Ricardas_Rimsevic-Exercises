let n = 3;
let n1 = 18;
let n2 = 10;
let n3 = 10;

let vidutinisLaikas = (n1 + n2 + n3) / n;
let k = 0; 

if (n1 > 20) {
  k++;
}
if (n2 > 20) {
  k++;
}
if (n3 > 20) {
  k++;
}

console.log(`Vidutiniškai gydytojas skiria ${vidutinisLaikas.toFixed(1)} minučių vienam pacientui.`);
console.log(`Pacientų, kurių vizitai truko ilgiau nei 20 minučių: ${k}`);
