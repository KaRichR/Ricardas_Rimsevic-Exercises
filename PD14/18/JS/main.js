let a = 96;
let z = 103;

let k = 0;

for (let num = a; num <= z; num++) {
  k += num.toString().length;
}

console.log(`Reikės ${k} plokštelių visų butų numeriams.`);
