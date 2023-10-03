const dalyvavoBegiku = 4;
const begikuLaikai = [22, 20, 25, 25];

let greiciausioBegikoLaikas = begikuLaikai[0];
let greiciausioBegikoIndeksas = 0;

for (let i = 1; i < dalyvavoBegiku; i++) {
  if (begikuLaikai[i] < greiciausioBegikoLaikas) {
    greiciausioBegikoLaikas = begikuLaikai[i];
    greiciausioBegikoIndeksas = i;
  }
}

let vidutinisLaikas = 0;

for (let i = 0; i < dalyvavoBegiku; i++) {
  vidutinisLaikas += begikuLaikai[i];
}

vidutinisLaikas /= dalyvavoBegiku;

const skirtumas = (vidutinisLaikas - greiciausioBegikoLaikas).toFixed(0);

console.log(`Greičiausio bėgiko laikas: ${greiciausioBegikoLaikas} sek.`);
console.log(`Jis buvo: ${skirtumas} sek. geresnis už vidurkį.`);
